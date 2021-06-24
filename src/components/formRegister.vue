<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-form @submit.prevent="register">
          <!-- <v-text-field
            v-model="username"
            :counter="10"
            label="Username"
            required
            type="text"
            color="grey darken-3"
          ></v-text-field> -->

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

          <v-btn type="submit" block color="yellow lighten-3">
            Register
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      password: "",
      email: "",
    };
  },

  computed: {},
  methods: {
    async register() {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ name: "userloggedin" });
      } catch (error) {
        alert(error);
        this.email = "";
        this.password = "";
      }
    },
  },
};
</script>
<style scoped></style>
