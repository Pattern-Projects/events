---
layout: default
title: Events
---

# Upcoming Events

<ul>
{% for event in site.data.events %}
  <li>
    <a href="{{ '/events/' | append: event.id | append: '.html' }}">
      {{ event.title }} – {{ event.date }}
    </a>
  </li>
{% endfor %}
</ul>
