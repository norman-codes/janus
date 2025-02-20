# janus
A Ghost theme for highlighting multiple content styles.

## This is a work in progress.
Please excuse the blankness of this README file while development on the theme is ongoing.

For now, here are some key details:
- I'm calling the theme "Janus" after the [Roman deity](https://en.wikipedia.org/wiki/Janus) who looks both forward and backward. It's meant to be a versatile theme that can adapt to the needs of *one creator* (or organization) to document and market *multiple modalities of creation* (i.e. text, audio, and video through mediums like a blog, podcast, and social media channel, respectively) in *one place* (the website).
- The theme is inspired by [Alto](https://github.com/TryGhost/Alto) and [Headline](https://github.com/TryGhost/Headline) and begins as a [fork of the former](https://github.com/norman-codes/alto-with-dark-mode-toggle), with design elements inspired by the latter (with which I experimented in another repository [here](https://github.com/norman-codes/bloglettercast)).

## Dynamic Routing
Janus leverages [Ghost's URLs & Dynamic Routing](https://ghost.org/docs/themes/routing/) feature to differentiate between blog and podcast content.

### Routing Configuration File
Below is the full `yaml` code for the current configuration, which is uploaded to the `Settings >> Labs` section in Ghost Admin.

```yaml
routes:
  /: home

collections:
  /blog/:
    permalink: /blog/{slug}/
    template: index
    filter: primary_tag:blog
  /podcast/:
    permalink: /podcast/{slug}/
    template: index
    filter: primary_tag:podcast

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

### The Routes
(TO BE WRITTEN: A DESCRIPTION OF WHAT THE HOME ROUTE IS AND MEANS)

### The Collections
(TO BE WRITTEN: A DESCRIPTION OF WHAT COLLECTIONS, IN PRINCIPLE, REPRESENT IN THE CONTEXT OF THIS THEME)

#### The Default Collections
Similar to how the mythical Janus has two faces, the baseline or "default" configuration for the collections is *two types of content*. For example, let's consider **blogs** and **podcasts**.

- The `blog` collection contains all blog posts.
- The `podcast` collection contains all podcast posts.

#### Customizing Collections
It may be the case that you have other forms of content beyond the "default" above of blogs and podcasts. For example, you make blogs, podcasts, *and videos*.

```yaml
collections:
  /blog/:
    permalink: /blog/{slug}/
    template: index
    filter: primary_tag:blog
  /podcast/:
    permalink: /podcast/{slug}/
    template: index
    filter: primary_tag:podcast
  /video/:
    permalink: /video/{slug}/
    template: index
    filter: primary_tag:podcast
```

Or, perhaps, you may have multiple forms of *sub-content* that fall under one overarching type. For example, you only write blogs but want to make certain topics highly accessible for your readers (e.g., recipes, food science, and regional cuisine explorations).

...CONTINUE WITH MORE INFO HERE.

### The Taxonomies

The `tag` taxonomy allows for the display of all content belonging to a certain (primary or non-primary) tag, rendered based on `tag.hbs`. For example:
- `yourdomain.com/tag/blog/` will yield a page with all posts tagged with blog. Note that there is a difference between this and `yourdomain.com/blog/`.
- `yourdomain.com/tag/miscellaneous/` will yield a page of all posts (both blogs *and* podcasts) tagged with "miscellaneous".

The `author` taxonomy allows for the display of all posts belonging to a certain author, under `yourdomain.com/author/{slug}`.