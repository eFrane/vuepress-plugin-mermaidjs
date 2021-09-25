const path = require('path')

module.exports = {
    title: 'vuepress-plugin-mermaidjs',
    description: 'Easy Diagramming for VuePress with mermaidjs',
    plugins: [
        path.resolve(process.cwd(), 'src/index.js')
    ],
    themeConfig: {
        search: false,
        repo: 'eFrane/vuepress-plugin-mermaidjs'
    }
}
