import axios from 'axios';

const api = axios.create();

// eslint-disable-next-line import/prefer-default-export
export const DevUserApi = {
  createUser: (payload) => api.post('/api/v1/members/signup/', payload),
  getUser: (id) => api.get(`/api/v1/members/${id}`, { responseType: 'json' }),
  patchUser: (id, payload) => api.patch(`/api/v1/members/${id}`, payload),
  // putFavorite: (payload) => api.put('/users', payload),
  // removeFavorite: (id) => api.delete(`/users/${id}`),
};

// json-server --watch db.json --port 5000
