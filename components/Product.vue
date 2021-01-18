<template>
  <div id="profile">
    <v-container
    fluid
    >
      <v-card
      width="100vw"
      >
      <v-card-title
      class="pa-5 justify-center display-1 font-italic"
      >
        個人開発
      </v-card-title>

      <v-row
      justify="center"
      align-center="center"
      >
        <v-col
        cols="12"
        sm="5"
        md="5"
        align="center"
        >
        </v-col>

        <v-col
        cols="12"
        sm="6"
        md="6"
        >
        <v-list>
          <v-list-item>
            <v-icon>mdi-laptop-chromebook</v-icon>
            プロダクト概要
          </v-list-item>
          <p class="ml-10">
            <ul class="item-list">
              <li>継続して学習することを習慣化するwebアプリです。</li>
              <li>プログラミング学習をまずは1000時間することを目的としています。
                (参考記事は<a href="https://www.sejuku.net/blog/109494">こちら</a>)
              </li>
              <li>使い方は学習後に、学習時間とアウトプット内容を記録します。</li>
            </ul>
          </p>
        </v-list>

        <v-list>
          <v-list-item>
            <v-icon>mdi-lightbulb-on-outline</v-icon>
            工夫した点
          </v-list-item>
          <p class="ml-10">
            <ul class="item-list">
              <li>学習時間の合計時間を可視化できるように致しました。</li>
              <li>学習時間を入力し、ボタンを押すとグラフのアニメーションが作動します。</li>
              <li></li>
            </ul>
          </p>
        </v-list>
          
        <v-list>
          <v-list-item>
            <v-icon>mdi-cog-outline</v-icon>
            開発環境
          </v-list-item>
          <p class="ml-10">
            <ul class="list item-list">
              <li>フロントエンド</li>
              <li>Nuxt.js/Vue.js(Vuetify,Vue-chart.js)</li>
              <li>バックエンド</li>
              <li>Firebase(Firebase Authentication,Cloud Firestore,Firebase Hosting)</li>
            </ul>
          </p>
        </v-list>

        <v-list>
          <v-list-item>
            <v-icon>mdi-code-tags</v-icon>
            GitHubは<a href="https://github.com/yoshida-riki/TimeOverGrow">こちら</a>
          </v-list-item>
        </v-list>


        </v-col>
      </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>