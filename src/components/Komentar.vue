<template>
  <div class="list-group-item" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <a href="#" class="active text-decoration-none"
        ><h5 class="mb-1">{{ info.name }}</h5>
      </a>
      <small>{{ info.date }}</small>
    </div>
    <p class="mb-1 d-flex flex-row">Rating: {{ info.rating }}</p>
    <p class="mb-1 text-start">
      {{ info.komentar }}
    </p>
  </div>
</template>
<script>
export default {
  name: "komentar-comp",

  props: ["info"],
};
</script>
