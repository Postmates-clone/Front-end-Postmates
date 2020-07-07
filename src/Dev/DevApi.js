import axios from 'axios';

const api = axios.create({
  baseURL: '/api/v1/feed',
});

// eslint-disable-next-line import/prefer-default-export
export const DevApi = {
  getNearBy: (page) => {
    return api.get(`/nearby/?city=San Francisco&page=${page}`, {
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
  getItem: (url) => api.get(`/detail?id=${url}`, { responseType: 'json' }),
};

// console.log(DevApi.getNearBy());
// console.log(DevApi.getInFast());

// json-server --watch db.json --port 5000
// json-server --watch mockup.json --port 5000
