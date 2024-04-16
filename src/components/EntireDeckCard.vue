<template>
  <div class="card shadow" style="min-height: 100vh">
    <div class="card-body">
      <h5 class="card-title display-5">{{ deckAndPlayer.deckName }}</h5>
      <img :src="deckAndPlayer.imgUrl" class="rounded-circle mb-2" alt="" />
      <h6 class="card-subtitle mb-2 text-muted">
        {{ deckAndPlayer.playerName }}
      </h6>
      <div class="row">
        <div class="col">
          <h5 class="card-title">Main Deck</h5>
          <ul class="list-group list-group-flush my-3">
            <li
              class="list-group-item d-flex flex-row"
              v-for="(card, index) in this.mainDeck"
              :key="index"
            >
              {{ card.qty }} {{ card.name }}
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
              v-for="(card, index) in this.sideboard"
              :key="index"
            >
              {{ card.qty }} {{ card.name }}
            </li>
          </ul>
          <h6 class="card-subtitle mb-2 d-flex flex-row-reverse fw-bold">
            15 Cards
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["mainDeck", "sideboard", "deckAndPlayer"],
};
</script>
