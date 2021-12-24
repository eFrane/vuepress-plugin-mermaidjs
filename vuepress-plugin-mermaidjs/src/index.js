const path = require('path')

module.exports = (options, ctx) => {
  return {
    name: 'vuepress-plugin-mermaidjs',
    define: {
      MERMAID_OPTIONS: options
    },
    extendMarkdown (md) {
      md.use(require('./markdownItPlugin'))
    },
    enhanceAppFiles: path.resolve(__dirname, 'mermaid.js')
  }
}
