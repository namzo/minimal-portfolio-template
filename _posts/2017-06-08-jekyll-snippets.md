---
layout: post	
title: Jekyll snippets
description: This is just a quick post listing a few of the jekyll snippets I'm using on this site.
---

This is just a quick post listing a few of the jekyll snippets I'm using on this site. I've been running this site on github pages for a few years now, and I love how simple it is to setup and how lightweight it is.

<br>

#### 1. Show reading time
This shows how much time in minutes it would take to complete reading a post, in the format "3 min read".

{% raw %}
```liquid
{% assign words = content | number_of_words %}
  {% if words < 270 %}
    1 min
  {% else %}
    {{ words | divided_by:135 }} mins
{% endif %}
```
{% endraw %}

<br>

#### 2. Auto-load minified sass files inline
So, I came across this snippet when I was trying to find a way to dynamically detect critical above-the-fold css in order to optimize page speed. It doesn't exactly do that, but close. I don't have so much css on this site, so I basically load a combined version of my minified sass files inline.

{% raw %}
```liquid
{% capture include_to_scssify %}
    {% include critical.scss %}
{% endcapture %}
{{ include_to_scssify | scssify }}
```
{% endraw %}

Also, it was one of the things I did to get a perfect score on <a href="https://developers.google.com/speed/pagespeed/insights/?url=ernestojeh.com&tab=desktop" target="_blank">Google Pagespeed Insights</a>.


<br>

#### 3. Show latest post on home page
Yesterday, I added a section on the homepage that shows the latest post published on this site. I wasn't sure this was going to be possible but a quick search got me this;

{% raw %}
```liquid
{% assign post = site.posts.first %}
  {% assign content = post.content %}
{% include post-home.html %}
```
{% endraw %}

And then in your "_includes/post-home.html", you add this;

{% raw %}
```liquid
{% if post.title %}
  {{ post.title }}
  {{ post.date | date_to_string }}
{% endif %}
{{ post.excerpt | strip_html | truncatewords:18 }}
```
{% endraw %}

Note, I added a "truncatewords:18" to limit the text excerpt. Take it out if you don't need it.

<br>

#### 4. Show recent posts on post page
This basically shows the recently published posts on your site. You can change the limit to modify the number of posts shown.
{% raw %}
```liquid
  {% for post in site.posts limit:3 %}
    {{ post.title }}
    Published on {{ post.date | date_to_string }}
  {% endfor %}
```
{% endraw %}

And.. that's it. Thanks for reading.
