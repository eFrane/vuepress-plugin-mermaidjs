const path = require('path')

module.exports = {
    title: 'vuepress-plugin-mermaidjs',
    description: 'Easy Diagramming for VuePress with mermaidjs',
    plugins: [
        require(path.join(__dirname, '../../vuepress-plugin-mermaidjs/src/index.js'))
    ],
    themeConfig: {
        search: false,
        repo: 'eFrane/vuepress-plugin-mermaidjs'
    }
}
