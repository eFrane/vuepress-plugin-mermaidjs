---
home: true
heroText: 'mermaid Plugin for VuePress'
tagline: 'Easy diagramming in your documentation/blog/whatever. Requires VuePress 1.x'
footer: MIT Licensed | Copyright © 2019-present Stefan "eFrane" Graupner
---

# Installation

Install it with your package manager of choice:

**npm**:

``` bash
$ npm install --save-dev vuepress-plugin-mermaidjs
```

**yarn**:

``` bash
$ yarn add -D vuepress-plugin-mermaidjs
```

Add it to the plugin listing of your vuepress config:

``` js
// .vuepress/config.js

module.exports = {
    // ...
    plugins: [
        'mermaidjs'
    ]
    // ...
}
```

# Usage

Anywhere in your body copy, place your mermaid-Diagrams
inside `<mermaid></mermaid>`-Tags, like so:

``` md
<mermaid>
graph lR
Documentation--with diagrams-->_[is Awesome]
</mermaid>
```

yielding:
<mermaid>
graph LR
Documentation--with diagrams-->_[is Awesome]
</mermaid>

::: tip
If you're looking for an easier time creating your diagrams,
have a look at mermaid's [live editor][mle]!
:::

# Known Caveats

- Hot-Reloading does not work all-to-well with the
rendering engine. If you have any ideas, please open
a [Pull Request][pr]!
- Some VuePress configurations don't seem to work
  well with a minified version of mermaid, there
  is an [issue][#5] for ideas.

[mle]: https://mermaidjs.github.io/mermaid-live-editor/
[pr]: https://github.com/eFrane/vuepress-plugin-mermaidjs/pulls
[#5]:https://github.com/eFrane/vuepress-plugin-mermaidjs/issues/5
