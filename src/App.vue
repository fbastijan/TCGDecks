<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary navbar-dark"
    style="background-color: #242582"
  >
    <div class="container-fluid">
      <a class="navbar-brand" style="color: #f64c72" href="#">Tcg Decks</a>
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
          <a class="nav-link" href="#"
            ><router-link
              to="/menucreator"
              style="text-decoration: none; color: inherit"
              >Make your menu</router-link
            ></a
          >
        </div>

        <div class="navbar-nav ms-auto">
          <a class="nav-link" aria-current="page" href="#"
            ><router-link
              to="/login"
              style="text-decoration: none; color: inherit"
              >Login</router-link
            ></a
          >
          <a class="nav-link" href="#"
            ><router-link
              to="/register"
              style="text-decoration: none; color: inherit"
              >Register</router-link
            ></a
          >
          <a class="nav-link" aria-current="page" href="#"
            ><router-link
              to="/profile"
              style="text-decoration: none; color: inherit"
              >Profil</router-link
            ></a
          >
          <a class="nav-link" href="#">Odjava</a>
        </div>
      </div>
    </div>
  </nav>

  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2f2fa2;
}
</style>
