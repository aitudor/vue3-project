import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLib from 'vue3-lib/src/index';



createApp(App).use(router).use(VueLib).mount('#app')
