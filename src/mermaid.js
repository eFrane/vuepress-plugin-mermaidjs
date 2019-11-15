// Since this plugin's component can be used by multiple times, we need to
// give each generated diagram a uid or the previous diagram would be
// overwritten.
let graphIdCounter = 0

const Mermaid = {
    name: 'Mermaid',
    data() {
        let graph = ''
        if (this.$slots.default) {
            graph = this.$slots.default[0].text
        }

        return {
            svg: undefined,
            graph
        }
    },
    render(h) {
        return h('div', { domProps: { innerHTML: this.svg }})
    },
    methods: {
        renderSVG () {
            import('mermaid/dist/mermaid').then(mermaid => {
                mermaid.initialize({ startOnLoad: true })

                let renderDiv = document.createElement('div')
                document.body.appendChild(renderDiv)

                mermaid.render(
                    'mermaid' + ++graphIdCounter,
                    this.graph,
                    (svg) => {
                        this.svg = svg
                        document.body.removeChild(renderDiv)
                    },
                    renderDiv
                )
            })
        }
    },
    mounted () {
        if (0 < this.graph.length) {
            this.renderSVG()
        }
    }
}

export default ({ Vue }) => {
    Vue.component('mermaid', Mermaid)
}
