<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8">
          <v-sheet class="center" min-height="70vh" rounded="lg">
            <div class="centerForm">
              <form-register></form-register>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import formRegister from "../components/formRegister.vue";

export default {
  components: {
    formRegister,
  },
};
</script>

<style scoped></style>
