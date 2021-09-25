export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Installation",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroText": "mermaid Plugin for VuePress",
    "tagline": "Easy diagramming in your documentation/blog/whatever. Requires VuePress 1.x",
    "footer": "MIT Licensed | Copyright © 2019-present Stefan \"eFrane\" Graupner"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Options",
      "slug": "options",
      "children": []
    },
    {
      "level": 2,
      "title": "Fenced code block syntax",
      "slug": "fenced-code-block-syntax",
      "children": []
    },
    {
      "level": 2,
      "title": "Tag Syntax (not recommended)",
      "slug": "tag-syntax-not-recommended",
      "children": []
    }
  ],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1583754378000,
    "contributors": [
      {
        "name": "eFrane",
        "email": "efrane@meanderingsoul.com",
        "commits": 6
      },
      {
        "name": "Maikel Vlasman",
        "email": "github-82jnd5llq8fji7v5@maikelvlasman.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
