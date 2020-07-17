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
// http://13.209.22.4:8001/api/v1/feed?lat=40.7484445&lng=-73.9878531&filter=favorite

export const DevApi = {
  getNearBy: (page, lat, lng) => {
    // console.log('nearby async', page, lat, lng);
    return api.get(`/api/v1/feed?lat=${lat}&lng=${lng}&page=${page}`, {
      responseType: 'json',
      headers: {
        'access-control-allow-origin': '*',
      },
    });
  },
  getOrderBy: (lat, lng) => {
    return api.get(`/api/v1/feed?lat=${lat}5&lng=${lng}&filter=delivery`, {
      responseType: 'json',
      headers: {
        'access-control-allow-origin': '*',
      },
    });
  },
  getFavorite: (lat, lng) => {
    return api.get(`/api/v1/feed?lat=${lat}&lng=${lng}&filter=favorite`, {
      responseType: 'json',
      headers: {
        'access-control-allow-origin': '*',
      },
    });
  },
  getInFast: (lat, lng) => {
    return api.get(`/api/v1/feed?lat=${lat}&lng=${lng}&filter=time`, {
      responseType: 'json',
      headers: {
        'access-control-allow-origin': '*',
      },
    });
  },
  getItem: (url) => {
    return api.get(`/api/v1/store/${url}`, {
      responseType: 'json',
      headers: {
        'access-control-allow-origin': '*',
      },
    });
  },
  postDelivery: (payload) => {
    console.log('req data', payload);
    return api.post('/api/v1/deliveries/', payload, {
      responseType: 'json',
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`,
      },
    });
  },
  getDelivery: () => {
    return api.get('/api/v1/deliveries', {
      responseType: 'json',
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`,
      },
    });
  },
};

// console.log(DevApi.getNearBy());
// console.log(DevApi.getInFast());

// json-server --watch db.json --port 5000
// json-server --watch mockup.json --port 5000
