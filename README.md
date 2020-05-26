[![npm version](https://badge.fury.io/js/vuepress-plugin-mermaidjs.svg)](https://badge.fury.io/js/vuepress-plugin-mermaidjs)
[![Build Status](https://travis-ci.com/eFrane/vuepress-plugin-mermaidjs.svg?branch=master)](https://travis-ci.com/eFrane/vuepress-plugin-mermaidjs)

# VuePress Plugin for mermaid.js

> Use mermaid.js Diagrams in VuePress

This [VuePress][1] plugin provides a global component wrapping [mermaid.js][2].
The plugin is designed to work with VuePress v1.x.

Main documentation site is at [vuepress-plugin-mermaidjs.efrane.com][3].

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

The recommended usage is to place your mermaidjs diagrams inside
a fenced code block with the language 'mermaid':

    ```mermaid
    sequenceDiagram
    Alice->John: Hello John, how are you?
    loop every minute
        John-->Alice: Great!
    end
    ```

[1]: https://vuepress.vuejs.org
[2]: https://mermaidjs.github.io
[3]: https://vuepress-plugin-mermaidjs.efrane.com
