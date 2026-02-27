---
layout: page
title: research
permalink: /research/
description: Research directions and active themes at Max Systems Lab.
nav: true
nav_order: 2
---

<section class="research-overview">
  <p>
    Our research combines machine learning, computer architecture, and systems design to make performance modeling
    and optimization dramatically faster and more reliable.
  </p>
</section>

<section class="research-grid">
  <article class="research-card">
    <img src="{{ '/assets/img/1.jpg' | relative_url }}" alt="Microarchitecture modeling and simulation" />
    <div class="research-card-body">
      <h3>ML-Based Microarchitecture Simulation</h3>
      <p>
        We build learned simulators that approximate cycle-level behavior with high fidelity while reducing runtime.
        This enables rapid what-if analysis and scalable architecture exploration.
      </p>
    </div>
  </article>

  <article class="research-card">
    <img src="{{ '/assets/img/2.jpg' | relative_url }}" alt="GPU architecture design exploration" />
    <div class="research-card-body">
      <h3>GPU Design-Space Exploration</h3>
      <p>
        We develop frameworks for efficient GPU architecture exploration by combining trace-driven pipelines,
        simulation signals, and ML-based surrogate models.
      </p>
    </div>
  </article>

  <article class="research-card">
    <img src="{{ '/assets/img/3.jpg' | relative_url }}" alt="LLM and HPC systems performance analysis" />
    <div class="research-card-body">
      <h3>LLM and HPC Performance Systems</h3>
      <p>
        We study performance bottlenecks in large-model and HPC workflows, from kernel-level behavior to
        end-to-end program execution, to guide practical optimization decisions.
      </p>
    </div>
  </article>

  <article class="research-card">
    <img src="{{ '/assets/img/4.jpg' | relative_url }}" alt="Automated hardware software co-design workflows" />
    <div class="research-card-body">
      <h3>Automated Hardware-Software Co-Design</h3>
      <p>
        We aim to automate optimization across the stack, linking workload characteristics, compiler behavior,
        and architectural choices in a unified decision framework.
      </p>
    </div>
  </article>
</section>
