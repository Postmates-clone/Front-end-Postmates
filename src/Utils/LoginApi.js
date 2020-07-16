/* eslint-disable */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://13.209.22.4:8001',
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `JWT ${localStorage.getItem('token')}`;

  return config;
});

api.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (rej) => {
    if (rej.response) {
      if (rej.response.status === 403) {
        console.log('User Not Found');
      }
      if (rej.response.status === 401) {
        localStorage.removeItem('token');
      }
    }
    return Promise.reject(rej);
  },
);

export default api;
