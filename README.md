# janus
A blog and podcast theme for Ghost.

## This is a work in progress.
Please excuse the blankness of this README file while development on the theme is ongoing.

For now, here are some key details:
- I'm calling the theme "Janus" after the [Roman deity](https://en.wikipedia.org/wiki/Janus) who looks both forward and backward. It's meant to be a versatile theme that can adapt to both written and audio-visual content (e.g., a blog and a podcast).
- The theme is inspired by [Alto](https://github.com/TryGhost/Alto) and [Headline](https://github.com/TryGhost/Headline) and begins as a [fork of the former](https://github.com/norman-codes/alto-with-dark-mode-toggle), with design elements inspired by the latter (which I experimented with in another repository [here](https://github.com/norman-codes/bloglettercast)).

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

### The Collections

- The `blog` collection contains all blog posts.
- The `podcast` collection contains all podcast posts.

### The Taxonomies

The `tag` taxonomy allows for the display of all content belonging to a certain (primary or non-primary) tag, rendered based on `tag.hbs`. For example:
- `yourdomain.com/tag/blog/` will yield a page with all posts tagged with blog. Note that there is a difference between this and `yourdomain.com/blog/`.
- `yourdomain.com/tag/miscellaneous/` will yield a page of all posts (both blogs *and* podcasts) tagged with "miscellaneous".

The `author` taxonomy allows for the display of all posts belonging to a certain author, under `yourdomain.com/author/{slug}`.