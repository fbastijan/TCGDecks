import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import DeckView from "@/views/DeckView.vue";
import CreatorView from "@/views/CreatorView.vue";
import SearchResultView from "@/views/SearchResultView.vue";
import { UserData } from "@/store";
import ProfileEditorView from "@/views/ProfileEditorView.vue";
import DeckEditor from "@/views/DeckEditor.vue";
import CardView from "@/views/CardView.vue";
const routes = [
  {
    path: "/login",
    component: LoginView,
    meta: {
      needsUser: false,
    },
  },
  {
    path: "/register",
    component: RegisterView,
    meta: {
      needsUser: false,
    },
  },
  {
    path: "/",
    component: HomeView,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/profile",
    component: ProfileView,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/deck/:id",
    component: DeckView,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/decklist/creator",
    component: CreatorView,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/decklist/:id/editor",
    component: DeckEditor,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/search/:keyWords/result",
    component: SearchResultView,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/profile/Editor",
    component: ProfileEditorView,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/card/:name",
    component: CardView,
    meta: {
      needsUser: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  //console.log('Stara ruta', from.name, ' -> ', to.name, 'korisnik', store.currentUser);

  const noUser = UserData.currentUser === null;

  if (noUser && to.meta.needsUser) {
    next("login");
  } else {
    next();
  }
});
export default router;
