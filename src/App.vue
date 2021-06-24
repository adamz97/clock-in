<template>
  <v-app id="inspire">
    <the-header></the-header>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6">
            <v-toolbar-title class="title">Clock-In ⏳</v-toolbar-title>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-alert
      class="alert"
      transition="scroll-x-transition"
      type="info"
      :value="alert"
      border="right"
      colored-border
      color="yellow lighten-2"
      elevation="2"
      width="25%"
    >
      Zarejestrowano pomyślnie
    </v-alert>
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
    return {
      alert: false,
    };
  },
};
</script>

<style>
html {
  overflow-y: hidden;
}
.title {
  text-align: center;
}
.alert {
  float: right;
}
</style>
