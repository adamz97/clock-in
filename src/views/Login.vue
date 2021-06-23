<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-toolbar-title class="title">Clock-In App</v-toolbar-title>
      <v-col cols="12" sm="12">
        <v-sheet class="center" min-height="70vh" rounded="lg"
          ><div class="centerForm"><form-login></form-login></div
        ></v-sheet>
      </v-col>
    </v-container>
  </v-main>
</template>
<script>
import formLogin from "../components/formLogin.vue";

export default {
  components: {
    formLogin,
  },
};
</script>
<style scoped>
.title {
  text-align: center;
}
.center {
  padding: 100px;
  margin: auto;
  width: 80%;
}
.centerForm {
  padding: 25px;

  margin: auto;
  width: 70%;
}
</style>
