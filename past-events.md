---
layout: default
title: "Past Events"
---

<header><h1>Past Events</h1></header>
<div class="container">
  <div class="toggle-view"><button id="toggle-view">Toggle View</button></div>
  <div id="event-list" class="event-list">
  {% assign today = site.time | date: "%Y-%m-%d" %}
  {% assign past = site.pages | where_exp: "item", "item.date < today" | sort: "date" | reverse %}
  {% for event in past %}
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
