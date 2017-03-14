import request from './request';

function list({ page, size, query }) {
  const params = {
    _page: page,
    _limit: size,
    q: query,
    _sort: 'id',
    _order: 'DESC'
  };
  return request.get('/api/users', params);
}

function remove(id) {
  return request.delete(`/api/users/${id}`);
}

function create(params) {
  return request.post('/api/users', params);
}

function update(id, params) {
  return request.patch(`/api/users/${id}`, params);
}

export default {
  list,
  remove,
  create,
  update
};
