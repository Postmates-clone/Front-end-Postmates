import axios from 'axios';

const api = axios.create();
// getNearBy: () => {
//   return api.get('/nearby/', {
//     responseType: 'json',
//     headers: {
//       'access-control-allow-origin': '*',
//     },
//   });
// },
// eslint-disable-next-line import/prefer-default-export
export const DevApi = {
  getNearBy: () => {
    return api.get('/api/v1/feed/nearby?lat=40.6413151&lng=-73.7803278', {
      responseType: 'json',
      headers: {
        'access-control-allow-origin': '*',
      },
    });
  },
  getOrderBy: () => {
    return api.get('/api/v1/feed?category=delivery', {
      responseType: 'json',
      headers: {
        'access-control-allow-origin': '*',
      },
    });
  },
  getFavorite: () => {
    return api.get('/api/v1/feed?category=favorite', {
      responseType: 'json',
      headers: {
        'access-control-allow-origin': '*',
      },
    });
  },
  // getInFast: () => {
  //   return api.get('/api/v1/feed?category=item', {
  //     responseType: 'json',
  //     headers: {
  //       'access-control-allow-origin': '*',
  //     },
  //   });
  // },
  getItem: (url) => {
    return api.get(`/api/v1/store/${url}`, {
      responseType: 'json',
      headers: {
        'access-control-allow-origin': '*',
      },
    });
  },
};

// console.log(DevApi.getNearBy());
// console.log(DevApi.getInFast());

// json-server --watch db.json --port 5000
// json-server --watch mockup.json --port 5000
