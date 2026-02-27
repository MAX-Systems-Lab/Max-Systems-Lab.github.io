---
layout: page
title: news
permalink: /news/
pagination:
  enabled: true
  collection: news
  per_page: 20
  permalink: /page/:num/
  sort_field: date
  sort_reverse: true
---

<div class="news">
  {% if paginator and paginator.posts %}
    <div class="table-responsive">
      <table class="table table-sm table-borderless">
        {% for item in paginator.posts %}
          <tr>
            <th scope="row" style="width: 20%">{{ item.date | date: '%b %d, %Y' }}</th>
            <td>
              {% if item.inline %}
                {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
              {% else %}
                <a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
              {% endif %}
            </td>
          </tr>
        {% endfor %}
      </table>
    </div>
    {% include pagination.liquid %}
  {% else %}
    {% include news.liquid %}
  {% endif %}
</div>
