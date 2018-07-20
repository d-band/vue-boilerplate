import qs from 'qs';
import axios from 'axios';

const HOST = '';
const request = {};

function handle(req) {
  return req.catch((err) => {
    const data = err.response && err.response.data;
    if (data && data.message) {
      err.message = data.message;
      return Promise.reject(err);
    }
    err.status = 500;
    err.message = 'System error';
    return Promise.reject(err);
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
