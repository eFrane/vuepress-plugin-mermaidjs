import { h, watchEffect, reactive } from 'vue'
import Loading from './Loading.vue'

const Mermaid = {
    name: 'Mermaid',
    props: {
        id: {
            type: String,
            required: false,
            default() {
                return 'diagram_'+Date.now()
            }
        },
        graph: {
            type: String,
            required: true
        },
        style: {
            type: Object,
            required: false,
            default() {
                return {};
            }
        }
    },
    data () {
        return {
            svg: undefined
        }
    },
    setup(props) {
        const state = reactive({
            svg: undefined
        })

        watchEffect(() => {
            if (props.graph) {
                import('mermaid/dist/mermaid.min').then(mermaid => {
                    mermaid.initialize({
                        startOnLoad: true, ...MERMAID_OPTIONS
                    })

                    mermaid.render(
                      props.id,
                      decodeURIComponent(props.graph),
                      (svg) => {
                          state.svg = svg
                      }
                    )
                })
            }
        })

        return () => {
            const style = {
                width: '100%',
                ...props.style
            }

            return state.svg ? h('div', {
                innerHTML: state.svg,
                ...style
            }) : h(Loading)
        }
    },
    components: {
        Loading
    }
}

export { Mermaid }
