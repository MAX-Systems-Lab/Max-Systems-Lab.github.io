---
layout: page
permalink: /publications/
title: Publications
description: Papers from the lab, newest first. Filter by research area or search by title, author, or venue.
nav: true
nav_order: 2
---

<div class="lab">
  <div class="lab-pub-tools">
    <div class="lab-filter" role="group" aria-label="Filter by research area">
      <button class="lab-filter-btn active" data-thrust="all">All</button>
      {% assign areas = site.research | sort: 'order' %}
      {% for area in areas %}
        <button class="lab-filter-btn" data-thrust="{{ area.thrust }}">{{ area.short | default: area.title }}</button>
      {% endfor %}
      <button class="lab-filter-btn" data-thrust="earlier">Earlier work</button>
    </div>
    {% include bib_search.liquid %}
  </div>

  <div class="publications">
    {% bibliography %}
  </div>

  <p class="lab-muted">
    Full and up-to-date list on
    <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}" target="_blank" rel="noopener">Google Scholar</a>.
    Code and artifacts: <a href="{{ '/repositories/' | relative_url }}">Code</a>.
  </p>
</div>

<script src="{{ '/assets/js/lab-pub-filter.js' | relative_url | bust_file_cache }}"></script>
