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
    async extendsPageData({ filePathRelative }) {
      return {
        '$graphs': graphs[filePathRelative]
      }
    },
    clientAppEnhanceFiles: path.resolve(__dirname, 'clientAppEnhanceFile.js')
  }
}

module.exports = vuePressPluginMermaid