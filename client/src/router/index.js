import { createRouter, createWebHistory } from "vue-router";
import SignInPage from "../pages/SignInPage.vue";
import SignUpPage from "../pages/SignUpPage.vue";
import HomePage from "../pages/HomePage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignInPage
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUpPage
    },
  ]
});

export default router;
