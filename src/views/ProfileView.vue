<template>
  <div class="row">
    <div class="col"></div>
    <div class="col-lg-8 col-sm-12 mt-3">
      <div class="row">
        <div class="col">
          <img
            :src="imgUrl || 'https://placehold.co/200'"
            class="rounded-circle"
            alt="https://placehold.co/200"
          />

          <h2 class="h2">
            {{ displayName }}

            <button class="btn" @click="this.$router.push('profile/editor')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"
                />
              </svg>
            </button>
          </h2>
        </div>
      </div>
      <hr class="hr my-3" />
      <div class="row row-cols-lg-5 row-cols-sm-1">
        <div v-for="(card, index) in this.decks" :key="index" class="mb-3">
          <deck-card :info="card"></deck-card>
        </div>
      </div>
      <button
        v-if="decks.length == limiter"
        @click="getMoreData"
        class="btn btn-primary mb-3 bg-dark more-button"
      >
        Show 10 more
      </button>
    </div>
    <div class="col"></div>
  </div>
</template>
<script>
import DeckCard from "@/components/DeckCard.vue";
import { db } from "@/firebase";
import { getAuth } from "firebase/auth";

import {
  getDocs,
  collection,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

export default {
  components: {
    "deck-card": DeckCard,
  },
  async mounted() {
    this.decks = await this.getAllDecks();
    this.getUserInfo();
  },
  data() {
    return {
      decks: [],
      limiter: 10,
      lastVisible: "",
      imgUrl: "",
      displayName: "",
    };
  },

  methods: {
    async getUserInfo() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;

        if (displayName == null) this.displayName = email;
        else this.displayName = displayName;
        this.imgUrl = photoURL;
        console.log(displayName, email);
      }
    },
    async getMoreData() {
      this.limiter += 10;
      this.decks = await this.getAllDecks();
    },
    async getAllDecks() {
      try {
        const q = query(
          collection(db, "decks"),
          where("userId", "==", localStorage.getItem("userId")),
          orderBy("createdAt", "desc"),
          limit(this.limiter)
        );
        try {
          const querySnapshot = await getDocs(q);
          let helper = [];
          querySnapshot.forEach((doc) => {
            helper.push({ deckId: doc.id, ...doc.data() });
          });
          this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
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
};
</script>
<style>
.more-button:not(:hover) {
  border-color: #eeeeee;
  color: #eeeeee;
}
.more-button:hover {
  background-color: #eeeeee;
  color: #222831;
  border-color: #eeeeee;
}
</style>
