import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import city from './city';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions: {},
  mutations: {},
  modules: {
    user,
    city
  }
});

export default store;
