import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

// eslint-disable-next-line import/prefer-default-export
export const DevApi = {
  getNearBy: () => {
    return api.get('/nearby/', {
      responseType: 'json',
      headers: {
        'access-control-allow-origin': '*',
      },
    });
  },
  getOrderBy: () => {
    return api.get('/delivery/', {
      responseType: 'json',
    });
  },
  getFavorite: () => {
    return api.get('/favorite/', {
      responseType: 'json',
    });
  },
  getInFast: () => {
    return api.get('/category/', {
      responseType: 'json',
    });
  },
  getItem: (id) => api.get(`/detail?id=${id}`, { responseType: 'json' }),
};

// console.log(DevApi.getNearBy());
// console.log(DevApi.getInFast());

// json-server --watch db.json --port 5000
// json-server --watch mockup.json --port 5000
