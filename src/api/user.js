import request from './request';

function list({ page, size, query }) {
  const params = { _page: page, _limit: size, q: query };
  return request.get('/api/users', params);
}

function remove(id) {
  return request.delete(`/api/users/${id}`);
}

export default {
  list,
  remove
};
