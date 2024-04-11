import axios from "axios";
let Service = axios.create({
  baseURL: "https://api.scryfall.com",
  timeout: 10000000,
});

const ScryfallApi = {
  async getCardByName(name) {
    let response = await Service.get("/cards/named", {
      params: { fuzzy: name },
    });
    return response;
  },
  async getListofCardNames(anyString) {
    let response = await Service.get("/cards/autocomplete", {
      params: { q: anyString },
    });
    return response;
  },
};
export { ScryfallApi };
