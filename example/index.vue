<template>
  <div>
    <button @click="open = !open">Toggle</button>
    <VueSlideToggle :open="open">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo sapiente laboriosam incidunt, nulla, necessitatibus ab labore rerum hic eaque facilis! Eum sequi iure ullam recusandae reprehenderit, eligendi sit ducimus nisi dicta, tenetur laborum iusto dolores vero. Aspernatur quidem facilis saepe. Earum obcaecati et, amet quod quasi animi sit quas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo sapiente laboriosam incidunt, nulla, necessitatibus ab labore rerum hic eaque facilis! Eum sequi iure ullam recusandae reprehenderit, eligendi sit ducimus nisi dicta, tenetur laborum iusto dolores vero. Aspernatur quidem facilis saepe. Earum obcaecati et, amet quod quasi animi sit quas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo sapiente laboriosam incidunt, nulla, necessitatibus ab labore rerum hic eaque facilis! Eum sequi iure ullam recusandae reprehenderit, eligendi sit ducimus nisi dicta, tenetur laborum iusto dolores vero. Aspernatur quidem facilis saepe. Earum obcaecati et, amet quod quasi animi sit quas?
    </VueSlideToggle>
  </div>
</template>

<script>
import {VueSlideToggle} from '../src/index'

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
