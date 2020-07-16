/* eslint-disable no-unused-vars */
import { put, takeLatest } from 'redux-saga/effects';
import { withRouter } from 'react-router-dom';
import { geocode } from '../Utils/GeocoderAPI';

// place 정보 취득 action
const GET_PLACE = 'GET_PLACE';
const GET_PLACE_SUCCESS = 'GET_PLACE_SUCCESS';
const GET_PLACE_ERROR = 'GET_PLACE_ERROR';

// geocode 정보 취득 action
const GET_GEOCODE = 'GET_GEOCODE';
const GET_GEOCODE_SUCCESS = 'GET_GEOCODE_SUCCESS';
const GET_GEOCODE_ERROR = 'GET_GEOCODE_ERROR';

// place 정보 취득 action 생성 함수
export const getPlaceAsync = (input) => async (dispatch, state) => {
  dispatch({ type: GET_PLACE });
  try {
    const { data } = await geocode.getPlace(input);
    dispatch({ type: GET_PLACE_SUCCESS, data });
    // console.log(data.predictions[0]);
    // localStorage.setItem('test', '123');
  } catch (e) {
    dispatch({ type: GET_PLACE_ERROR, error: e });
  }
};

// export const getPlace = (input) => ({ type: GET_PLACE, input });

// const getPlaceAsync = (input) => async (dispatch) => {
//   const { data } = await geocode.getPlace(input);
//   try {
//     dispatch({ type: GET_PLACE_SUCCESS, data });
//   } catch (e) {
//     dispatch({ type: GET_PLACE_ERROR, error: e });
//   }
// };

// place 정보 취득 action 생성 함수
export const getGeocodeAsync = (address, history) => async (
  dispatch,
  state,
) => {
  dispatch({ type: GET_GEOCODE });
  try {
    const { data } = await geocode.getGeocode(address);
    dispatch({ type: GET_GEOCODE_SUCCESS, data });
    localStorage.setItem('location-lat', data.results[0].geometry.location.lat);
    localStorage.setItem('location-lng', data.results[0].geometry.location.lng);
    localStorage.setItem(
      'location-city',
      data.results[0].address_components[0].long_name,
    );
    history.push('/feed');
  } catch (e) {
    dispatch({ type: GET_GEOCODE_ERROR, error: e });
  }
};

// function* Place() {
//   yield put(getPlaceAsync());
// }

// export function* PlaceSaga() {
//   yield takeLatest(GET_PLACE, Place);
// }

// 초기 상태
const initialState = {
  place: [],
  geoCode: [],
};

export default function LocationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLACE:
      return {
        ...state,
        status: {
          loading: true,
          success: false,
          error: {
            error: false,
            massage: null,
          },
        },
      };
    case GET_PLACE_SUCCESS:
      return {
        ...state,
        place: action.data.predictions,
        status: {
          loading: false,
          success: true,
          error: {
            error: false,
            massage: null,
          },
        },
      };
    case GET_PLACE_ERROR:
      return {
        ...state,
        status: {
          loading: false,
          success: true,
          error: {
            error: true,
            massage: action.error,
          },
        },
      };
    case GET_GEOCODE:
      return {
        ...state,
        status: {
          loading: true,
          success: false,
          error: {
            error: false,
            massage: null,
          },
        },
      };
    case GET_GEOCODE_SUCCESS:
      return {
        ...state,
        geoCode: action.data.results[0],
        status: {
          loading: false,
          success: true,
          error: {
            error: false,
            massage: null,
          },
        },
      };
    case GET_GEOCODE_ERROR:
      return {
        ...state,
        status: {
          loading: false,
          success: true,
          error: {
            error: true,
            massage: action.error,
          },
        },
      };
    default:
      return state;
  }
}
