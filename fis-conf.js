fis.match('**.jsx', {
  postprocessor: fis.plugin('require-async')
})

fis.match('/modules/**.jsx', {
  isMod: true,
  parser: fis.plugin('babel'),
  postprocessor: [
    fis.plugin('jswrapper', {
      // 历史遗留问题，应该为 commonJs
      type: 'amd'
    }),
    fis.plugin('require-async')
  ]
});