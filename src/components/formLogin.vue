<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-form
          ref="form"
          v-model="valid"
          @submit.prevent="login"
          lazy-validation
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            color="grey darken-3"
            label="E-mail"
            type="email"
            required
          ></v-text-field>

          <v-text-field
            :rules="passwordRules"
            v-model="password"
            color="grey darken-3"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <v-btn
            :loading="loading"
            :disabled="!valid"
            @click="validate"
            block
            type="submit"
            color="teal lighten-4"
          >
            Login
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
      email: "",
      password: "",
      loading: false,
    };
  },
  computed: {},
  methods: {
    login() {
      this.loading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((login) => {
          this.loading = false;
          this.$router.replace({ name: "userloggedin" });
          console.log(login);
        })
        .catch((error) => {
          alert(error);
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<style scoped>
.title {
  padding: 30px;
  margin-bottom: 80px;
  text-align: center;
}
</style>
