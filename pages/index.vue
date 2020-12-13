<template>
  <div>
    <Top />
    <v-divider></v-divider>
    <Profile />
    <v-divider></v-divider>
    <History />
    <v-divider></v-divider>
    <Work />
    <v-divider></v-divider>
    <Contact />
  </div>
</template>

<script>
import Top from '~/components/Top.vue'
import Profile from '~/components/Profile.vue'
import History from '~/components/History.vue'
import Work from '~/components/Work.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Top,
    Profile,
    History,
    Work,
    Contact,
  },
}
</script>
