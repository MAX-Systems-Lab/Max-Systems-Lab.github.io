---
layout: page
permalink: /publications/
title: Publications
description: Papers from the lab. Filter by type or research area, search, or change the order.
nav: true
nav_order: 2
pub_types: # filter chips; a paper's type comes from `category` in papers.bib or is detected automatically
  - { value: conference, label: Conference }
  - { value: journal, label: Journal }
  - { value: workshop, label: Workshop }
  - { value: preprint, label: Preprint }
  - { value: thesis, label: Thesis }
  - { value: award, label: Award }
---

<div class="lab">
  {% include lab/stats.liquid %}

  <div class="lab-pub-tools">
    <div class="lab-filter-row">
      <span class="lab-filter-label">Type</span>
      <div class="lab-filter" data-key="type" role="group" aria-label="Filter by publication type">
        <button class="lab-filter-btn" data-value="all">All</button>
        {% for t in page.pub_types %}
          <button class="lab-filter-btn" data-value="{{ t.value }}">
            {% if t.value == 'award' %}{% include lab/award-icon.liquid %}{% endif %}
            {{ t.label }}
          </button>
        {% endfor %}
      </div>
    </div>
    <div class="lab-filter-row">
      <span class="lab-filter-label">Area</span>
      <div class="lab-filter" data-key="thrust" role="group" aria-label="Filter by research area">
        <button class="lab-filter-btn" data-value="all">All</button>
        {% assign areas = site.research | sort: 'order' %}
        {% for area in areas %}
          <button class="lab-filter-btn" data-value="{{ area.thrust }}">{{ area.short | default: area.title }}</button>
        {% endfor %}
        <button class="lab-filter-btn" data-value="earlier">Earlier work</button>
      </div>
    </div>
    <div class="lab-search-row">
      {% include bib_search.liquid %}
      <button class="lab-sort-btn" type="button" data-sort-toggle>
        <i class="fa-solid fa-arrow-down-wide-short"></i> <span>Newest first</span>
      </button>
    </div>
  </div>

  <div data-filter-target>
    <div class="publications">
      {% bibliography %}
    </div>
    <p class="lab-muted" data-filter-empty hidden>No papers match these filters.</p>
  </div>

  <p class="lab-muted">
    Full and up-to-date list on
    <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}" target="_blank" rel="noopener">Google Scholar</a>.
    Code and artifacts: <a href="{{ '/repositories/' | relative_url }}">Code</a>.
  </p>
</div>

<script src="{{ '/assets/js/lab-filter.js' | relative_url | bust_file_cache }}"></script>
