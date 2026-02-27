---
layout: about
title: home
permalink: /
subtitle: Building ML-driven systems for architecture simulation, HPC, and co-design.

announcements:
  enabled: true # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: false # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---

<section class="lab-top-gallery" aria-label="Lab gallery">
  <img src="{{ '/assets/img/1.jpg' | relative_url }}" alt="Research setup and lab workspace" />
  <img src="{{ '/assets/img/2.jpg' | relative_url }}" alt="Team collaboration session" />
  <img src="{{ '/assets/img/3.jpg' | relative_url }}" alt="AI systems and modeling environment" />
  <img src="{{ '/assets/img/4.jpg' | relative_url }}" alt="Prototyping and experiments" />
</section>

<section class="lab-hero-panel">
  <p class="lab-eyebrow">Santosh Pandey Lab</p>
  <h2>ML-driven systems research for computer architecture and HPC.</h2>
  <p>
    Our lab develops machine-learning methods that make architecture and systems research faster, more scalable,
    and more predictive. We focus on replacing expensive simulation workflows with accurate learned surrogates
    and intelligent data-generation strategies.
  </p>
  <p>
    We work across the stack: microarchitecture simulation, GPU design-space exploration, LLM/HPC performance analysis,
    and automated hardware-software optimization.
  </p>
  <p class="lab-recruiting-note">
    Actively recruiting fully funded PhD students interested in ML systems, architecture simulation, and HPC.
  </p>
  <div class="lab-cta-row">
    <a class="lab-btn lab-btn-primary" href="{{ '/research/' | relative_url }}">Explore Research</a>
    <a class="lab-btn lab-btn-secondary" href="{{ '/publications/' | relative_url }}">View Publications</a>
    <a class="lab-btn lab-btn-secondary" href="{{ '/join/' | relative_url }}">Join the Lab</a>
  </div>
</section>

<section class="lab-pillar-grid">
  <article class="lab-pillar-card">
    <h3>ML for Architecture Simulation</h3>
    <p>Accurate and reusable learning-based simulation approaches for modern CPU/GPU systems.</p>
  </article>
  <article class="lab-pillar-card">
    <h3>Systems for ML/HPC</h3>
    <p>Optimized runtime and hardware-software strategies for scaling ML and HPC applications.</p>
  </article>
  <article class="lab-pillar-card">
    <h3>Automated Stack Optimization</h3>
    <p>Generative and predictive modeling for program, compiler, and architecture co-optimization.</p>
  </article>
</section>
