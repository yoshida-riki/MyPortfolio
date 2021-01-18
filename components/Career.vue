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
          経歴
        </v-card-title>
        <v-row
        justify="center"
        align-center="center"
        >
          <v-col
          cols="12"
          sm="8"
          md="8"
          >
            <v-list>
              <v-list-item
                v-for="profile in profiles"
                :key="profile.content"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon>mdi-account-box-multiple</v-icon>
                    {{ profile.content }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-list>
              <h2>未経験からエンジニアを目指そうと思った理由</h2>
              <p>
                -------------------------------------------------------------------<br>
                最新の情報や技術を駆使して、多くの人の日常に「便利」を届けたいからです。
                元々新しいものや仕組みが好きな私はもっとITを駆使することで、日常が便利になるのではないかと感じておりました。
                そこでプログラミングを用いて自分でできないか調べ勉強してみたところ、想いを形にできる点がとにかく面白いと感じました。
                私が考える「人に喜ばれたい」という想いをプログラミングを通して形にしていき、「便利」を届けたいと考える様になりました。
                徹底的に現場の声に寄り添い、一緒に悩みを改善し続けられるエンジニアになりたいと考えております。
              </p>
            </v-list>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    profiles: [
      {content: '2019年3月 : 鹿児島国際大学 経済学部 経営学科 会計学部専攻 卒業'},
      {content: '2019年4月 : 株式会社健康家族 入社 製品製造管理部 六次産業課 配属'},
      {content: '2020年7月 : 株式会社健康家族 退職'},
    ]
  })
}
</script>

<style scoped>

</style>