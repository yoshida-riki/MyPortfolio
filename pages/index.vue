<template>
  <div>
    <Top />
    <v-divider></v-divider>
    <About />
    <v-divider></v-divider>
    <Career />
    <v-divider></v-divider>
    <Product />
    <v-divider></v-divider>
    <Project />
    <v-divider></v-divider>

  </div>
</template>

<script>
import Top from '~/components/Top.vue'
import About from '~/components/About.vue'
import Career from '~/components/Career.vue'
import Product from '~/components/Product.vue'
import Project from '~/components/Project.vue'

export default {
  components: {
    Top,
    About,
    Career,
    Product,
    Project,
  },
}
</script>
