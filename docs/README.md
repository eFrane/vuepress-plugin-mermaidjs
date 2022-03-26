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
        [ 'mermaidjs', { gantt: { barHeight: 40 }}]
    ]
    // ...
}
```

## Fenced code block syntax

The plugin provides mermaidjs diagram rendering for fenced code blocks
with language name `mermaid`:

``` mermaid
sequenceDiagram
Alice->John: "Hello John, how are you?"
loop every minute
    John-->Alice: Great!
end
```

# Known Caveats

_None currently_

[mle]: https://mermaidjs.github.io/mermaid-live-editor/
