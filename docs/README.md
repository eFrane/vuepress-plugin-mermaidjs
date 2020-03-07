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

::: tip
If you're looking for an easier time creating your diagrams,
have a look at mermaid's [live editor][mle]!
:::

## Options

If you want to configure Mermaid further, options given
to the plugin are passed through to Mermaid:

``` js
module.exports = {
    // ...
    plugins: [
        [ 'vuepress-plugin-mermaidjs', { gantt: { barHeight: 40 }}]
    ]
    // ...
}
```

## Fenced code block syntax

The plugin provides mermaidjs diagram rendering for fenced code blocks
with language name 'mermaid':

    ``` mermaid
    sequenceDiagram
    Alice->John: Hello John, how are you?
    loop every minute
        John-->Alice: Great!
    end
    ```

## Tag Syntax (not recommended)

If you really don't want to use the code block syntax
this plugin also supports using a tag wrapper
for mermaidjs-diagrams like so:

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
The tag-syntax can be useful if you want to attach additional CSS-classes
to a diagram, e.g. for aligning it on the page.
:::

# Known Caveats

- Some VuePress configurations don't seem to work
  well with a minified version of mermaid, there
  is an [issue][#5] for ideas.

[mle]: https://mermaidjs.github.io/mermaid-live-editor/
[pr]: https://github.com/eFrane/vuepress-plugin-mermaidjs/pulls
[#5]:https://github.com/eFrane/vuepress-plugin-mermaidjs/issues/5
