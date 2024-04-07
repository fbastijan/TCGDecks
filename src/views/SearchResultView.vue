<template>
  <div class="row row-cols-lg-5 row-cols-sm-1 mt-5 mx-3">
    <div v-for="(card, index) in this.decks" :key="index" class="mb-3">
      <deck-card :info="card"></deck-card>
    </div>
  </div>
</template>
<script>
import DeckCard from "@/components/DeckCard.vue";
export default {
  components: {
    DeckCard,
  },
  data() {
    return {
      decks: [
        {
          imgUrl:
            "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/b/b5/Raffine.jpg/revision/latest/scale-to-width-down/807?cb=20220617021534",
          name: "afasfafa",
          rating: 4.49,
          deckId: "1",
        },
        {
          imgUrl:
            "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/b/b5/Raffine.jpg/revision/latest/scale-to-width-down/807?cb=20220617021534",
          name: "afasfafa",
          rating: 4.49,
          deckId: "1",
        },
        {
          imgUrl:
            "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/b/b5/Raffine.jpg/revision/latest/scale-to-width-down/807?cb=20220617021534",
          name: "afasfafa",
          rating: 4.49,
          deckId: "1",
        },
        {
          imgUrl:
            "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/b/b5/Raffine.jpg/revision/latest/scale-to-width-down/807?cb=20220617021534",
          name: "afasfafa",
          rating: 4.49,
          deckId: "1",
        },
        {
          imgUrl:
            "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/b/b5/Raffine.jpg/revision/latest/scale-to-width-down/807?cb=20220617021534",
          name: "afasfafa",
          rating: 4.49,
          deckId: "1",
        },
        {
          imgUrl:
            "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/b/b5/Raffine.jpg/revision/latest/scale-to-width-down/807?cb=20220617021534",
          name: "afasfafa",
          rating: 4.49,
          deckId: "1",
        },
        {
          imgUrl:
            "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/b/b5/Raffine.jpg/revision/latest/scale-to-width-down/807?cb=20220617021534",
          name: "afasfafa",
          rating: 4.49,
          deckId: "1",
        },
      ],
    };
  },
};
</script>
