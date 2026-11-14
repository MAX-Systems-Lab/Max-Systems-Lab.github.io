---
layout: page
title: News
permalink: /news/
description: Papers, awards, talks, and lab updates.
nav: true
nav_order: 4
news_tags: # filter chips shown when at least one news item has the tag
  - { value: paper, label: Papers }
  - { value: preprint, label: Preprints }
  - { value: award, label: Awards }
  - { value: talk, label: Talks }
  - { value: grant, label: Grants }
  - { value: people, label: People }
---

<div class="lab">
  <div class="lab-pub-tools lab-news-tools">
    <div class="lab-filter" data-key="type" role="group" aria-label="Filter news">
      <button class="lab-filter-btn" data-value="all">All</button>
      {% for t in page.news_tags %}
        <button class="lab-filter-btn" data-value="{{ t.value }}">
          {% if t.value == 'award' %}{% include lab/award-icon.liquid %}{% endif %}
          {{ t.label }}
        </button>
      {% endfor %}
    </div>
    <button class="lab-sort-btn" type="button" data-sort-toggle>
      <i class="fa-solid fa-arrow-down-wide-short"></i> <span>Newest first</span>
    </button>
  </div>

  <div data-filter-target>
    {% include lab/news-list.liquid %}
    <p class="lab-muted" data-filter-empty hidden>No news with this tag yet.</p>
  </div>
</div>

<script src="{{ '/assets/js/lab-filter.js' | relative_url | bust_file_cache }}"></script>
