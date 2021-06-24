<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-form @submit.prevent="register">
          <v-text-field
            v-model="username"
            :counter="10"
            label="Username"
            required
            type="text"
            color="grey darken-3"
          ></v-text-field>

          <v-text-field
            v-model="email"
            color="grey darken-3"
            label="E-mail"
            type="email"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            color="grey darken-3"
            label="Password"
            required
            type="password"
          ></v-text-field>

          <v-btn disabled type="submit" block color="yellow lighten-3">
            Register
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
      username: "",
      email: "",
      password: "",
    };
  },

  computed: {},
  methods: {
    register() {
      fetch(
        "https://vue-project-7821e-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password,
          }),
        }
      );

      this.username = "";
      this.email = "";
      this.password = "";
    },
  },
};
</script>
<style scoped></style>
