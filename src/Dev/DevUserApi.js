/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create();

// eslint-disable-next-line import/prefer-default-export
export const DevUserApi = {
  createUser: (payload) => api.post('/api/v1/members/signup/', payload),
  getUser: () => {
    return api.get('/api/v1/members/', {
      responseType: 'json',
      headers: {
        Authorization:
          'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJ1c2VybmFtZSI6IktlbGx5IiwiZXhwIjoxNTk1MTM4Njc0LCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTU5NDUzMzg3NH0.l6PjIIj4zKABCbKYnCGCGqF1qc2GG8NRtrubSYbY7lY',
      },
    });
  },

  patchUser: (id, payload) => api.patch(`/api/v1/members/${id}`, payload),
  // putFavorite: (payload) => api.put('/users', payload),
  // removeFavorite: (id) => api.delete(`/users/${id}`),
};

// json-server --watch db.json --port 5000
