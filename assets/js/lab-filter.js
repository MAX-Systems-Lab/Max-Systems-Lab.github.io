// Filter chips, counts, and time sorting for the Publications and News pages.
//
// Markup:
//   <div class="lab-filter" data-key="type">  <button data-value="all">All</button> <button data-value="workshop">…
//   <button data-sort-toggle>…</button>
//   <div data-filter-target> … list items (<li>) carrying data-type / data-thrust attributes … </div>
// An item matches a chip when its space-separated attribute contains the chip value.
document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("[data-filter-target]");
  if (!target) return;

  const groups = [...document.querySelectorAll(".lab-filter[data-key]")];
  const items = () => [...target.querySelectorAll("li")].filter((li) => attrEl(li));
  const attrEl = (li) => (li.matches("[data-type]") ? li : li.querySelector(":scope [data-type]"));
  const values = (li, key) => (attrEl(li)?.dataset[key] || "").split(/\s+/).filter(Boolean);
  const state = Object.fromEntries(groups.map((g) => [g.dataset.key, "all"]));
  const params = new URLSearchParams(location.search);

  document.querySelectorAll('[data-stat="pubs"]').forEach((e) => (e.textContent = items().length));

  // Counts on chips; hide chips with no items.
  groups.forEach((g) => {
    g.querySelectorAll("button[data-value]").forEach((b) => {
      const v = b.dataset.value;
      const n = v === "all" ? items().length : items().filter((li) => values(li, g.dataset.key).includes(v)).length;
      const c = document.createElement("span");
      c.className = "lab-count";
      c.textContent = n;
      b.append(c);
      if (n === 0 && v !== "all") b.hidden = true;
    });
  });

  const apply = () => {
    items().forEach((li) => {
      const ok = groups.every((g) => state[g.dataset.key] === "all" || values(li, g.dataset.key).includes(state[g.dataset.key]));
      li.classList.toggle("filter-hidden", !ok);
    });
    // Hide year headings (publications) with nothing visible under them.
    target.querySelectorAll("h2.bibliography").forEach((h) => {
      const ol = h.nextElementSibling;
      if (!ol || ol.tagName !== "OL") return;
      const empty = !ol.querySelector(":scope > li:not(.filter-hidden)");
      h.classList.toggle("filter-hidden", empty);
      ol.classList.toggle("filter-hidden", empty);
    });
    groups.forEach((g) =>
      g.querySelectorAll("button[data-value]").forEach((b) => b.classList.toggle("active", b.dataset.value === state[g.dataset.key]))
    );
    const empty = document.querySelector("[data-filter-empty]");
    if (empty) empty.hidden = items().some((li) => !li.classList.contains("filter-hidden"));
    const q = new URLSearchParams();
    Object.entries(state).forEach(([k, v]) => v !== "all" && q.set(k, v));
    if (target.dataset.order === "asc") q.set("sort", "oldest");
    history.replaceState(null, "", q.toString() ? `?${q}` : location.pathname);
  };

  groups.forEach((g) => {
    const initial = params.get(g.dataset.key);
    if (initial && g.querySelector(`button[data-value="${CSS.escape(initial)}"]:not([hidden])`)) state[g.dataset.key] = initial;
    g.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-value]");
      if (!b) return;
      state[g.dataset.key] = b.dataset.value;
      apply();
    });
  });

  // Sort by time: reverse year groups (publications) and the items inside each list.
  const sortBtn = document.querySelector("[data-sort-toggle]");
  const reverse = () => {
    const lists = [...target.querySelectorAll("ol.bibliography, ul.lab-news")];
    lists.forEach((list) => [...list.children].reverse().forEach((c) => list.append(c)));
    const bib = target.querySelector(".publications") || target;
    const pairs = [...bib.querySelectorAll(":scope > h2.bibliography")].map((h) => [h, h.nextElementSibling]);
    if (pairs.length) {
      const anchor = pairs[pairs.length - 1][1].nextSibling;
      pairs.reverse().forEach(([h, ol]) => {
        bib.insertBefore(h, anchor);
        bib.insertBefore(ol, anchor);
      });
    }
    target.dataset.order = target.dataset.order === "asc" ? "desc" : "asc";
    if (sortBtn) {
      const asc = target.dataset.order === "asc";
      sortBtn.querySelector("span").textContent = asc ? "Oldest first" : "Newest first";
      sortBtn.querySelector("i").className = asc ? "fa-solid fa-arrow-up-wide-short" : "fa-solid fa-arrow-down-wide-short";
    }
  };
  target.dataset.order = "desc";
  if (sortBtn)
    sortBtn.addEventListener("click", () => {
      reverse();
      apply();
    });
  if (params.get("sort") === "oldest") reverse();

  apply();
});
