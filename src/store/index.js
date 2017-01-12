import Vue from 'vue';
import Vuex from 'vuex';
import request from '../api/request';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: []
  },
  actions: {
    async loadUsers({ commit }) {
      const users = await request.get('/demo/users.json');
      commit('loadUsersDone', users);
    }
  },
  mutations: {
    loadUsersDone(state, users) {
      state.users = users;
    }
  }
});

export default store;
