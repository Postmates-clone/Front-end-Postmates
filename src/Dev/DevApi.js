/* eslint-disable import/prefer-default-export */
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

// '/api/v1/feed/nearby?lat=40.6413151&lng=-73.7803278'
// http://13.209.22.4:8001/api/v1/feed/?category=favorite&page=2

export const DevApi = {
  getNearBy: (page) => {
    return api.get(
      `/api/v1/feed/nearby?lat=40.6413151&lng=-73.7803278&page=${page}`,
      {
        responseType: 'json',
        headers: {
          'access-control-allow-origin': '*',
        },
      },
    );
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
