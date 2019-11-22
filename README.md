# VuePress Plugin for mermaid.js

> Use mermaid.js Diagrams in VuePress

This [VuePress][1] plugin provides a global component wrapping [mermaid.js][2].
The plugin is designed to work with VuePress v1.x.

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

The plugin can convert the code block with language name 'mermaid' to a block surrounded by `<mermaid>`-Tag
and handles the renderingof valid mermaid graph descriptions.

    ``` mermaid
    graph TD
    mermaid-->isAwesome
    isAwesome-->mermaid
    ```

    ``` mermaid
    sequenceDiagram
    Alice->John: Hello John, how are you?
    loop every minute
        John-->Alice: Great!
    end
    ```

or (Not recommended)

``` markdown
<mermaid>
graph TD
mermaid-->isAwesome
isAwesome-->mermaid
</mermaid>

```

**Extended documentation may be found at [vuepress-plugin-mermaidjs.efrane.com](https://vuepress-plugin-mermaidjs.efrane.com)**

[1]: https://vuepress.vuejs.org
[2]: https://mermaidjs.github.io
