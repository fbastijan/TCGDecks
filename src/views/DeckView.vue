<template>
  <div>
    <div class="row mx-5 row-cols-lg-2 row-cols-sm-1 row-cols-xs-1">
      <div class="card col-sm-12 shadow col-lg-8 mt-5">
        <div class="card-body">
          <h5 class="card-title display-5">Deck Name</h5>
          <img
            src="https://placehold.co/150"
            class="rounded-circle mb-2"
            alt=""
          />
          <h6 class="card-subtitle mb-2 text-muted">by: player 1</h6>
          <div class="row">
            <div class="col">
              <h5 class="card-title">Main Deck</h5>
              <ul class="list-group list-group-flush my-3">
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
                <li class="list-group-item d-flex flex-row">
                  4 Lightning bolt
                </li>
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

      <div class="col-sm-12 col-lg-4 mt-5">
        <div class="card">
          <h5 class="card-title my-3">Other decks</h5>
          <h6 class="card-subtitle mb-2 text-muted">by: player 1</h6>
          <div class="card-body">
            <ul class="list-group list-group-flush my-3">
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Mono Red Burn</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Rakdos Midrange</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
              <li class="list-group-item d-flex flex-row">
                <a href="#" class="text-decoration-none">Other deck</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row mx-5 mt-5 mb-3">
      <div class="card col-lg-8 col-sm-12">
        <div class="card-body">
          <h5 class="card-title display-6">Ratings</h5>
          <h6 class="card-title mb-2">Score: 5.0</h6>
          <div
            class="list-group"
            v-for="(komentar, index) in this.komentari"
            :key="index"
          >
            <komentar-comp
              :info="komentar"
              v-if="index < this.showMore"
            ></komentar-comp>
          </div>
        </div>

        <div class="mb-3">
          <a href="#" @click="this.showMore = 10" v-if="this.showMore == 3"
            >Show more</a
          >
          <a href="#" @click="this.showMore = 3" v-if="this.showMore != 3"
            >Show less</a
          >
        </div>
        <div>
          <label for="rating" class="form-label d-flex flex-row">Ocjeni:</label>
          <star-rating
            id="rating"
            v-model:rating="rating"
            :increment="0.5"
            :star-size="20"
          ></star-rating>
          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label d-flex flex-row"
              >Ostavi komentar:</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <button type="button" class="btn btn-dark mt-3 d-flex flex-row">
              Rate
            </button>
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
      showMore: 3,
      rating: 0,
    };
  },
};
</script>
