export const data = {
  "key": "v-0c3aa8d2",
  "path": "/test-diagrams.html",
  "title": "A few test diagrams",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "A simple one",
      "slug": "a-simple-one",
      "children": []
    },
    {
      "level": 2,
      "title": "A box-sizing wise complicated one",
      "slug": "a-box-sizing-wise-complicated-one",
      "children": []
    }
  ],
  "filePathRelative": "test-diagrams.md",
  "git": {
    "updatedTime": 1596116526000,
    "contributors": [
      {
        "name": "eFrane",
        "email": "efrane@meanderingsoul.com",
        "commits": 2
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
