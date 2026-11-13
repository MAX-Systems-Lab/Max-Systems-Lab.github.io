// Research-area filter for the Publications page.
// Each entry carries data-thrust (from the `thrust` field in papers.bib).
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".lab-filter-btn");
  if (!buttons.length) return;

  const apply = (thrust) => {
    buttons.forEach((b) => b.classList.toggle("active", b.dataset.thrust === thrust));
    document.querySelectorAll(".publications .bibliography > li").forEach((li) => {
      const el = li.querySelector("[data-thrust]");
      const t = el ? el.dataset.thrust : "";
      li.classList.toggle("thrust-hidden", thrust !== "all" && t !== thrust);
    });
    // Hide year headings with no visible papers.
    document.querySelectorAll(".publications h2.bibliography").forEach((h) => {
      const ol = h.nextElementSibling;
      if (!ol || ol.tagName !== "OL") return;
      const visible = ol.querySelectorAll(":scope > li:not(.thrust-hidden)").length;
      h.classList.toggle("thrust-hidden", visible === 0);
      ol.classList.toggle("thrust-hidden", visible === 0);
    });
  };

  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      apply(b.dataset.thrust);
      history.replaceState(null, "", b.dataset.thrust === "all" ? location.pathname : `?area=${b.dataset.thrust}`);
    })
  );

  const initial = new URLSearchParams(location.search).get("area");
  if (initial) apply(initial);
});
