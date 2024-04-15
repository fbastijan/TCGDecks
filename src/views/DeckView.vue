<template>
  <div>
    <div class="row mx-5 row-cols-lg-2 row-cols-sm-1 row-cols-xs-1">
      <div class="col-sm-12 col-lg-8 mt-5">
        <entire-deck
          :mainDeck="this.deck.mainDeck"
          :sideboard="this.deck.sideboard"
          :deckAndPlayer="this.deck.playerAndDeck"
        ></entire-deck>
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
import EntireDeckCard from "@/components/EntireDeckCard.vue";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  components: {
    "komentar-comp": KomentarVue,
    "entire-deck": EntireDeckCard,
  },
  async mounted() {
    await this.getDeck();
  },
  methods: {
    async getDeck() {
      try {
        const docRef = doc(db, "decks", this.$route.params.id);
        const docSnap = await getDoc(docRef);
        this.deck = docSnap.data();
        console.log(this.deck);
      } catch (e) {
        console.error(e);
      }
    },
  },
  data() {
    return {
      komentari,
      showMore: 3,
      rating: 0,
      deck: { playerAndDeck: { deckName: "" }, sideboard: [], mainDeck: [] },
    };
  },
};
</script>
