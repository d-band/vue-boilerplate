import API from '../api/user';

export default {
  namespace: 'user',
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
      commit('user/getListDone', {
        list: data,
        total: parseInt(headers['x-total-count'], 10),
        params
      });
    },
    async reload({ dispatch, state }) {
      dispatch('user/getList', state.params);
    },
    async remove({ dispatch }, id) {
      await API.remove(id);
      await dispatch('user/reload');
    },
    async create({ dispatch }, params) {
      await API.create(params);
      await dispatch('user/reload');
    },
    async update({ dispatch }, { id, data }) {
      await API.update(id, data);
      await dispatch('user/reload');
    },
    async upsert({ dispatch }, params) {
      const { id } = params;
      if (id) {
        await dispatch('user/update', { id, data: params });
      } else {
        await dispatch('user/create', params);
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
