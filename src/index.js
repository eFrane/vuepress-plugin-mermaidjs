const path = require('path')
const { mermaidjsPlugin, graphs } = require("./markdownItPlugin")

/**
 * @type {import("vuepress").PluginFunction}
 */
const vuePressPluginMermaid = (options, ctx) => {
  return {
    name: 'MermaidJSPlugin',
    define: {
      MERMAID_OPTIONS: options,
    },
    extendsMarkdown(md) {
      md.use(mermaidjsPlugin)
    },
    extendsPageData(page) {
      return {
        '$graphs': graphs
      }
    },
    clientAppEnhanceFiles: path.resolve(__dirname, 'mermaid.js')
  }
}

module.exports = vuePressPluginMermaid