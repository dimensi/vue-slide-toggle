export default {
  name: 'VueSlideToggle',

  props: {
    open: Boolean,
    duration: {
      type: Number,
      default: 300,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },

  data () {
    return {
      scrollHeight: 0,
      doneOpenTransition: false,
      innerOpen: this.open,
    }
  },

  mounted () {
    window.addEventListener('resize', this.getHeight) // recalc height on resize window
    this.getHeight()
  },

  updated () {
    this.getHeight() // recalc for dynamic change content
  },

  destroyed () {
    window.removeEventListener('resize', this.getHeight)
  },

  watch: {
    open(bool) {
      if (!bool) {
        this.getHeight()
        this.doneOpenTransition = false;
        this.$nextTick().then(() => {
          this.innerOpen = false;
        })
      } else {
        this.innerOpen = true;
      }
    }
  },

  computed: {
    style () {
      if (this.innerOpen && this.doneOpenTransition) return null;

      const heightSize = this.innerOpen ? this.scrollHeight : 0

      return {
        overflow: 'hidden',
        transitionProperty: 'height',
        height: `${heightSize}px`,
        transitionDuration: `${this.duration}ms`,
      }
    },
  },

  methods: {
    getHeight () {
      const { container } = this.$refs
      this.scrollHeight = container.scrollHeight
    },

    handleTransition () {
      if (this.innerOpen) {
        this.doneOpenTransition = true;
      }
    }
  },

  render (h) {
    return h(
      this.tag,
      {
        style: this.style,
        ref: 'container',
        on: {
          transitionend: this.handleTransition,
        }
      },
      this.$slots.default
    )
  },
}
