<template>
  <div>
    <input
      class="form-control"
      placeholder="Card Name"
      v-model="search"
      @blur="handleBlur"
    />
    <select
      style="position: absolute; z-index: 3; width: auto"
      class="form-select"
      multiple
      aria-label="multiple select example"
      v-if="autoCompleteList.length > 0"
    >
      <option
        class="myoption"
        v-for="(card, index) in autoCompleteList"
        :key="index"
        :value="card"
        @click="changeInput(card)"
      >
        {{ card }}
      </option>
    </select>
  </div>
</template>
<script>
import { ScryfallApi } from "@/api";
export default {
  data() {
    return {
      autoCompleteList: [],
      search: "",
    };

    7;
  },
  methods: {
    changeInputMain(any) {
      this.search = any;
    },
    handleBlur() {
      setTimeout(() => {
        this.autoCompleteList = [];
      }, 100);
    },
  },
  watch: {
    search: async function (value) {
      // binding this to the data value in the email input

      this.searchMainDeck = value;
      let result = await ScryfallApi.getListofCardNames(value);
      this.autoCompleteList = result.data.data;
    },
  },
};
</script>
