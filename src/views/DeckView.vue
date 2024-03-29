<template>
  <div class="row mx-5 row-cols-lg-2 row-cols-sm-1 row-cols-xs-1">
    <div class="card col-sm-12 shadow col-lg-6 mt-5">
      <div class="card-body">
        <h5 class="card-title display-5">Deck Name</h5>
        <h6 class="card-subtitle mb-2 text-muted">by: player 1</h6>
        <div class="row">
          <div class="col">
            <h5 class="card-title">Main Deck</h5>
            <ul class="list-group list-group-flush my-3">
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
              <li class="list-group-item d-flex flex-row">4 Lightning bolt</li>
            </ul>
            <h6 class="card-subtitle mb-2 d-flex flex-row-reverse fw-bold">
              60 Cards
            </h6>
          </div>

          <div class="col">
            <h5 class="card-title">Side Deck</h5>
            <ul class="list-group list-group-flush my-3">
              <li class="list-group-item d-flex flex-row">4 Jackal pup</li>
              <li class="list-group-item d-flex flex-row">4 Jackal pup</li>
              <li class="list-group-item d-flex flex-row">4 Jackal pup</li>
              <li class="list-group-item d-flex flex-row">4 Jackal pup</li>
              <li class="list-group-item d-flex flex-row">4 Jackal pup</li>
              <li class="list-group-item d-flex flex-row">4 Jackal pup</li>
            </ul>
            <h6 class="card-subtitle mb-2 d-flex flex-row-reverse fw-bold">
              15 Cards
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div class="col mt-5">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title display-6">Ratings</h5>
          <h6 class="card-title mb-2">Score: 5.0</h6>
          <div
            class="list-group"
            v-for="(komentar, index) in this.komentari"
            :key="index"
          >
            <komentar-comp :info="komentar"></komentar-comp>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import KomentarVue from "@/components/Komentar.vue";
import { komentari } from "@/store";
export default {
  components: {
    "komentar-comp": KomentarVue,
  },
  data() {
    return {
      komentari,
    };
  },
};
</script>
