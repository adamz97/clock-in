<template>
  <v-app class="font" id="inspire">
    <the-header></the-header>
    <v-main class="grey lighten-3">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6">
          <v-toolbar-title class="font-weight-bold pa-4 " align="center"
            >Clock-In</v-toolbar-title
          >
          <router-view> </router-view>
        </v-col>
      </v-row>
    </v-main>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
html {
  overflow-y: hidden;
}
.font {
  font-family: "Nunito", sans-serif;
}

.alert {
  float: right;
}
</style>
