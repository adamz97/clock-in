<template>
  <v-sheet class="center" min-height="70vh" rounded="lg"
    ><div class="centerForm"><form-login></form-login></div
  ></v-sheet>
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
.centerForm {
  padding: 50px;
}
</style>
