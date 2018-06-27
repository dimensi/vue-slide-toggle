import SlideToggle from './SlideToggle'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VueSlideToggle', SlideToggle)
}

const plugin = {
  install,
}

export const VueSlideToggle = SlideToggle

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default plugin
