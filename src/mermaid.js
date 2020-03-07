const Mermaid = {
    name: 'Mermaid',
    props: {
        id: {
            type: String,
            required: true
        },
        graph: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            svg: undefined
        }
    },
    render(h) {
        if (this.svg === undefined) {
            return h('noscript', 'Enable JavaScript to view graph.')
        }
        return h('div', { domProps: { innerHTML: this.svg }})
    },
    mounted() {
        import('mermaid/dist/mermaid.min').then(mermaid => {
            mermaid.initialize({ startOnLoad: true, ...MERMAID_OPTIONS })

            let renderDiv = document.createElement('div')
            document.body.appendChild(renderDiv)

            mermaid.render(
                this.id,
                this.graph,
                (svg) => {
                    this.svg = svg
                    document.body.removeChild(renderDiv)
                },
                renderDiv
            )
        })
    }
}

export default ({ Vue }) => {
    Vue.component('Mermaid', Mermaid)
}
