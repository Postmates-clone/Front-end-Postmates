import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

// eslint-disable-next-line import/prefer-default-export
export const DevUserApi = {
  createUser: (payload) => api.post('/users', payload),
  getUser: () => api.get('/users', { responseType: 'json' }),
  patchUser: (payload) => api.patch('/users', payload),
  putFavorite: (payload) => api.put('/users', payload),
  removeFavorite: (id) => api.delete(`/users/${id}`),
};

// json-server --watch db.json --port 5000
