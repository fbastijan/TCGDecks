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
      v-if="autoCompleteList.length > 0 && flag"
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
import { search } from "@/store";
export default {
  data() {
    return {
      autoCompleteList: [],
      search,
      flag: true,
    };
  },
  methods: {
    changeInput(any) {
      this.search = any;
      this.autoCompleteList = [];
    },
    handleBlur() {
      setTimeout(() => {
        this.flag = false;
      }, 150); // Delay for a brief moment
    },
  },
  watch: {
    search: async function (value) {
      // binding this to the data value in the email input

      this.search = value;
      let result = await ScryfallApi.getListofCardNames(value);
      this.flag = true;
      this.autoCompleteList = result.data.data;
    },
  },
};
</script>
