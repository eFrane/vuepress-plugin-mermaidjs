const path = require('path')

module.exports = {
    title: 'vuepress-plugin-mermaidjs',
    plugins: [
        require(path.join(__dirname, '../../../src/index.js'))
    ]
}
