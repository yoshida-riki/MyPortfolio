<template>
  <div id="top">
    <v-container
    fluid
    >
      <v-card
      width="100vw"
      >
      <v-img
      class="white--text align-end text-center font-italic"
      :class="{'headline': $vuetify.breakpoint.smAndDown, 'display-1': $vuetify.breakpoint.mdAndUp}"
      src="/image/header.jpeg"
      height="40vw"
      >
      <v-card
      light

      width="50%"
      style="float: right;margin-bottom: 5%;"
      elevation="14"
      loading="grey"
      loader-height="4"
      justify="center"
      align-content="center"
      >
        <p>希望職種：フロントエンドエンジニア</p>
        <p>学習中言語：Vue.js,Nuxt.js</p>
        <p>希望勤務地：東京都</p>
        <p>希望年収：300万円以上</p>
      </v-card>
      </v-img>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
</style>