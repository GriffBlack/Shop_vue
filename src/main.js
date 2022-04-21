import { createApp } from 'vue'
// import { store } from 'vuex';
import App from './App.vue'
import store from './vuex/store.js'
// import './assets/styles/style.scss'


createApp(App).use(store).mount('#app');
