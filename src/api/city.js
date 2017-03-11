import request from './request';

function list(query) {
  const params = { q: query };
  return request.get('/api/users', params);
}

export default {
  list
};
