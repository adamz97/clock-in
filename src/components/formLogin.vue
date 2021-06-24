<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-form>
          <v-text-field
            ref="email"
            v-model="email"
            color="grey darken-3"
            label="E-mail"
            type="email"
            required
          ></v-text-field>

          <v-text-field
            ref="password"
            v-model="password"
            color="grey darken-3"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <v-btn
            disabled
            block
            to="userloggedin"
            type="submit"
            color="yellow lighten-3"
          >
            Login
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.title {
  padding: 30px;
  margin-bottom: 80px;
  text-align: center;
}
</style>
