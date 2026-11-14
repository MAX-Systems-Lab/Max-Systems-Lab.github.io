#!/usr/bin/env python3
"""
Add news (and papers) to the MAX Systems Lab website in one command.

  # 1) New arXiv preprint -> adds the paper to papers.bib AND posts a news item
  python3 bin/add_news.py arxiv 2507.01234 --area perf

  # 2) BibTeX you copied from Google Scholar / DBLP / ACM (file or stdin)
  #    -> appends any new entries to papers.bib AND posts "accepted at <venue>" news
  python3 bin/add_news.py bibtex new.bib --area compiler
  pbpaste | python3 bin/add_news.py bibtex -          # macOS clipboard

  # 3) Announce a paper that is already in papers.bib
  python3 bin/add_news.py paper concorde2025

  # 4) Any other news (award, talk, new member, grant ...)
  python3 bin/add_news.py text "Nadika passed her qualifying exam!" --type people

Common options:
  --date YYYY-MM-DD   date of the news item (default: today)
  --type TAGS         one or more tags, comma-separated: paper,preprint,award,talk,people,grant
  --category CAT      paper type: conference | journal | workshop | preprint (auto-detected if omitted)
  --area ID           research area for new papers: perf, compiler, hetero, data, security
  --selected          also feature the paper on the home page
  --message TEXT      custom news text (papers only; otherwise it is generated)
  --dry-run           print what would change without writing files

Only the Python standard library is used, so it runs anywhere (including GitHub Actions).
"""

import argparse
import datetime as dt
import pathlib
import re
import sys
import textwrap
import urllib.request
import xml.etree.ElementTree as ET

ROOT = pathlib.Path(__file__).resolve().parent.parent
BIB = ROOT / "_bibliography" / "papers.bib"
NEWS = ROOT / "_news"
AREAS = {"perf", "compiler", "hetero", "data", "security", "earlier"}


# --------------------------------------------------------------------------- #
# Minimal BibTeX parsing (enough for well-formed entries from Scholar/DBLP/ACM)
# --------------------------------------------------------------------------- #
def split_entries(text):
    """Yield raw '@type{key, ...}' strings with balanced braces."""
    i = 0
    while True:
        start = text.find("@", i)
        if start < 0:
            return
        brace = text.find("{", start)
        if brace < 0:
            return
        depth, j = 0, brace
        while j < len(text):
            if text[j] == "{":
                depth += 1
            elif text[j] == "}":
                depth -= 1
                if depth == 0:
                    break
            j += 1
        yield text[start : j + 1]
        i = j + 1


def parse_entry(raw):
    m = re.match(r"@(\w+)\s*\{\s*([^,\s]+)\s*,", raw)
    if not m:
        return None
    etype, key = m.group(1).lower(), m.group(2)
    body = raw[m.end() : -1]
    fields, i = {}, 0
    while i < len(body):
        fm = re.compile(r"\s*,?\s*([\w\-]+)\s*=\s*").match(body, i)
        if not fm:
            break
        name, i = fm.group(1).lower(), fm.end()
        if i >= len(body):
            break
        if body[i] == "{":
            depth, j = 0, i
            while j < len(body):
                depth += body[j] == "{"
                depth -= body[j] == "}"
                if depth == 0:
                    break
                j += 1
            value, i = body[i + 1 : j], j + 1
        elif body[i] == '"':
            j = body.index('"', i + 1)
            value, i = body[i + 1 : j], j + 1
        else:
            vm = re.compile(r"[^,\n]+").match(body, i)
            value, i = vm.group(0).strip(), vm.end()
        fields[name] = " ".join(value.split())
    return {"type": etype, "key": key, "fields": fields}


def existing_entries():
    text = BIB.read_text(encoding="utf-8")
    entries = [e for e in (parse_entry(r) for r in split_entries(text)) if e]
    return {e["key"]: e for e in entries}


def norm_title(t):
    return re.sub(r"[^a-z0-9]", "", t.lower())


def format_entry(entry):
    f = entry["fields"]
    order = ["thrust", "category", "selected", "title", "author", "booktitle", "journal", "year", "abbr", "arxiv", "doi",
             "html", "pdf", "code", "abstract", "google_scholar_id", "bibtex_show"]
    keys = [k for k in order if k in f] + [k for k in f if k not in order]
    width = max(len(k) for k in keys)
    lines = [f"  {k.ljust(width)} = {{{f[k]}}}" for k in keys]
    return f"@{entry['type']}{{{entry['key']},\n" + ",\n".join(lines) + "\n}\n"


