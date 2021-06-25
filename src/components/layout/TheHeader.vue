<template>
  <v-app-bar app color="yellow lighten-3">
    <v-tabs
      v-if="!$route.meta.hideTabs"
      centered
      class="ml-n9"
      color="grey darken-3"
    >
      <v-tab to="/login"> Login </v-tab>
      <v-tab to="/register"> Register </v-tab>
      <v-tab to="/adminpage"> Admin </v-tab>
    </v-tabs>
    <v-col v-else class="text-right">
      <v-btn @click="signOut" color="yellow lighten-4">Log Out</v-btn>
    </v-col>
  </v-app-bar>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {};
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        alert("Logged Out");
        this.$router.replace({ name: "login" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>
