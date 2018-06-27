/*!
 * vue-slide-toggle v1.0.0
 * (c) 2018-present Nikita Nafranets <eddimensi@gmail.com>
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.VueSlideToggle = {})));
}(this, (function (exports) { 'use strict';

  var SlideToggle = {
    name: 'VueSlideToggle',
    props: {
      open: Boolean,
      duration: {
        type: Number,
        default: 300
      },
      tag: {
        type: String,
        default: 'div'
      }
    },
    data: function data() {
      return {
        scrollHeight: 0
      };
    },
    mounted: function mounted() {
      window.addEventListener('resize', this.getHeight); // recalc height on resize window

      this.getHeight();
    },
    updated: function updated() {
      this.getHeight(); // recalc for dynamic change content
    },
    destroyed: function destroyed() {
      window.removeEventListener('resize', this.getHeight);
    },
    computed: {
      style: function style() {
        var heightSize = this.open ? this.scrollHeight : 0;
        return {
          overflow: 'hidden',
          transitionProperty: 'height',
          height: "".concat(heightSize, "px"),
          transitionDuration: "".concat(this.duration, "ms")
        };
      }
    },
    methods: {
      getHeight: function getHeight() {
        var container = this.$refs.container;
        this.scrollHeight = container.scrollHeight;
      }
    },
    render: function render(h) {
      return h(this.tag, {
        style: this.style,
        ref: 'container'
      }, this.$slots.default);
    }
  };

  function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('VueSlideToggle', SlideToggle);
  }

  var plugin = {
    install: install
  };
  var VueSlideToggle = SlideToggle;
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  exports.VueSlideToggle = VueSlideToggle;
  exports.default = plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
