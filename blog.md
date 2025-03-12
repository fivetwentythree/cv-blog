---
layout: default
title: Writings
---
<ul class="blog-posts">
  {% for post in site.posts %}
    <li>
      <h2>
        <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        {% if post.draft %}
          <span class="draft-tag">Draft</span>
        {% endif %}
      </h2>
      <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
      {% if post.description %}
        <p class="post-description">{{ post.description }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>