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
        共同開発
      </v-card-title>
      <v-card-subtitle class="text-center">
        シェアオフィス検索プラットフォーム「Japan Office Portal」のサービス開発
      </v-card-subtitle>

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
                <li>シェアオフィスが簡単に見つかるポータルサイトを開発中(2021年6月ベータ版リリース予定)</li>
                <li>シェアオフィスが簡単に見つかるポータルサイトとして、地図上で視覚的に把握できるサイトの運営予定</li>
                <li>コロナ禍でシェアオフィス</li>
              </ul>
            </p>
          </v-list>
          <v-list>
            <v-list-item>
              <v-icon>mdi-lightbulb-on-outline</v-icon>
              企業情報
            </v-list-item>
            <p class="ml-10">
              <ul class="item-list">
                <li>開発時期: 2020年10月~</li>
                <li>企業名: 合同会社JOP(未だ登記していない為正式には)</li>
                <li>構成: 代表1名 法務1名 エンジニア2名(私を含む) 合計4名</li>
                <li>事業内容: シェアオフィス事業</li>
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
                <li>Vue.js(BootstrapVue,GoogleMapsJavascriptAPI)</li>
                <li>API</li>
                <li>Django,django-rest-framework</li>
                <li>インフラ</li>
                <li>AWS(EC2, ALB, RDS, ElastiCache, S3, CloudFront, ECS(Fargate), Route53)</li>
                <li>データベース</li>
                <li>PostgreSQL</li>
              </ul>
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

}
</script>

<style>
.list {
  list-style: none;
}
.item-list > li {
  margin: 1% 0;
}
</style>