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
  async searchCollection(deckListString) {
    const parsed = deckListString.split("\n").filter((el) => el.trim() !== ""); // Filter out empty lines
    const identifiers = parsed.map((name) => {
      const splitName = name.split(" "); // Split the name by space
      const lastNamePart = splitName.slice(1).join(" "); // Take only the part after the first space
      return { name: lastNamePart }; // Return an object with the modified name
    });
    let response = await Service.post("/cards/collection", {
      identifiers: identifiers,
    });
    return response.data;
  },
};
export { ScryfallApi };
