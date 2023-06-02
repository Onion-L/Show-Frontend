import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
//pinia 数据持久化处理
pinia.use(piniaPluginPersistedstate);

export default pinia;
