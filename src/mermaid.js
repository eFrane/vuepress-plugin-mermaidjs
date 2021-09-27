import Loading from './Loading.vue'
import { h, reactive, watchEffect } from "vue";
import mermaid from "mermaid";

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
    setup(props) {
        const state = reactive({
            svg: undefined
        })

        watchEffect(() => {
            mermaid.render(
                props.id,
                props.graph,
                (svg) => {
                    state.svg = svg
                },
            )
        })

        return () => {
            return state.svg ? h('div', {
                innerHTML: state.svg,
                style: 'width: 100%'
            }) : h(Loading)
        }
    },
}

/**
 * @type {import("@vuepress/client").ClientAppEnhance}
 */
export default ({ app }) => {
    mermaid.initialize({ startOnLoad: true, ...MERMAID_OPTIONS })
    app.component('Mermaid', Mermaid)
}
