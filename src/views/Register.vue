<template>
  <v-sheet class="center" min-height="70vh" rounded="lg">
    <div class="centerForm">
      <form-register></form-register>
    </div>
  </v-sheet>
</template>

<script>
import formRegister from "../components/formRegister.vue";

export default {
  components: {
    formRegister,
  },
};
</script>

<style scoped>
.centerForm {
  padding: 50px;
}
</style>
