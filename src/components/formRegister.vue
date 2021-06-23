<template>
  <v-form>
    <v-text-field
      color="grey darken-3"
      label="Username"
      required
      type="text"
    ></v-text-field>

    <v-text-field
      color="grey darken-3"
      label="E-mail"
      type="email"
      required
    ></v-text-field>

    <v-text-field
      color="grey darken-3"
      label="Password"
      required
      type="password"
    ></v-text-field>
    <div class="button">
      <v-btn block color="grey lighten-3">
        Register
      </v-btn>
    </div>
  </v-form>
</template>

<style scoped></style>
