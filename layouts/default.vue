<template>
  <v-app v-cloak>
    <!-- ここからヘッダー -->
    <v-app-bar
    app
    color="grey"
    style="color:white;"
    >
      <v-app-bar-nav-icon color="white" @click="drawer=true"></v-app-bar-nav-icon>
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
          <nuxt-link v-scroll-to="'#profile'" to>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
                <v-list-item-title>
                  profile
                </v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <nuxt-link v-scroll-to="'#history'" to>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-history</v-icon>
              </v-list-item-icon>
                <v-list-item-title>
                  history
                </v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <nuxt-link v-scroll-to="'#work'" to>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
                <v-list-item-title>
                  work
                </v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <nuxt-link v-scroll-to="'#contact'" to>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-email</v-icon>
              </v-list-item-icon>
                <v-list-item-title>
                  contact
                </v-list-item-title>
            </v-list-item>
          </nuxt-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- メニューここまで -->

    <v-content
    fluid
    >
      <Nuxt />
    </v-content>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      group: null,
    }
  }
}
</script>

<style>
[v-cloak] {
  display: none;
  margin: 0;
  padding: 0;
}

.v-application a {
  color: rgb(134, 134, 134);
  text-decoration: none;
}

.theme--light.v-btn:hover::before {
  opacity: 0.2;
}
</style>