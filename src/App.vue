<template>
  <v-app id="inspire">
    <the-header></the-header>
    <router-view></router-view>
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
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
