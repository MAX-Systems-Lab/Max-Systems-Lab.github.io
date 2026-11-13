---
layout: page
title: Join Us
permalink: /join/
description: Openings for PhD students, master's students, and undergraduate researchers.
nav: true
nav_order: 6
---

{% assign lab = site.data.lab %}

<div class="lab lab-prose" markdown="1">

<div class="lab-banner lab-banner-static"><i class="fa-solid fa-bullhorn"></i><span><strong>Fully funded PhD positions available.</strong> We are also looking for motivated master's and undergraduate students.</span></div>

## Who we are looking for

We look for students excited about the intersection of **machine learning, computer architecture, and high-performance systems**: people who enjoy both building real systems and asking why they behave the way they do. You do not need experience in every area below; curiosity and strong fundamentals matter most.

**Helpful background:** computer architecture or operating systems; C/C++ and Python; machine learning (PyTorch/JAX); experience with simulators (gem5, GPGPU-Sim), compilers (LLVM/MLIR), GPUs/CUDA, or HPC clusters.

## Research areas

<ul class="lab-join-areas">
{% assign areas = site.research | sort: 'order' %}{% for area in areas %}<li><a href="{{ area.url | relative_url }}"><i class="{{ area.icon }}"></i> {{ area.title }}</a></li>{% endfor %}
</ul>

## How to apply

**Prospective PhD students:** apply to the graduate program and mention MAX Systems Lab and Dr. {{ lab.pi }} in your statement. Before or after applying, send a short email so we can look for your application.

**Current students (MS/undergraduate):** email us with the materials below; we usually start with a small, well-defined project.

1. Use the subject line `{{ lab.email_subject }}`.
2. Attach your **CV** and **transcripts** (unofficial is fine).
3. Write 3–5 sentences on which research area interests you and why. Mention a paper of ours you read, if any.
4. Link to code, projects, or papers you are proud of (GitHub, personal website).

<div class="lab-cta">
{% if lab.contact_email != '' %}<a class="lab-btn lab-btn-primary" href="mailto:{{ lab.contact_email }}?subject={{ lab.email_subject | uri_escape }}"><i class="fa-solid fa-envelope"></i> Email the lab</a>{% endif %}
{% if lab.apply_form != '' %}<a class="lab-btn" href="{{ lab.apply_form }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pen"></i> Interest form</a>{% endif %}
<a class="lab-btn" href="{{ '/publications/' | relative_url }}">Read our papers</a>
</div>

We read every message but may not be able to reply to each one individually. Emails that follow the instructions above are much more likely to get a response.
{: .lab-muted}

</div>