def make_key(fields):
    first_author = fields.get("author", "anon").split(" and ")[0]
    last = first_author.split(",")[0] if "," in first_author else first_author.split()[-1]
    word = next((w for w in re.findall(r"[A-Za-z]+", fields.get("title", "")) if len(w) > 3), "paper")
    return re.sub(r"[^a-z0-9]", "", f"{last}{fields.get('year', '')}{word}".lower())


# --------------------------------------------------------------------------- #
# Venue abbreviations for the badge (extend as needed)
# --------------------------------------------------------------------------- #
VENUES = ["ISCA", "MICRO", "HPCA", "ASPLOS", "SIGMETRICS", "SC", "PPoPP", "PLDI", "CGO", "OSDI", "SOSP", "NSDI",
          "EuroSys", "ATC", "MLSys", "NeurIPS", "ICML", "ICLR", "ISPASS", "IISWC", "ICS", "HPDC", "IPDPS", "DAC",
          "ICCAD", "TACO", "TPDS", "TC", "TCAD", "CAL", "IEEE Micro", "SIGMOD", "VLDB", "KDD", "ISLPED", "HPEC",
          "USENIX Security", "CCS", "S&P"]


def guess_abbr(fields):
    venue = fields.get("booktitle") or fields.get("journal") or ""
    paren = re.search(r"\(([A-Za-z&]+)\)", venue)
    if "workshop" in venue.lower() and paren:
        return paren.group(1)
    for v in VENUES:
        if re.search(r"(?<![A-Za-z])" + re.escape(v) + r"(?![A-Za-z])", venue):
            return v
    if "arxiv" in venue.lower() or fields.get("arxiv"):
        return "arXiv"
    m = re.search(r"\(([A-Za-z&]+)\)", venue)
    return m.group(1) if m else ""


# --------------------------------------------------------------------------- #
# arXiv
# --------------------------------------------------------------------------- #
def fetch_arxiv(arxiv_id):
    arxiv_id = re.sub(r"^(https?://arxiv\.org/(abs|pdf)/|arxiv:)", "", arxiv_id.strip(), flags=re.I)
    arxiv_id = re.sub(r"v\d+$|\.pdf$", "", arxiv_id)
    url = f"http://export.arxiv.org/api/query?id_list={arxiv_id}"
    req = urllib.request.Request(url, headers={"User-Agent": "lab-website-news-script"})
    with urllib.request.urlopen(req, timeout=30) as r:
        root = ET.fromstring(r.read())
    ns = {"a": "http://www.w3.org/2005/Atom"}
    e = root.find("a:entry", ns)
    if e is None or e.find("a:title", ns) is None:
        sys.exit(f"arXiv id {arxiv_id} not found")
    title = " ".join(e.find("a:title", ns).text.split())
    authors = []
    for a in e.findall("a:author", ns):
        parts = a.find("a:name", ns).text.split()
        authors.append(f"{parts[-1]}, {' '.join(parts[:-1])}" if len(parts) > 1 else parts[0])
    year = e.find("a:published", ns).text[:4]
    abstract = " ".join(e.find("a:summary", ns).text.split())
    fields = {
        "title": title,
        "author": " and ".join(authors),
        "journal": f"arXiv preprint arXiv:{arxiv_id}",
        "year": year,
        "abbr": "arXiv",
        "arxiv": arxiv_id,
        "html": f"https://arxiv.org/abs/{arxiv_id}",
        "pdf": f"https://arxiv.org/pdf/{arxiv_id}",
        "abstract": abstract.replace("{", "").replace("}", "").replace("%", "\\%"),
        "bibtex_show": "true",
    }
    return {"type": "article", "key": make_key(fields), "fields": fields}


# --------------------------------------------------------------------------- #
# Writing
# --------------------------------------------------------------------------- #
def strip_braces(s):
    return s.replace("{", "").replace("}", "").replace("\\&", "&")


