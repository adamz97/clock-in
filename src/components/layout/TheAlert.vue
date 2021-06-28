<template>
  <v-alert
    class="alert"
    transition="fade-transition"
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
</template>

<script>
export default {
  data() {
    return {
      alert: false,
    };
  },
};
</script>
