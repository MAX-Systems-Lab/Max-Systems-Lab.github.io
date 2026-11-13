---
layout: page
title: Funding
permalink: /funding/
description: We are grateful to the agencies and companies that support our research.
nav: true
nav_order: 5
---

<div class="lab">
  <section class="lab-section">
    <h2>Current sponsors</h2>
    {% include lab/sponsors.liquid current=true details=true %}
  </section>

{% assign past = site.data.funding | where: 'current', false %}
{% if past.size > 0 %}

<section class="lab-section">
<h2>Past sponsors</h2>
{% include lab/sponsors.liquid current=false details=true %}
</section>
{% endif %}

  <p class="lab-muted">
    Any opinions, findings, and conclusions or recommendations expressed in our work are those of the authors and do
    not necessarily reflect the views of the sponsors.
  </p>
</div>
