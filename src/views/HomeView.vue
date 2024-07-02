<template>
  <div class="row align-items-center" style="min-height: 80vh">
    <div class="jumbotron">
      <h1 class="display-6">Tcg Decks je moćna stranica za prikaz deckova.</h1>
      <div class="row">
        <div class="col"></div>
        <div class="mb-3 col-lg-6 col-sm-12 reg-form">
          <input
            v-model="term"
            class="form-control-lg reg-form bg-dark"
            style="width: 100%"
          />
        </div>
        <div class="col" style="color: #eeeeee"></div>
      </div>

      <p class="lead">
        <a
          class="btn btn-lg bg-dark"
          style="color: #eeeeee"
          href="#"
          role="button"
          v-bind:disabled="term"
          @click="search()"
          >Search decks</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      term: "",
    };
  },
  methods: {
    search() {
      if (this.term) this.$router.push("/search/" + this.term + "/result");
    },
  },
  mounted() {},
};
</script>

<style scoped>
.reg-form {
  border-color: #eeeeee;
  color: #eeeeee;
}
.my-label {
  color: #eeeeee !important;
}
.form-button:not(:hover) {
  border-color: #eeeeee;
  color: #eeeeee;
}
.form-button:hover {
  background-color: #eeeeee;
  color: #222831;
  border-color: #eeeeee;
}
</style>
