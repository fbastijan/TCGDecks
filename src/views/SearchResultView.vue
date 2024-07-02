<template>
  <div class="row row-cols-lg-5 row-cols-sm-1 mt-5 mx-3">
    <div v-for="(card, index) in this.decks" :key="index" class="mb-3">
      <deck-card :info="card"></deck-card>
    </div>
  </div>
</template>
<script>
import DeckCard from "@/components/DeckCard.vue";
import { db } from "@/firebase";
import { getDocs, collection, query, where, limit } from "firebase/firestore";
export default {
  components: {
    DeckCard,
  },

  async mounted() {
    this.decks = await this.getAllDecks();
  },
  methods: {
    async getMoreData() {
      this.limiter += 10;
      this.decks = await this.getAllDecks();
    },
    async getAllDecks() {
      try {
        let tokens = this.$route.params.keyWords.toLowerCase().split(" ");
        const q = query(
          collection(db, "decks"),
          where("playerAndDeck.keywords", "array-contains-any", tokens),

          limit(this.limiter)
        );
        try {
          const querySnapshot = await getDocs(q);
          let helper = [];
          querySnapshot.forEach((doc) => {
            helper.push({ deckId: doc.id, ...doc.data() });
          });

          return helper;
        } catch (e) {
          console.error(e);
          return;
        }
      } catch (e) {
        console.error(e);
        return;
      }
    },
  },
  data() {
    return {
      decks: [],
    };
  },
};
</script>
