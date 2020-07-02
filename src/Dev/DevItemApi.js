import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

// eslint-disable-next-line import/prefer-default-export
export const DevApi = {
  getItem: (url) => api.get(`/${url}`, { responseType: 'json' }),
};

// json-server --watch mockup.json --port 5000
