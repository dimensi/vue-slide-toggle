module.exports = {
  format: ['umd', 'es', 'iife-min'],
  banner: true,
  moduleName: 'VueSlideToggle',
  plugin: [
    require('rollup-plugin-clear')({
      targets: ['./dist/']
    })
  ],
  exports: 'named'
}
