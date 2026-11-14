---
layout: page
permalink: /people/
title: People
description: The researchers of MAX Systems Lab.
nav: true
nav_order: 3
groups: # display order and headings for roles in _data/people.yml
  - { role: postdoc, label: Postdoctoral Researchers }
  - { role: phd, label: PhD Students }
  - { role: ms, label: Master's Students }
  - { role: ug, label: Undergraduate Researchers }
  - { role: visitor, label: Visitors }
---

<div class="lab">
  {% assign pi = site.data.people | where: 'role', 'pi' | first %}
  {% if pi %}
    <section class="lab-pi">
      {% include lab/avatar.liquid person=pi %}
      <div>
        <p class="lab-eyebrow">{{ pi.title }}</p>
        <h2>{% if pi.links.website %}<a href="{{ pi.links.website }}">{{ pi.name }}</a>{% else %}{{ pi.name }}{% endif %}</h2>
        {{ pi.bio | markdownify }}
        {% include lab/person-links.liquid links=pi.links %}
      </div>
    </section>
  {% endif %}

{% for g in page.groups %}
{% assign members = site.data.people | where: 'role', g.role %}
{% if members.size > 0 %}

<section class="lab-section">
<h2>{{ g.label }}</h2>
<div class="lab-people-grid">
{% for p in members %}{% include lab/person-card.liquid person=p %}{% endfor %}
</div>
</section>
{% endif %}
{% endfor %}

{% assign alumni = site.data.people | where: 'role', 'alumni' %}
{% if alumni.size > 0 %}

<section class="lab-section">
<h2>Alumni</h2>
<ul class="lab-alumni">
{% for p in alumni %}
<li>
{% if p.links.website %}<a href="{{ p.links.website }}">{{ p.name }}</a>{% else %}<strong>{{ p.name }}</strong>{% endif %}
{% if p.degree %}<span class="lab-muted">({{ p.degree }}{% if p.focus %}, {{ p.focus | downcase }}{% endif %})</span>{% endif %}
{% if p.now %}<span class="lab-alumni-now">→ {{ p.now }}</span>{% endif %}
</li>
{% endfor %}
</ul>
</section>
{% endif %}

{% if site.data.awards.size > 0 %}

<section class="lab-section">
<h2>Awards &amp; honors</h2>
<ul class="lab-awards">
{% for a in site.data.awards %}
<li>
<span class="lab-award-year">{% include lab/award-icon.liquid %} {{ a.year }}</span>
<span>
{% if a.url %}<a href="{{ a.url }}">{{ a.title }}</a>{% else %}{{ a.title }}{% endif %}
<span class="lab-muted">· {% if a.who.first %}{{ a.who | join: ', ' }}{% else %}{{ a.who }}{% endif %}</span>
</span>
</li>
{% endfor %}
</ul>
</section>
{% endif %}

  <a class="lab-banner" href="{{ '/join/' | relative_url }}">
    <i class="fa-solid fa-user-plus"></i>
    <span>Interested in joining the lab?</span>
    <span class="lab-more">See openings <i class="fa-solid fa-arrow-right"></i></span>
  </a>
</div>
