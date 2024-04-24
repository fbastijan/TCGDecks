<template>
  <div class="col">
    <div class="card">
      <img
        :src="this.info.playerAndDeck.imgUrl"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <a class="text-decoration-none" href="#"
          ><RouterLink :to="'/deck/' + this.info.deckId">
            {{ this.info.playerAndDeck.deckName }}</RouterLink
          ></a
        >
        <p>
          Rating:
          {{ info.playerAndDeck.rating / info.playerAndDeck.ratingCount }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      imgUrl:
        "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/b/b5/Raffine.jpg/revision/latest/scale-to-width-down/807?cb=20220617021534",
    };
  },
};
</script>

<style></style>
