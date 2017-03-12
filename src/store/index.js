import Vue from 'vue';
import Vuex from 'vuex';
import { wrapModule } from '../utils';
import user from './user';
import city from './city';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions: {},
  mutations: {},
  modules: {
    ...wrapModule(user),
    ...wrapModule(city)
  }
});

export default store;
