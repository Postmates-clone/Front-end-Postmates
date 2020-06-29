import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:5000/',
  // https://123.123.123.123/food/?lat=123&lng=456
});

export default Api;
