const path = require('path')

module.exports = {
    title: 'vuepress-plugin-mermaidjs',
    description: 'Easy Diagramming for VuePress with mermaidjs',
    plugins: [
        require(path.join(__dirname, '../../src/index.js'))
    ],
    themeConfig: {
        search: false,
        repo: 'eFrane/vuepress-plugin-mermaidjs'
    }
}
