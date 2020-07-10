import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com',
  // https://cors-anywhere.herokuapp.com/
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Expose-Headers': 'Content-Type',
  //   'X-Requested-With': 'XMLHttpRequest',
  // },
});
const API_KEY = process.env.REACT_APP_GEOCODE_API_KEY;

// eslint-disable-next-line import/prefer-default-export
export const geocode = {
  getGeocode: (address) => {
    console.log('get geocode', address);
    return api.get(`/maps/api/geocode/json?address=${address}&key=${API_KEY}`);
  },
  getPlace: (input) => {
    return api.get(
      `/maps/api/place/autocomplete/json?input=${input}&key=${API_KEY}`,
    );
  },
};
