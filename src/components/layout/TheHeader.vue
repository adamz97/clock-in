<template>
  <v-app-bar app color="teal lighten-4">
    <admin-dialog
      :show-dialog="dialog"
      :tab-controll="tabControll"
      @close-dialog="cancelAdmin"
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
    <v-row no-gutters v-else>
      <v-col class="text-right">
        <v-btn @click="signOut" color="teal lighten-5">Log Out</v-btn>
      </v-col>
    </v-row>
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
    cancelAdmin() {
      this.dialog = false;
    },
  },
};
</script>
