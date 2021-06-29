import Vue from "vue";
import VueRouter from "vue-router";
import AdminPage from "../views/AdminPage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import UserLoggedIn from "../views/UserLoggedIn.vue";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  {
    name: "admin",
    path: "/adminpage",
    component: AdminPage,
    meta: { hideTabs: true },
  },
  { name: "login", path: "/login", component: Login },
  { name: "register", path: "/register", component: Register },
  {
    name: "userloggedin",
    path: "/userloggedin",
    component: UserLoggedIn,
    meta: { hideTabs: true, requiresAuth: true },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isAuthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
