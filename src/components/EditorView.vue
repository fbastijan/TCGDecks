<template>
  <div
    class="row mt-5 mx-3"
    v-if="
      (this.playerAndDeck.userId = UserData.currentUserId) &&
      !this.$route.params.id
    "
  >
    <!-- Editor -->
    <div class="col mb-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title display-5">Editor</h5>
          <img
            :src="this.playerAndDeck.imgUrl"
            class="rounded-circle mb-2"
            alt=""
          />
          <div>
            <a href="#" @click="this.show = true">change image</a>
          </div>
          <input
            class="form-control my-3"
            type="text"
            placeholder="Deck name"
            aria-label="default input example"
            v-model="playerAndDeck.deckName"
          />
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-maindeck"
                type="button"
                role="tab"
                aria-controls="nav-maindeck"
                aria-selected="true"
              >
                Main Deck
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Sideboard
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-maindeck"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <!-- Main Deck tab -->
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label d-flex flex-row"
                  >Main Deck</label
                >
                <textarea
                  class="form-control mb-3"
                  v-model="this.editorMain"
                  id="exampleFormControlTextarea1"
                  rows="20"
                ></textarea>
                <div class="row g-3">
                  <div class="col-auto">
                    <auto-complete></auto-complete>
                  </div>
                  <div class="col-2">
                    <input
                      class="form-control"
                      placeholder="Qty"
                      type="number"
                      v-model="copies"
                    />
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn btn-primary mb-3"
                      @click="addToMainList()"
                    >
                      Dodaj na listu
                    </button>
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn btn-primary mb-3"
                      @click="completeList()"
                    >
                      Confirm list
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Sideboard tab -->
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label d-flex flex-row"
                  >Sideboard</label
                >
                <textarea
                  class="form-control mb-3"
                  id="exampleFormControlTextarea1"
                  rows="20"
                  v-model="this.editorSide"
                ></textarea>
                <div class="row g-3">
                  <div class="col-auto">
                    <auto-complete></auto-complete>
                  </div>
                  <div class="col-2">
                    <input
                      class="form-control"
                      placeholder="Qty"
                      type="number"
                      v-model="copies"
                    />
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn btn-primary mb-3"
                      @click="addToSideboardList()"
                    >
                      Dodaj na listu
                    </button>
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn btn-primary mb-3"
                      @click="completeList()"
                    >
                      Confirm list
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-8 col-sm-1 col-md-1">
      <!-- Deck preview -->
      <entire-deck
        :mainDeck="MainDeck"
        :sideboard="Sideboard"
        :deckAndPlayer="playerAndDeck"
      ></entire-deck>
    </div>
    <div>
      <my-upload
        @crop-success="cropSuccess"
        field="img"
        v-model="show"
        :width="100"
        :height="100"
        img-format="png"
        langType="en"
        :noCircle="true"
      ></my-upload>
    </div>
  </div>
