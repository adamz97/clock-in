<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8">
          <v-sheet class="center" min-height="70vh" rounded="lg"
            ><div class="centerForm"><form-login></form-login></div
          ></v-sheet>
        </v-col>
      </v-row>
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
<style scoped></style>
