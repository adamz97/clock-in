<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-toolbar-title class="title">Clock-In ⏳</v-toolbar-title>
        <v-form>
          <v-text-field
            color="grey darken-3"
            label="E-mail"
            type="email"
            required
          ></v-text-field>

          <v-text-field
            color="grey darken-3"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-form>
        <v-btn block color="yellow lighten-3">
          Login
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.title {
  padding: 30px;
  margin-bottom: 80px;
  text-align: center;
}
</style>
