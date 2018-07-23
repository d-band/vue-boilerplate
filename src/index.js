import Vue from 'vue';
import ElementUI from 'element-ui';
import { sync } from 'vuex-router-sync';
import './index.scss';
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
