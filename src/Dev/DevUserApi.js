import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

// eslint-disable-next-line import/prefer-default-export
export const DevUserApi = {
  getUser: () => api.get('/user', { responseType: 'json' }),
};

// json-server --watch db.json --port 5000
