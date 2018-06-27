const pgk = require('./package')
module.exports = {
  format: ['umd', 'umd-min', 'es', 'cjs'],
  banner: true,
  moduleName: pgk.name,
  plugin: [
    require('rollup-plugin-clear')({
      targets: ['./dist/']
    })
  ],
  exports: 'named'
}
