<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      <strong>{{ currentDate() }}</strong>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth() +
        1}/${current.getFullYear()}`;
      return date;
    },
  },
};
</script>
