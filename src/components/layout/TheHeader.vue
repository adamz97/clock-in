<template>
  <v-app-bar app color="yellow lighten-3">
    <admin-dialog
      :show-dialog="dialog"
      :tab-controll="tabControll"
      @close-dialog="cancelAdmin"
      @save-dialog="submitAdmin"
    ></admin-dialog>
    <v-tabs
      v-if="!$route.meta.hideTabs"
      centered
      class="ml-n9"
      color="grey darken-3"
    >
      <v-tab to="/login">
        Login
      </v-tab>
      <v-tab to="/register">
        Register
      </v-tab>
      <v-tab href="#tab-3" @change="toggleDialog('admin')"> Admin </v-tab>
    </v-tabs>
    <v-col v-else class="text-right">
      <v-btn @click="signOut" color="yellow lighten-4">Log Out</v-btn>
    </v-col>
  </v-app-bar>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import AdminDialog from "./AdminDialog.vue";

export default {
  components: {
    AdminDialog,
  },
  data() {
    return {
      tab: 0,
      dialog: false,
      tabControll: "None Tab",
    };
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "login" });
      } catch (error) {
        alert(error);
      }
    },
    toggleDialog(tab) {
      this.tabControll = tab;
      this.dialog = true;
    },
    submitAdmin() {
      this.$router.replace({ name: "admin" });
      this.dialog = false;
    },
    cancelAdmin() {
      this.dialog = false;
    },
  },
};
</script>
