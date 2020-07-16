/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create();

// eslint-disable-next-line import/prefer-default-export
export const DevUserApi = {
  createUser: (payload) => api.post('/api/v1/members/signup/', payload),
  getUser: () => {
    return api.get('/api/v1/members/', {
      responseType: 'json',
    });
  },

  patchUser: (id, payload) => api.patch(`/api/v1/members/${id}`, payload),
  // putFavorite: (payload) => api.put('/users', payload),
  // removeFavorite: (id) => api.delete(`/users/${id}`),
};
export const DeliveryApi = {
  createDelivery: () => {
    return api.post('/api/v1/deliveries/', {
      responseType: 'json',
      headers: {
        Authorization:
          'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmZmZkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImZmZmYiLCJleHAiOjE1OTU0MDQ3ODgsImVtYWlsIjoiZmZmZkBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTU5NDc5OTk4OH0._iiHQ3PrFKVxU3xIb7g96Z6cFK8PsBE_4boT2J9qfDU',
      },
    });
  },
  getDelivery: () => {
    return api.get('/api/v1/deliveries/', {
      responseType: 'json',
      headers: {
        Authorization:
          'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmZmZkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImZmZmYiLCJleHAiOjE1OTU0MDQ3ODgsImVtYWlsIjoiZmZmZkBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTU5NDc5OTk4OH0._iiHQ3PrFKVxU3xIb7g96Z6cFK8PsBE_4boT2J9qfDU',
      },
    });
  },
};
// json-server --watch db.json --port 5000
