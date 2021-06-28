<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-form
          ref="form"
          v-model="valid"
          @submit.prevent="register"
          lazy-validation
        >
          <v-text-field
            v-model="user.name"
            :rules="nameRules"
            color="grey darken-3"
            label="Name"
            type="text"
            required
          ></v-text-field>

          <v-text-field
            v-model="user.email"
            :rules="emailRules"
            color="grey darken-3"
            label="E-mail"
            type="email"
            required
          ></v-text-field>

          <v-text-field
            v-model="user.password"
            :rules="passwordRules"
            color="grey darken-3"
            label="Password"
            required
            type="password"
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            @click="validate"
            type="submit"
            block
            color="yellow lighten-3"
          >
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

import rulesMixin from "../mixins/rules.js";
export default {
  mixins: [rulesMixin],

  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then((res) => {
            res.user.updateProfile({
              displayName: this.user.name,
            });
          });
        console.log(user);
        alert("Successfully registered!!! Please login.");
        this.$router.replace({ name: "login" });
      } catch (error) {
        alert(error);

        this.user.email = "";
        this.user.password = "";
      }
    },
  },
};
</script>
<style scoped></style>
