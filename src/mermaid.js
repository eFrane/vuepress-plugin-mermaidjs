import Loading from './Loading.vue'

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
    data () {
        return {
            svg: undefined
        }
    },
    render (h) {
        if (this.svg === undefined) {
            return h('Loading')
        }

        return h('div', {
            domProps: {
                innerHTML: this.svg,
                style: 'width: 100%'
            }
        })
    },
    mounted () {
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
    },
    components: {
        Loading
    }
}

export default ({ Vue }) => {
    Vue.component('Mermaid', Mermaid)
}
