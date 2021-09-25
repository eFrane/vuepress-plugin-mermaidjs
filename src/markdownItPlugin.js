// Inspired by https://github.com/ulivz/vuepress-plugin-flowchart

const { hash } = require('@vuepress/utils')

module.exports = function mermaidjsPlugin (md, options = {}) {

  // Handle ```mermaid blocks
  const fence = md.renderer.rules.fence
  md.renderer.rules.fence = (...args) => {
      const [tokens, idx] = args
      const { info } = tokens[idx]
      if (info.trim(' ') === 'mermaid') {
        return mermaidRender(tokens, idx)
      }
      const rawCode = fence(...args)
      return `${rawCode}`
  }

  // Handle <mermaid> blocks
  options = options || {}
  const openMarker = options.openMarker || '<mermaid'  // Not ending with '>' to allow attributes
  const openChar = openMarker.charCodeAt(0)
  const closeMarker = options.closeMarker || '</mermaid>'
  const closeChar = closeMarker.charCodeAt(0)

  // Takes the context of the parsed section and turns in into a Mermaid component
  function mermaidRender (tokens, idx, options, env, self) {
    const token = tokens[idx]
    const key = `mermaid_${hash(idx)}`
    const { content } = token
    // md.$dataBlock[key] = content
    // return `<Mermaid id="${key}" :graph="$dataBlock.${key}"></Mermaid>`
    return `<Mermaid id="${key}" graph="${content}"></Mermaid>`
  }

  // Finds mermaid sections in the Markdown and creates context
  function mermaidReplacer(state, startLine, endLine, silent) {
    let nextLine
    let i
    let autoClosed = false
    let start = state.bMarks[startLine] + state.tShift[startLine]
    let max = state.eMarks[startLine]

    // Check out the first character quickly,
    // this should filter out most of non-uml blocks
    if (openChar !== state.src.charCodeAt(start)) {
      return false
    }

    // Check out the rest of the marker string
    for (i = 0; i < openMarker.length; ++i) {
      if (openMarker[i] !== state.src[start + i].toLowerCase()) {
        return false
      }
    }

    const markup = state.src.slice(start, start + i)
    const params = state.src.slice(start + i, max)

    // Since start is found, we can report success here in validation mode
    if (silent) {
      return true
    }

    // Search for the end of the block
    nextLine = startLine

    for (; ;) {
      nextLine++
      if (nextLine >= endLine) {
        // unclosed block should be autoclosed by end of document.
        // also block seems to be autoclosed by end of parent
        break
      }

      start = state.bMarks[nextLine] + state.tShift[nextLine]
      max = state.eMarks[nextLine]

      if (start < max && state.sCount[nextLine] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break
      }

      if (closeChar !== state.src.charCodeAt(start)) {
        // didn't find the closing fence
        continue
      }

      if (state.sCount[nextLine] > state.sCount[startLine]) {
        // closing fence should not be indented with respect of opening fence
        continue
      }

      let closeMarkerMatched = true
      for (i = 0; i < closeMarker.length; ++i) {
        if (closeMarker[i] !== state.src[start + i].toLowerCase()) {
          closeMarkerMatched = false
          break
        }
      }

      if (!closeMarkerMatched) {
        continue
      }

      // make sure tail has spaces only
      if (state.skipSpaces(start + i) < max) {
        continue
      }

      // found!
      autoClosed = true
      break
    }

    const contents = state.src
      .split('\n')
      .slice(startLine + 1, nextLine)
      .join('\n')

    const token = state.push('mermaidjs', 'fence', 0)
    token.block = true
    token.info = params
    token.content = contents
    token.map = [startLine, nextLine]
    token.markup = markup

    state.line = nextLine + (autoClosed ? 1 : 0)

    return true
  }

  // See https://markdown-it.github.io/markdown-it/#Ruler.before
  md.block.ruler.before('fence', 'mermaidjs', mermaidReplacer, {
    alt: ['paragraph', 'reference', 'blockquote', 'list']
  })

  md.renderer.rules.mermaidjs = mermaidRender
}
