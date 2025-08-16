---
layout: default
title: "Upcoming Events"
---

<header><h1>Coming Events</h1></header>
<div class="container">
  <div class="toggle-view"><button id="toggle-view">Toggle View</button></div>
  <div id="event-list" class="event-list">
  {% assign today = site.time | date: "%Y-%m-%d" %}
  {% assign upcoming = site.pages | where_exp: "item", "item.date >= today" | sort: "date" %}
  {% for event in upcoming %}
    {% if event.layout == "event" %}
    <div class="event-card">
      {% if event.poster %}<img src="{{ event.poster }}" alt="{{ event.title }}">{% endif %}
      <h3><a href="{{ event.url }}">{{ event.title }}</a></h3>
      <p>{{ event.date | date: "%B %d, %Y" }}</p>
      {% if event.type %}<p><em>{{ event.type }}</em></p>{% endif %}
    </div>
    {% endif %}
  {% endfor %}
  </div>
</div>
<script src="/events/assets/script.js"></script>
