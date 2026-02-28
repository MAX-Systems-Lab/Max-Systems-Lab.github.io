# Max Systems Lab Website

This repository hosts the Max Systems Lab website built on Jekyll (`al-folio`).

## Active Navigation

The current top navigation order is:

1. Home
2. Research
3. Publications
4. Repositories
5. People
6. Join

## Run Locally

### Docker (recommended)

```bash
docker compose pull
docker compose up
```

Site URL:

- http://localhost:8080/

Stop server:

```bash
docker compose down
```

## Edit Guide by Section

### 1) Home

Edit:

- `_pages/about.md`

What to update:

- Top image gallery (`.lab-top-gallery`)
- Hero title/description/CTA buttons
- Lab focus cards

Related content:

- `_news/*.md` for announcements shown on home

### 2) Research

Edit:

- `_pages/research.md`
- `_data/lab_projects.yml`
- `_data/sponsors.yml`

What to update:

- Research subject cards on the main research page
- Sub-project details (`subprojects` under each track) for each research detail page
- Sponsors section at bottom (name/logo/link)

Research detail pages:

- `_pages/research-ml-microarchitecture-simulation.md`
- `_pages/research-gpu-design-space-exploration.md`
- `_pages/research-llm-hpc-performance-systems.md`
- `_pages/research-automated-hardware-software-codesign.md`
- `_includes/research_detail.liquid` (shared detail-page renderer)

### 3) Publications

Edit:

- `_bibliography/papers.bib` (add/remove publication entries)
- `_pages/publications.md` (page wrapper/search block)

Optional metadata:

- `_data/socials.yml` (`scholar_userid`)
- `_data/citations.yml` (cached citation counters)

Publication links supported in BibTeX entries:

- `doi`
- `html`
- `pdf`
- `video`

Publication image support in BibTeX entries:

- `image` (recommended): supports a full URL or a site path like `/assets/img/publications/my-paper.png`
- `preview` (legacy): filename under `assets/img/publication_preview/` (example: `preview={my-paper.png}`)

Example:

```bibtex
@inproceedings{example2026,
  title  = {Example Paper},
  author = {Doe, Jane and Smith, John},
  year   = {2026},
  image  = {/assets/img/publications/example-paper.png},
  doi    = {10.0000/example}
}
```

### 4) Repositories

Edit:

- `_data/repositories.yml`
- `_pages/repositories.md`

What to update:

- `featured` cards (name, URL, summary, focus)
- GitHub profile username under `github_users`

### 5) People

Edit:

- `_pages/profiles.md`

What to update:

- Professor block at top
- PhD / Grad / UnderGrad member cards
- Member images and focus text

### 6) Join

Edit:

- `_pages/join.md`

What to update:

- Openings
- Application steps
- Contact/application email

## Styling (All Pages)

Edit:

- `_sass/_lab-home.scss`

This stylesheet controls:

- Home layout and gallery
- Research cards
- Publication styles
- Repository cards
- People and Join page visuals
- Dark mode overrides

## Global Settings

Edit:

- `_config.yml`

Important fields:

- `url` and `baseurl`
- site title/description
- search + bib search toggles
- nav behavior and global options

## Cleanup Applied

Removed unused default/demo content from this customized lab site:

- Hidden default pages in `_pages/` (`blog`, `books`, `cv`, `dropdown`, `projects`, `teaching`, `about_einstein`)
- Sample content in `_posts/`, `_projects/`, `_teachings/`, `_books/`
