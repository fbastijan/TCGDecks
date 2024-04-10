<template>
  <div class="row mt-5 mx-3">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title display-5">Editor</h5>
          <img
            src="https://placehold.co/150"
            class="rounded-circle mb-2"
            alt=""
          />
          <div>
            <a href="#">change image</a>
          </div>
          <input
            class="form-control my-3"
            type="text"
            placeholder="Deck name"
            aria-label="default input example"
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
                    <input class="form-control" placeholder="Card Name" />
                  </div>
                  <div class="col-auto">
                    <button class="btn btn-primary mb-3">Dodaj na listu</button>
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
                    <input class="form-control" placeholder="Card Name" />
                  </div>
                  <div class="col-auto">
                    <button class="btn btn-primary mb-3">Dodaj na listu</button>
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
    <div class="col-lg-8 col-sm-1">
      <div class="card">
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
                <li
                  class="list-group-item d-flex flex-row"
                  v-for="(card, index) in this.MainDeck"
                  :key="index"
                >
                  {{ card }}
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
                <li
                  class="list-group-item d-flex flex-row"
                  v-for="(card, index) in this.Sideboard"
                  :key="index"
                >
                  {{ card }}
                </li>
              </ul>
              <h6 class="card-subtitle mb-2 d-flex flex-row-reverse fw-bold">
                15 Cards
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ScryfallApi } from "@/api.js";

export default {
  components: {},
  data() {
    return {
      editorMain:
        "1 Aclazotz, Deepest Betrayal\n3 Cut Down\n4 Darkslick Shores\n4 Deep-Cavern Bat\n2 Ertai Resurrected\n3 Faerie Mastermind\n1 Gix, Yawgmoth Praetor\n4 Go for the Throat\n3 Preacher of the Schism\n1 Lazav, Wearer of Faces\n4 Make Disappear\n3 Mirrex\n1 Otawara, Soaring City\n1 Preacher of the Schism\n2 Underground River\n2 Sheoldred, the Apocalypse\n4 Spyglass Siren\n1 Takenuma, Abandoned Mire\n2 Underground River\n3 Swamp\n3 Island\n3 Restless Reef\n2 Gix, Yawgmoth Praetor\n3 Shipwreck Marsh",
      editorSide:
        "1 Aclazotz, Deepest Betrayal\n1 Blot Out\n1 Cut Down\n1 Disdainful Stroke\n3 Glistening Deluge\n1 Disdainful Stroke\n2 Spell Pierce\n2 Tishana's Tidebinder\n1 Unlicensed Hearse\n2 Liliana of the Veil",
      MainDeck: [],
      Sideboard: [],
      cities: ["Bangalore", "Chennai", "Cochin", "Delhi", "Kolkata", "Mumbai"],

      value: "",
    };
  },
  async mounted() {
    this.completeList();
    let result = await ScryfallApi.getCardByName("Lightning Bolt");
    console.log(result.data.name);
  },
  methods: {
    completeList() {
      this.MainDeck = this.editorMain.split("\n");
      this.Sideboard = this.editorSide.split("\n");
    },
  },
};
</script>
