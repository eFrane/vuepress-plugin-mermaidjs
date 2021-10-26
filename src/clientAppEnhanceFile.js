import mermaidjs from "mermaid";
import { Mermaid } from "./mermaid";
import { h } from "vue";

/**
 * @type {import("@vuepress/client").ClientAppEnhance}
 */
export default ({ app }) => {
    mermaidjs.initialize({ startOnLoad: true, ...MERMAID_OPTIONS })
    app.component('Mermaid', {
        render() {
            return h(Mermaid, {
                id: this.$props.id,
                graph: this.$page.$graphs[this.$attrs.id] || this.$slots.default()
            })
        }
    })
}