def add_to_bib(entry, args):
    existing = existing_entries()
    titles = {norm_title(e["fields"].get("title", "")): k for k, e in existing.items()}
    t = norm_title(entry["fields"].get("title", ""))
    if entry["key"] in existing or t in titles:
        key = entry["key"] if entry["key"] in existing else titles[t]
        print(f"  = already in papers.bib as '{key}' (not added again)")
        return existing[key], False
    f = entry["fields"]
    if args.area:
        f["thrust"] = args.area
    if args.selected:
        f["selected"] = "true"
    if args.category:
        f["category"] = args.category
    f.setdefault("bibtex_show", "true")
    if not f.get("abbr"):
        abbr = guess_abbr(f)
        if abbr:
            f["abbr"] = abbr
    text = "\n" + format_entry(entry)
    if args.dry_run:
        print(text)
    else:
        with BIB.open("a", encoding="utf-8") as fh:
            fh.write(text)
    print(f"  + added '{entry['key']}' to _bibliography/papers.bib")
    return entry, True


def write_news(message, args, slug_hint):
    date = args.date or dt.date.today().isoformat()
    slug = re.sub(r"[^a-z0-9]+", "-", slug_hint.lower()).strip("-")[:50] or "news"
    path = NEWS / f"{date}-{slug}.md"
    tags = [t.strip().lower() for t in (args.type or "").split(",") if t.strip()]
    front = f"---\ndate: {date}\n" + (f"type: [{', '.join(tags)}]\n" if tags else "") + "---\n\n"
    content = front + textwrap.fill(message, 110) + "\n"
    if args.dry_run:
        print(f"--- {path.relative_to(ROOT)}\n{content}")
    else:
        path.write_text(content, encoding="utf-8")
    print(f"  + news: {path.relative_to(ROOT)}")


def paper_news(entry, args, preprint=False):
    f = entry["fields"]
    title = strip_braces(f.get("title", entry["key"]))
    link = f"[{title}](/publications/#{entry['key']})"
    if args.message:
        return args.message.replace("{paper}", link)
    if preprint:
        return f"New preprint on arXiv: {link}."
    venue = f.get("abbr") or strip_braces(f.get("booktitle") or f.get("journal") or "")
    year = f.get("year", "")
    where = f" at **{venue} {year}**".rstrip() if venue else ""
    booktitle = f.get("booktitle", "")
    kind = "workshop paper" if f.get("category") == "workshop" or "workshop" in booktitle.lower() else "paper"
    return f"Our {kind} {link} has been accepted{where}." if where else f"New {kind}: {link}."


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("mode", choices=["arxiv", "bibtex", "paper", "text"])
    p.add_argument("value", help="arXiv id/URL, .bib file (or - for stdin), bib key, or news text")
    p.add_argument("--date")
    p.add_argument("--type")
    p.add_argument("--area", choices=sorted(AREAS))
    p.add_argument("--category", choices=["conference", "journal", "workshop", "preprint"])
    p.add_argument("--selected", action="store_true")
    p.add_argument("--message")
    p.add_argument("--no-news", action="store_true", help="only add the paper, do not post news")
    p.add_argument("--dry-run", action="store_true")
    args = p.parse_args()

    if args.mode == "text":
        args.type = args.type or None
        write_news(args.value, args, args.value[:40])
        return

    if args.mode == "arxiv":
        entry, _ = add_to_bib(fetch_arxiv(args.value), args)
        args.type = args.type or "preprint"
        if not args.no_news:
            write_news(paper_news(entry, args, preprint=True), args, entry["key"])
        return

    if args.mode == "paper":
        entries = existing_entries()
        if args.value not in entries:
            sys.exit(f"'{args.value}' not found in papers.bib. Keys: {', '.join(entries)}")
        args.type = args.type or "paper"
        write_news(paper_news(entries[args.value], args), args, args.value)
        return

    if args.mode == "bibtex":
        raw = sys.stdin.read() if args.value == "-" else pathlib.Path(args.value).read_text(encoding="utf-8")
        parsed = [e for e in (parse_entry(r) for r in split_entries(raw)) if e]
        if not parsed:
            sys.exit("No BibTeX entries found.")
        args.type = args.type or "paper"
        for e in parsed:
            entry, _ = add_to_bib(e, args)
            if not args.no_news:
                write_news(paper_news(entry, args), args, entry["key"])


if __name__ == "__main__":
    main()
