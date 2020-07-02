import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

// eslint-disable-next-line import/prefer-default-export
export const DevApi = {
  getNearBy: () => api.get('/nearby/', { responseType: 'json' }),
  getOrderBy: () => api.get('/orderby/', { responseType: 'json' }),
  getFavorite: () => api.get('/favorite/', { responseType: 'json' }),
  getInFast: () => api.get('/getinfast/', { responseType: 'json' }),
  getItem: (url) => api.get(`/${url}`, { responseType: 'json' }),
};

// console.log(DevApi.getNearBy());
// json-server --watch db.json --port 5000
