import axios from 'axios';

const api = axios.create({
  baseURL: '/api/v1/feed',
});

// eslint-disable-next-line import/prefer-default-export
export const DevApi = {
  getNearBy: () => {
    return api.get('/nearby/?city=San Francisco&page=1', {
      responseType: 'json',
    });
  },
  getOrderBy: () => {
    return api.get('?category=delivery&city=San Francisco', {
      responseType: 'json',
    });
  },
  getFavorite: () => {
    return api.get('?category=favorite&city=San Francisco', {
      responseType: 'json',
    });
  },
  getInFast: () => {
    return api.get('?category=time&city=San Francisco', {
      responseType: 'json',
    });
  },
  getItem: (id) => api.get(`/detail?id=${id}`, { responseType: 'json' }),
};

// console.log(DevApi.getNearBy());
// console.log(DevApi.getInFast());

// json-server --watch db.json --port 5000
// json-server --watch mockup.json --port 5000
