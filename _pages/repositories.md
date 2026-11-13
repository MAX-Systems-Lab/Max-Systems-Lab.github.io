---
layout: page
permalink: /repositories/
title: Code
description: Open-source code and research artifacts from the lab.
nav: false
---

<div class="lab-project-grid">
  {% for repo in site.data.repositories.featured %}
    <a class="lab-project lab-project-link" href="{{ repo.url }}" target="_blank" rel="noopener">
      <span class="lab-tag">{{ repo.focus }}</span>
      <h3>{{ repo.name }}</h3>
      <p>{{ repo.summary }}</p>
    </a>
  {% endfor %}
</div>

{% if site.data.repositories.github_users %}

  <p class="lab-muted">
    More on GitHub:
    <a href="https://github.com/{{ site.data.repositories.github_users[0] }}" target="_blank" rel="noopener">github.com/{{ site.data.repositories.github_users[0] }}</a>
  </p>
{% endif %}
