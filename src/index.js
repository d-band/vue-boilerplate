import Vue from 'vue';
import ElementUI from 'element-ui';
import { sync } from 'vuex-router-sync';
import 'cd-themify-icons/index.css';
import '../theme/index.css';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(ElementUI);

sync(store, router);

const app = new Vue({
  router,
  store,
  ...App
});

app.$mount('#app');
