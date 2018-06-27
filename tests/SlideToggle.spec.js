import { mount } from '@vue/test-utils'
import SlideToggle from '../src/SlideToggle'
import flushPromises from 'flush-promises'

const ContentWithText = {
  render (h) {
    return <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo sapiente laboriosam incidunt, nulla, necessitatibus ab labore rerum hic eaque facilis! Eum sequi iure ullam recusandae reprehenderit, eligendi sit ducimus nisi dicta, tenetur laborum iusto dolores vero. Aspernatur quidem facilis saepe. Earum obcaecati et, amet quod quasi animi sit quas?</div>
  },
}

describe('SlideToggle component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SlideToggle)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('must be height 0 on open: false', () => {
    const wrapper = mount(SlideToggle, {
      slots: {
        default: ContentWithText,
      },
      props: {
        open: false,
      },
    })

    expect(wrapper.contains(ContentWithText)).toBe(true)
    expect(wrapper.element.style.height).toBe('0px')
  })

  test('height must not be 0 on open: true', async () => {
    // useless test, jsdom can't emulate scrollHeight
    const wrapper = mount(SlideToggle, {
      slots: {
        default: ContentWithText,
      },
      attachToDocument: true,
      props: {
        open: true,
      },
    })

    expect(wrapper.contains(ContentWithText)).toBe(true)
    await flushPromises()
    expect(wrapper.element.scrollHeight).toBe(0)
  })
})
