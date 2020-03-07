const path = require('path')

module.exports = (options, ctx) => {
  return {
    define: {
      MERMAID_OPTIONS: options
    },
    chainMarkdown (config) {
      config
        .plugin('mermaidjs')
        .use(require('./markdownItPlugin'))
    },
    enhanceAppFiles: path.resolve(__dirname, 'mermaid.js')
  }
}
