import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import DeckView from "@/views/DeckView.vue";
import CreatorView from "@/views/CreatorView.vue";
import SearchResultView from "@/views/SearchResultView.vue";
const routes = [
  { path: "/login", component: LoginView },
  { path: "/register", component: RegisterView },
  { path: "/", component: HomeView },
  { path: "/profile", component: ProfileView },
  { path: "/deck/:id", component: DeckView },
  { path: "/decklist/creator", component: CreatorView },
  { path: "/search/:keyWords/result", component: SearchResultView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
