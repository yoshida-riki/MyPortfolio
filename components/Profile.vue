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
        MyPortfolio
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
        <v-row
        justify="space-around"
        align-content="center"
        style="height:100%"
        >
        <v-avatar
        width="80%"
        height="auto"
        >
        <img
        src=""
        alt=""
        style="object-fit:cover;"
        >
        </v-avatar>
        </v-row>
        </v-col>

        <v-col
        cols="12"
        sm="6"
        md="6"
        >
        <v-list>
          <v-list-item
          v-for="profile in profiles"
          :key="profile.content"
          >
            <v-list-item-content>
              <v-list-item-title><v-icon>mdi-check</v-icon>{{ profile.content }}</v-list-item-title>
            </v-list-item-content>
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
  data: () => ({
    profiles: [
      {content: '吉田 理輝 (よしだ りき)'},
      {content: '1995年5月21日生まれ (現在25歳)'},
      {content: '鹿児島県出身鹿児島市在住'},
    ]
  })
}
</script>

<style>

</style>