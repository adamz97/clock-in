<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-form @submit.prevent="register">
          <v-text-field
            v-model="username"
            :error-messages="userNameErrors"
            :counter="10"
            label="Username"
            required
            @input="$v.username.$touch()"
            @blur="$v.username.$touch()"
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

          <v-btn type="submit" block color="yellow lighten-3">
            Register
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    username: { required, maxLength: maxLength(10) },
    email: { required, email },
    password: { required, minLength: minLength(8) },
  },

  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },

  computed: {
    userNameErrors() {
      const errors = [];
      if (!this.$v.userName.$dirty) return errors;
      !this.$v.userName.maxLength &&
        errors.push("UserName must be at most 10 characters long");
      !this.$v.userName.required && errors.push("UserName is required.");
      return errors;
    },
  },
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
        },
        this.$v.$touch()
      );

      this.username = "";
      this.email = "";
      this.password = "";
    },
  },
};
</script>
<style scoped></style>
