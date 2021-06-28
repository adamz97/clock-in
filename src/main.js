import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import "firebase/auth";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhD_LCN9NKOEV09MNuFeQScDs7duOOLJ4",
  authDomain: "vue-project-7821e.firebaseapp.com",
  databaseURL: "https://vue-project-7821e-default-rtdb.firebaseio.com",
  projectId: "vue-project-7821e",
  storageBucket: "vue-project-7821e.appspot.com",
  messagingSenderId: "370878525862",
  appId: "1:370878525862:web:e698c901d5e12365eadf67",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,

      render: (h) => h(App),
    }).$mount("#app");
  }
});
