# vue-slide-toggle
Vue component for like jQuery slideUp / slideDown animations

# Demo
[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/43pvo3zj0)

# Install
Via Yarn:
```bash
yarn add vue-slide-toggle
```

Via NPM:
```bash
npm i vue-slide-toggle
```

Add plugin into your app
```js
import Vue from 'vue'
import VueSlideToggle from 'vue-slide-toggle'

Vue.use(VueSlideToggle)

// or component

import { VueSlideToggle } from 'vue-slide-toggle'

export default {
  components: {
    VueSlideToggle
  }
}
```

# Browser
Include vue-slide-toggle in the page
```html
<!-- unpkg -->
<script src="https://unpkg.com/vue-slide-toggle"></script>
<!-- or jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/vue-slide-toggle"></script>
```

**If Vue is detected in the Page, the plugin is installed automatically.**

# Usage
```html
<template>
  <div>
    <button @click="open = !open">Toggle</button>
    <VueSlideToggle :open="open" tag="section" :duration="500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo sapiente laboriosam incidunt, nulla, necessitatibus ab labore rerum hic eaque facilis! Eum sequi iure ullam recusandae reprehenderit, eligendi sit ducimus nisi dicta, tenetur laborum iusto dolores vero. Aspernatur quidem facilis saepe. Earum obcaecati et, amet quod quasi animi sit quas?
    </VueSlideToggle>
  </div>
</template>

<script>
import { VueSlideToggle } from '../src/index'

export default {
  data() {
    return {
      open: false,
    }
  },
  components: {
    VueSlideToggle
  },
}
</script>
```

## Component props
* `open` (`Boolean`) - open / hide content
* `duration` (`Number`) - animation duration
* tag (String) - Which HTML tag to use for the wrapper element. Defaults to `div`.