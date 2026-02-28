---
layout: page
title: Research
permalink: /research/
description: Research directions and active themes at Max Systems Lab.
nav: true
nav_order: 2
---

<section class="research-overview">
  <p>
    Our current agenda is organized into four active focus areas aligned with architecture modeling, compiler/program optimization, retrieval systems, and architecture security.
  </p>
</section>

<section class="research-grid" aria-label="Research themes">
  {% for track in site.data.lab_projects.tracks %}
    <a class="research-card-link" href="{{ '/research/' | append: track.slug | append: '/' | relative_url }}">
      <article class="research-card">
        <div class="research-card-body">
          <h3>{{ track.title }}</h3>
          <p class="research-card-summary">{{ track.summary }}</p>
          <p class="research-card-detail">
            {{ track.overview | strip_html | truncatewords: 20 }}
          </p>
        </div>
      </article>
    </a>
  {% endfor %}
</section>

<section class="sponsors-section" aria-label="Sponsors">
  <div class="research-section-head">
    <h2>Sponsors</h2>
    <p>Our work is supported by academic, government, and industry partners.</p>
  </div>
  <div class="sponsors-grid">
    {% for sponsor in site.data.sponsors %}
      <a class="sponsor-card" href="{{ sponsor.url }}" target="_blank" rel="noopener noreferrer">
        <img src="{{ sponsor.logo | relative_url }}" alt="{{ sponsor.name }} logo" loading="lazy" />
        <span>{{ sponsor.name }}</span>
      </a>
    {% endfor %}
  </div>
</section>
