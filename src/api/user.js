import request from './request';

function list({ page, size, query }) {
  const params = { _page: page, _limit: size, q: query };
  return request.get('/api/users', params);
}

export default {
  list
};
