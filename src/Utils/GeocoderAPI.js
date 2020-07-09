import axios from 'axios';

const api = axios.create({
  baseURL: 'https://maps.googleapis.com',
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Expose-Headers': 'Content-Type',
  //   'X-Requested-With': 'XMLHttpRequest',
  // },
});
const API_KEY = process.env.REACT_APP_GEOCODE_API_KEY;

export const geocode = {
  getGeocode: (address) => {
    return api.get(`/maps/api/geocode/json?address=${address}&key=${API_KEY}`, {
      responseType: 'json',
    });
  },
  getPlace: (input) => {
    return api.get(
      `/maps/api/place/autocomplete/json?input=${input}&key=${API_KEY}`,
    );
  },
};

export default geocode;
