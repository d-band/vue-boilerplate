import API from '../api/user';

export default {
  namespaced: true,
  state: {
    list: [],
    total: null,
    params: null
  },
  getters: {
    list: state => state.list,
    total: state => state.total
  },
  actions: {
    async getList({ commit }, params) {
      const { headers, data } = await API.list(params);
      commit('getListDone', {
        list: data,
        total: parseInt(headers['x-total-count'], 10),
        params
      });
    },
    async reload({ dispatch, state }) {
      dispatch('getList', state.params);
    },
    async remove({ dispatch }, id) {
      await API.remove(id);
      await dispatch('reload');
    },
    async create({ dispatch }, params) {
      await API.create(params);
      await dispatch('reload');
    },
    async update({ dispatch }, { id, data }) {
      await API.update(id, data);
      await dispatch('reload');
    },
    async upsert({ dispatch }, params) {
      const { id } = params;
      if (id) {
        await dispatch('update', { id, data: params });
      } else {
        await dispatch('create', params);
      }
    }
  },
  mutations: {
    getListDone(state, { list, total, params }) {
      state.list = list;
      state.total = total;
      state.params = params;
    }
  }
};
