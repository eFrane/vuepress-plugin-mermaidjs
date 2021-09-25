const path = require('path')
const markdownItPlugin = require("./markdownItPlugin")

/**
 * @type {import("vuepress").PluginFunction}
 */
const vuePressPluginMermaid = (options, ctx) => {
  return {
    name: 'MermaidJSPlugin',
    define: {
      MERMAID_OPTIONS: options
    },
    extendsMarkdown(md) {
      md.use(markdownItPlugin)
    },
    clientAppEnhanceFiles: path.resolve(__dirname, 'mermaid.js')
  }
}

module.exports = vuePressPluginMermaid