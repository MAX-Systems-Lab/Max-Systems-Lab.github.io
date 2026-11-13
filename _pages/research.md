---
layout: page
title: Research
permalink: /research/
description: We use machine learning to model, explain, and optimize computer systems across the stack.
nav: true
nav_order: 1
---

<div class="lab">
  <div class="lab-area-list">
    {% assign areas = site.research | sort: 'order' %}
    {% for area in areas %}
      <a class="lab-area-row" href="{{ area.url | relative_url }}">
        <span class="lab-area-icon"><i class="{{ area.icon }}"></i></span>
        <div>
          <h3>{{ area.title }}</h3>
          <p>{{ area.summary }}</p>
          {% if area.projects %}
            <ul class="lab-chip-list">
              {% for pr in area.projects %}<li>{{ pr.title }}</li>{% endfor %}
            </ul>
          {% endif %}
        </div>
        <i class="fa-solid fa-chevron-right lab-area-chevron"></i>
      </a>
    {% endfor %}
  </div>
</div>
