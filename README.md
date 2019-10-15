# Vuepress Plugin for mermaid.js

> Use mermaid.js Diagrams in Vuepress

This [Vuepress][0] plugin provides a global component wrapping [mermaid.js][1].

## Installation

You can install it with

``` shell
yarn add -D vuepress-plugin-mermaidjs
```

or

``` shell
npm install --save-dev vuepress-plugin-mermaidjs
```

Then you just need to register the plugin in your `.vuepress/config.js`:

``` js
module.exports = {
    // ...
    plugins: [
        'vuepress-plugin-mermaidjs'
    ]
    // ...
}
```

## Usage

The plugin provides the `<mermaid>`-Tag and handles the rendering
of valid mermaid graph descriptions.

``` markdown
<mermaid>
graph TD
mermaid-->isAwesome
isAwesome-->mermaid
</mermaid>
```
