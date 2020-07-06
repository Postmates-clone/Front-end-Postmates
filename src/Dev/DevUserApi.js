import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

// eslint-disable-next-line import/prefer-default-export
export const DevUserApi = {
  createUser: (payload) => api.post('/users', payload),
  getUser: () => api.get('/user', { responseType: 'json' }),
  patchUser: (payload) => api.patch('/user', payload),
  putFavorite: (payload) => api.put('/user', payload),
  removeFavorite: (id) => api.delete(`/user/${id}`),
};

// json-server --watch db.json --port 5000
