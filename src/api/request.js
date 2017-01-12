import qs from 'qs';
import axios from 'axios';

const HOST = '';
const request = {};

function handle(req) {
  return req.then(res => Promise.resolve(res.data)).catch((err) => {
    const data = err.response && err.response.data;
    if (data && data.message) {
      return Promise.reject(data);
    }
    return Promise.reject({
      status: 500,
      message: 'System error'
    });
  });
}

['get', 'delete', 'head'].forEach((method) => {
  request[method] = (url, data, config) => {
    const uri = `${HOST + url}?${qs.stringify(data)}`;
    const req = axios[method](uri, config);
    return handle(req);
  };
});
['post', 'put', 'patch'].forEach((method) => {
  request[method] = (url, data, config) => {
    const uri = HOST + url;
    const req = axios[method](uri, data, config);
    return handle(req);
  };
});

export default request;
