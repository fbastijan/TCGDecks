import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import your router configuration
import StarRating from "vue-star-rating";
const app = createApp(App);
app.component("star-rating", StarRating);
app.use(router); // Use Vue Router

app.mount("#app");
