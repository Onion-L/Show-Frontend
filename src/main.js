import { createApp } from "vue";
import App from "./App.vue";
import 'vant/lib/index.css';
import Vant from 'vant';
import router from './route/router';
import axios from 'axios';
import pinia from "./store/index.js";

// import '../mock/mock';

const app = createApp(App);

app.use(Vant);
app.use(router);
app.use(pinia);
app.config.globalProperties.$axios = axios;

app.mount("#app");