</template>
<script>
import InputAutocompleteVue from "@/components/InputAutocomplete.vue";
import { search } from "@/store";
import { ScryfallApi } from "@/api";
import { UserData } from "@/store";
import { db, storage } from "@/firebase";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import EntireDeckCardVue from "@/components/EntireDeckCard.vue";
import myUpload from "vue-image-crop-upload";
import { ref, uploadString } from "firebase/storage";
export default {
  components: {
    "auto-complete": InputAutocompleteVue,
    "entire-deck": EntireDeckCardVue,
    "my-upload": myUpload,
  },
  data() {
    return {
      MainDeck: [],
      Sideboard: [],
      show: false,

      UserData,
      editorMain: "",
      editorSide: "",
      copies: 0,
      search,
      ScryfallApi,
      playerAndDeck: {
        deckName: "",
        playerName: UserData.currentUser,
        imgUrl: this.imgDataUrl || "https://placehold.co/100",
        rating: 0.0,
        keywords: [],
      },
    };
  },

  async mounted() {
    if (this.$route.params.id) {
      await this.getDeck();
      this.reverseParse(this.MainDeck, this.Sideboard);
    }
  },
  methods: {
    async reverseParse(main, side) {
      main.forEach((element) => {
        this.editorMain =
          this.editorMain + element.qty + " " + element.name + "\n";
      });
      side.forEach((element) => {
        this.editorSide =
          this.editorSide + element.qty + " " + element.name + "\n";
      });
    },
    async getDeck() {
      try {
        const docRef = doc(db, "decks", this.$route.params.id);
        const docSnap = await getDoc(docRef);
        let deck = docSnap.data();

        this.MainDeck = deck.mainDeck;
        this.Sideboard = deck.sideboard;
        this.playerAndDeck = deck.playerAndDeck;
      } catch (e) {
        console.error(e);
        return;
      }
    },
    async cropSuccess(imgDataUrl) {
      this.playerAndDeck.imgUrl = imgDataUrl;
    },

    async uploadImage(deckId) {
      const storageRef = ref(storage, "deckIcons/" + deckId);
      try {
        await uploadString(storageRef, this.playerAndDeck.imgUrl, "data_url");
      } catch (e) {
        console.log(e);
      }
    },
    async uploadDeck() {
      if (!this.playerAndDeck.deckName) alert("Moraš nazvati deck");
      else {
        try {
          const deckRef = doc(db, "decks", this.$route.params.id);
          await updateDoc(deckRef, {
            userId: UserData.currentUserId.value,
            mainDeck: this.MainDeck,
            sideboard: this.Sideboard,
            playerAndDeck: this.playerAndDeck,
            createdAt: new Date(),
          });
          this.uploadImage(deckRef.id);
          this.$router.push("/deck/" + deckRef.id);
        } catch {
          try {
            let keywordTokens = this.playerAndDeck.deckName
              .toLowerCase()
              .split(" ");
            this.playerAndDeck.keywords.push(...keywordTokens);
            const docRef = await addDoc(collection(db, "decks"), {
              userId: UserData.currentUserId.value,
              mainDeck: this.MainDeck,
              sideboard: this.Sideboard,
              playerAndDeck: this.playerAndDeck,
              createdAt: new Date(),
            });
            this.uploadImage(docRef.id);
            this.$router.push("/deck/" + docRef.id);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }
      }
    },
    async getList() {
      let res = await ScryfallApi.searchCollection(this.editorMain);
      this.MainDeck = res.data;
    },
    async completeList() {
      this.MainDeck = this.editorMain
        .split("\n")
        .filter((el) => el.trim() !== "");
      this.MainDeck = this.MainDeck.map((card) => {
        const firstSpaceIndex = card.indexOf(" ");
        const qty = card.substring(0, firstSpaceIndex);
        const name = card.substring(firstSpaceIndex + 1);
        let tokens = name.toLowerCase().split(" ");
        this.playerAndDeck.keywords.push(...tokens);

        return { qty: qty, name: name };
      });
      this.Sideboard = this.editorSide
        .split("\n")
        .filter((el) => el.trim() !== "");
      this.Sideboard = this.Sideboard.map((card) => {
        const firstSpaceIndex = card.indexOf(" ");
        const qty = card.substring(0, firstSpaceIndex);
        const name = card.substring(firstSpaceIndex + 1);
        let tokens = name.toLowerCase().split(" ");
        this.playerAndDeck.keywords.push(...tokens);
        return { qty: qty, name: name };
      });

      await this.uploadDeck();
    },
    addToMainList() {
      this.editorMain =
        this.editorMain + "\n" + this.copies + " " + this.search;

      this.copies = 0;
      this.search = "";
    },
    addToSideboardList() {
      this.editorSide =
        this.editorSide + "\n" + this.copies + " " + this.search;
      this.copies = 0;
      this.search = "";
    },
  },
};
</script>
<style scoped>
.myoption:hover {
  background-color: #0d6efd !important;
  color: white;
}
</style>
