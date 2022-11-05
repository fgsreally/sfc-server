import axios from "axios";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { initCtx } from "sfc-server";
initCtx(
  axios.create({
    baseURL: "http://localhost:8080",
    timeout: 1000,
  })
);
createApp(App).mount("#app");
