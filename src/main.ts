import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLib from 'vue3-lib/src/index';



const app = createApp(App);
app.use(router);
app.use(VueLib);
app.mount('#app');
