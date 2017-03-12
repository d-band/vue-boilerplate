import request from './request';

function list(query) {
  const params = { q: query };
  return request.get('/api/cities', params);
}

export default {
  list
};
