<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary navbar-dark"
    style="background-color: #222831"
  >
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" style="color: #76abae" href="#"
        >Tcg Decks</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href="#"
            ><router-link to="/" style="text-decoration: none; color: inherit"
              >Home</router-link
            ></a
          >
          <a class="nav-link" href="#" v-if="UserData.currentUser"
            ><router-link
              to="/decklist/creator"
              style="text-decoration: none; color: inherit"
              >Make your decklist</router-link
            ></a
          >
        </div>

        <div class="navbar-nav ms-auto">
          <a
            class="nav-link"
            aria-current="page"
            href="#"
            v-if="!UserData.currentUser"
            ><router-link
              to="/login"
              style="text-decoration: none; color: inherit"
              >Login</router-link
            ></a
          >
          <a class="nav-link" href="#" v-if="!UserData.currentUser"
            ><router-link
              to="/register"
              style="text-decoration: none; color: inherit"
              >Register</router-link
            ></a
          >
          <a
            class="nav-link"
            aria-current="page"
            href="#"
            v-if="UserData.currentUser"
            ><router-link
              to="/profile"
              style="text-decoration: none; color: inherit"
              >Profil</router-link
            ></a
          >
          <a
            class="nav-link"
            href="#"
            @click="odjava()"
            v-if="UserData.currentUser"
            >Odjava</a
          >
        </div>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <router-view></router-view>
  </div>
</template>

<script>
import router from "@/router";
import { UserData } from "@/store";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  const currentRoute = router.currentRoute;

  //console.log('PROVJERA STANJA LOGINA!');
  if (user) {
    // User is signed in.
    console.log("*** User", user.email);
    UserData.currentUser.value = user.email;
    UserData.currentUserId.value = user.uid;

    if (!currentRoute.value.meta.needsUser) {
      router.push("/");
    }
  } else {
    // User is not signed in.
    console.log("*** No user");
    UserData.currentUser.value = null;

    if (currentRoute.value.meta.needsUser) {
      router.push("/login");
    }
  }
});
export default {
  data() {
    return {
      UserData,
    };
  },

  methods: {
    odjava() {
      auth
        .signOut()
        .then(() => {
          this.$router.push("/login");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  background-color: #76abae;
}
</style>
