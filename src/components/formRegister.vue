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
            :loading="loading"
            :disabled="!valid"
            @click="validate"
            type="submit"
            block
            color="teal lighten-4"
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
import "firebase/database";
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
      loading: false,
    };
  },
  methods: {
    register() {
      this.loading = true;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          firebase
            .auth()
            .currentUser.updateProfile({
              displayName: this.user.name,
            })
            .then(() => {
              firebase
                .database()
                .ref("users/" + firebase.auth().currentUser.uid)
                .set({ name: this.user.name, email: this.user.email });
            });
        })
        .then((user) => {
          this.loading = false;
          console.log(user);
          this.$router.replace({ name: "login" });
        })
        .catch((error) => {
          alert(error);
          this.user.email = "";
          this.user.password = "";
        });
    },
  },
};
</script>
<style scoped></style>
