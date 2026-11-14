# How to update the lab website

Everything you normally change lives in a few plain-text files. Edit on GitHub (pencil icon) or locally, commit to
`main`, and the site redeploys automatically in a few minutes.

| I want to…                         | Edit this                              |
| ---------------------------------- | -------------------------------------- |
| Add a paper                        | `_bibliography/papers.bib`             |
| Post news                          | a new file in `_news/` (or the script) |
| Add / update a person              | `_data/people.yml`                     |
| Add an award                       | `_data/awards.yml`                     |
| Add a sponsor or grant             | `_data/funding.yml`                    |
| Change a research area             | `_research/<area>.md`                  |
| Change tagline, recruiting, emails | `_data/lab.yml`                        |

---

## Fastest way: one command (or one click) for papers + news

`bin/add_news.py` adds the paper to `papers.bib` **and** writes the news item for you. It only uses the Python
standard library.

```bash
# New arXiv preprint (fetches title, authors, abstract)
python3 bin/add_news.py arxiv 2507.01234 --area perf

# Accepted paper: paste BibTeX from Google Scholar / DBLP / ACM
pbpaste | python3 bin/add_news.py bibtex - --area compiler --selected

# Announce a paper that is already in papers.bib
python3 bin/add_news.py paper concorde2025

# Anything else
python3 bin/add_news.py text "Krishbin passed the qualifying exam!" --type people
```

Options: `--date 2026-05-01`, `--type paper,award` (one or more tags), `--category workshop`, `--area` (see below),
`--selected` (feature on home page), `--message "Custom text with {paper}"`, `--no-news`, `--dry-run`.

**No terminal?** Use GitHub: **Actions → "Add news / paper" → Run workflow**, choose the mode, and paste the arXiv id,
bib key, BibTeX, or news text. It commits and redeploys the site. Works from a phone.

---

## Papers: `_bibliography/papers.bib`

Paste a normal BibTeX entry and add a few optional fields:

```bibtex
@inproceedings{pandey2026example,
  thrust      = {perf},        % research area: perf | compiler | workload | data | earlier
  category    = {workshop},    % conference | journal | workshop | preprint (optional, auto-detected)
  selected    = {true},        % show under Selected publications on the home page
  highlight   = {true},        % gold "Highlight" card at the top of the home page
  title       = {...},
  author      = {Pandey, Santosh and ...},
  booktitle   = {Proceedings of ... (MICRO)},
  year        = {2026},
  abbr        = {MICRO},       % venue badge
  award       = {true},        % optional: highlights the paper
  award_name  = {Best Paper Award},
  arxiv       = {2507.01234},  % adds an arXiv button
  pdf         = {https://...}, % or a file name in assets/pdf/
  code        = {https://github.com/...},
  slides      = {https://...},
  video       = {https://...},
  google_scholar_id = {xxxxxxxxxxxx}, % shows the citation badge
  bibtex_show = {true}
}
```

The `thrust` field puts the paper on that research area's page and in the area filter on Publications.

`category` sets the Type filter. If you leave it out it is detected: `@article` → journal (arXiv → preprint),
`@inproceedings` with "Workshop" in the booktitle → workshop, otherwise conference. Papers with an `award` field
also appear under the **Award** filter.

Area ids: `perf` (performance modeling), `compiler` (programs and compilers), `workload` (representative benchmarks and
workload characterization), `data` (retrieval and graph systems), `earlier` (earlier work).

Citation counts update automatically three times a week from Google Scholar (`update-citations.yml`).

---

## News: `_news/YYYY-MM-DD-short-name.md`

```markdown
---
date: 2026-05-01
type: [paper, award] # one or more tags: paper | preprint | award | talk | people | grant
---

Nadika received the XYZ Fellowship! Markdown [links](https://...) work.
```

Tags become filter buttons on the News page. The home page shows the latest 6 items (change `news_limit` in
`_pages/about.md`).

---

## People: `_data/people.yml`

```yaml
- name: New Student
  role: phd # pi | postdoc | phd | ms | ug | visitor | alumni
  photo: new-student.jpg # put the image in assets/img/people/ (square works best)
  area: compiler # optional: also listed on that research page
  focus: One-line research focus
  links:
    website: https://...
    linkedin: https://...
    github: https://...
    scholar: https://...
```

When someone graduates, change `role: alumni` and add `degree: PhD 2028` and `now: Research Scientist, Google`.

## Awards: `_data/awards.yml`

```yaml
- year: 2026
  who: Nadika Poudel # or a list: [Krishbin Paudel, Nadika Poudel]
  title: Best Paper Award, MICRO 2026
  url: https://... # optional
```

Awards show on the People page and on that person's card automatically.

## Funding: `_data/funding.yml`

```yaml
- name: National Science Foundation
  url: https://www.nsf.gov
  logo: /assets/img/sponsors/nsf.svg
  grant: "CCF-2600000: Explainable Performance Models"
  current: true # false moves it to Past sponsors
```

## Research areas: `_research/*.md`

Each file is one research area page (`/research/<file-name>/`). Edit the front matter (`title`, `summary`, `questions`,
`projects`) and the text below it. To add an area, copy a file, give it a new `thrust:` id and `order:`.

---

## Preview locally (optional)

```bash
docker compose up        # then open http://localhost:8080
```
