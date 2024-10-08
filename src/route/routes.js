import UserLogin from "../views/UserLogin.vue";
import HomePage from "../views/children/HomePage.vue";

export default [
  {
    path: "/",
    component: UserLogin,
  },
  {
    path: "/homepage",
    component: HomePage,
  },
];
