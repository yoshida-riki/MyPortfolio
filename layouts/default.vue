<template>
  <v-app v-cloak>
    <!-- ここからヘッダー -->
    <v-app-bar
    app
    color="indigo"
    style="color:white"
    >
      <v-app-bar-nav-icon color="white" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        MyPortfolio
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <!-- ヘッダーここまで -->

    <!-- メニュー -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
      nav
      dense
      >
      <v-list-item-group
      v-model="group"
      active-class="indigo--text text--accent-4"
      >



      </v-list-item-group>

      </v-list>
    </v-navigation-drawer>
    <!-- メニューここまで -->

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
