import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
const routes = [
  { path: "/login", component: LoginView },
  { path: "/register", component: RegisterView },
  { path: "/", component: HomeView },
  { path: "/profile", component: ProfileView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
