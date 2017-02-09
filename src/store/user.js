import API from '../api/user';

export default {
  namespace: 'user',
  state: {
    list: [],
    total: null
  },
  getters: {
    list: state => state.list,
    total: state => state.total
  },
  actions: {
    async getList({ commit }, params) {
      const { headers, data } = await API.list(params);
      commit('user/getListDone', {
        list: data,
        total: parseInt(headers['x-total-count'], 10)
      });
    }
  },
  mutations: {
    getListDone(state, { list, total }) {
      state.list = list;
      state.total = total;
    }
  }
};
