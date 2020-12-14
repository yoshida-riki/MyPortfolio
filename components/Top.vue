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
      src="/image/my-portfolio-top.jpg"
      >
      <p>希望職種：フロントエンドエンジニア</p>
      <p>学習中言語：Vue.js,Nuxt.js</p>
      <p>希望勤務地：東京都</p>
      <p>希望年収：300万円以上</p>
      </v-img>
      </v-card>
    </v-container>
  </div>
</template>