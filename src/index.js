const path = require('path')

module.exports = (options, ctx) => {
  return {
    name: 'vuepress-plugin-mermaidjs',
    define: {
      MERMAID_OPTIONS: options
    },
    extendsMarkdown (md) {
      md.use(require('./markdownItPlugin'))
    },
    clientAppEnhanceFiles: path.resolve(__dirname, 'clientAppEnhance.js')
  }
}
