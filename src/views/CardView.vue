<template>
  <div class="row my-3">
    <div class="col"></div>
    <div class="col-8 card shadow px-5 pb-5">
      <div
        class="row mt-3 row-cols-sm-1 row-cols-1 row-cols-md-2 row-cols-lg-2"
      >
        <div class="col">
          <img
            :src="this.details.image_uris.normal"
            alt="aaaaaa"
            class="img-fluid mt-3"
            v-if="this.details.image_uris"
          />
          <img
            :src="this.details.card_faces[0].image_uris.normal"
            alt="aaaaaa"
            class="img-fluid mt-3"
            href="#"
            @click="flipped = true"
            v-if="this.details.card_faces && !this.flipped"
          />
          <img
            @click="flipped = false"
            :src="this.details.card_faces[1].image_uris.normal"
            alt="aaaaaa"
            href="#"
            class="img-fluid mt-3"
            v-if="this.details.card_faces && this.flipped"
          />
        </div>
        <div class="col">
          <div class="d-flex flex-row">
            <h2 class="">{{ this.details.name }}</h2>
          </div>
          <div>
            <p class="d-flex flex row">{{ this.details.type_line }}</p>
          </div>
          <hr class="hr" />
          <div>
            <p class="d-flex flex row" v-if="this.details.oracle_text">
              {{ this.details.oracle_text }}
            </p>
            <p
              class="d-flex flex row"
              v-if="this.details.card_faces && !this.flipped"
            >
              {{ this.details.card_faces[0].oracle_text }}
            </p>
            <p
              class="d-flex flex row"
              v-if="this.details.card_faces && this.flipped"
            >
              {{ this.details.card_faces[1].oracle_text }}
            </p>
          </div>
          <hr class="hr" />
          <p class="d-flex flex row">Set: {{ this.details.set_name }}</p>
          <p class="d-flex flex row">Raririty: {{ this.details.rarity }}</p>
          <hr class="hr" />
          <ul class="row row-cols-lg-2 row-cols-1">
            <li
              v-for="(value, key) in this.legalities"
              :key="key"
              class="col d-flex flex row"
            >
              {{ key }}: {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col"></div>
  </div>
</template>
<script>
import { ScryfallApi } from "@/api";
export default {
  methods: {},
  data() {
    return {
      details: {
        image_uris: {
          normal: "",
        },
      },
      legalities: {},
      flipped: false,
    };
  },
  async mounted() {
    this.details = await ScryfallApi.getCardByName(this.$route.params.name);
    this.details = this.details.data;
    this.legalities = this.details.legalities;
    console.log(this.details);
  },
};
</script>
