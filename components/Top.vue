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
      height="50vw"
      min-height="50vw"
      >
      <v-card
      width="80%"
      light
      outlined
      elevation="14"
      loading="grey"
      style="margin:0 auto 5%;"
      >
        <p style="font-weight:900;color:red;padding-top:1%;">現在転職活動中です！！！！！</p>
        <p>希望職種：フロントエンドエンジニア</p>
        <p>学習中言語及びFW：Vue.js,Nuxt.js</p>
        <p>希望雇用形態：正社員</p>
        <p>希望勤務地：東京都</p>
        <p>希望年収：300万円以上</p>
        <p style="font-weight:900;">もし興味を持って頂けました是非ご連絡下さい！！！</p>
      </v-card>
      </v-img>
      </v-card>
    </v-container>
  </div>
</template>