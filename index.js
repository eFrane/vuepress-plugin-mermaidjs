const path = require('path')

module.exports = (options, ctx) => {
  return {
    enhanceAppFiles: path.resolve(__dirname, 'mermaid.js'),
    globalUIComponents: 'mermaid'
  }
}
