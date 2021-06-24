import Vue from "vue";
import VueRouter from "vue-router";
import AdminPage from "../views/AdminPage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import UserLoggedIn from "../views/UserLoggedIn.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/adminpage", component: AdminPage },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/userloggedin", component: UserLoggedIn, meta: { hideTabs: true } },
];

const router = new VueRouter({
  routes,
});

export default router;
