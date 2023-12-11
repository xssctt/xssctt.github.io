export const data = JSON.parse("{\"key\":\"v-f8321a04\",\"path\":\"/posts/firsrt.html\",\"title\":\"title\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"title\",\"icon\":\"page\",\"order\":3,\"author\":\"xss\",\"date\":\"2023-12-11T00:00:00.000Z\",\"category\":[\"one\",\"two\"],\"tag\":[\"aaaa\",\"bbbb\"],\"sticky\":true,\"star\":true,\"footer\":\"这是测试显示的页脚\",\"copyright\":\"无版权\",\"description\":\"提示 我的第一篇文章 111111111\"},\"headers\":[],\"readingTime\":{\"minutes\":0.47,\"words\":140},\"filePathRelative\":\"posts/firsrt.md\",\"localizedDate\":\"2023年12月11日\",\"excerpt\":\"<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">提示</p>\\n<p>我的第一篇文章</p>\\n</div>\\n<p>111111111</p>\\n\",\"autoDesc\":true}")

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
