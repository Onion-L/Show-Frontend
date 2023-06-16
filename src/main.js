import { createApp } from "vue";
import App from "./App.vue";
import 'vant/lib/index.css';
import Vant from 'vant';
import router from './route/router';
import pinia from "./store/index.js";

const app = createApp(App);
app.use(Vant);
app.use(router);
app.use(pinia);

app.mount("#app");
