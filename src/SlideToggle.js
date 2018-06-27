export default {
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

  data () {
    return {
      scrollHeight: 0
    }
  },

  async mounted () {
    window.addEventListener('resize', this.getHeight) // recalc height on resize window
    this.getHeight()
  },

  updated () {
    this.getHeight() // recalc for dynamic change content
  },

  destroyed () {
    window.removeEventListener('resize', this.getHeight)
  },

  computed: {
    style () {
      const heightSize = this.active ? this.scrollHeight : 0

      return {
        overflow: 'hidden',
        transitionProperty: 'height',
        height: `${heightSize}px`,
        transitionDuration: `${this.duration}ms`
      }
    }
  },

  methods: {
    getHeight () {
      const { container } = this.$refs
      this.scrollHeight = container.scrollHeight
    }
  },

  render (h) {
    return h(
      this.tag,
      {
        style: this.style,
        ref: 'container'
      },
      this.$slots.default
    )
  }
}
