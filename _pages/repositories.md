---
layout: page
permalink: /repositories/
title: Repositories
description: Open-source code, tools, and research artifacts from the lab.
nav: true
nav_order: 4
---

<section class="repo-hero">
  <h2>Repositories and Code</h2>
  <p>
    We release code, benchmarks, and tooling aligned with our research in architecture simulation, ML systems, and HPC.
    These repositories are active outputs from ongoing lab projects.
  </p>
</section>

<section class="repo-grid">
  {% for repo in site.data.repositories.featured %}
    <article class="repo-card">
      <div class="repo-card-top">
        <h3>{{ repo.name }}</h3>
        <span class="repo-focus">{{ repo.focus }}</span>
      </div>
      <p>{{ repo.summary }}</p>
      <a class="repo-open" href="{{ repo.url }}" target="_blank">Open Repository</a>
    </article>
  {% endfor %}
</section>

{% if site.data.repositories.github_users %}

  <section class="repo-profile-link">
    <h3>GitHub Profile</h3>
    <p>
      Primary profile:
      <a href="https://github.com/{{ site.data.repositories.github_users[0] }}" target="_blank">
        github.com/{{ site.data.repositories.github_users[0] }}
      </a>
    </p>
  </section>
{% endif %}
