/* eslint-disable no-unused-vars */
import { DevApi } from '../Dev/DevApi';

// store 정보 취득 action
const GET_STORE = 'GET_STORE';
const GET_STORE_SUCCESS = 'GET_STORE_SUCCESS';
const GET_STORE_ERROR = 'GET_STORE_ERROR';

// user 정보 취득 action 생성 함수
export const getStoreAsync = (id) => async (dispatch, state) => {
  dispatch({ type: GET_STORE });
  try {
    const { data } = await DevApi.getItem(id); // API 호출 - API 제작 해야 함
    dispatch({ type: GET_STORE_SUCCESS, data });
    localStorage.setItem('store-lat', data.lat);
    localStorage.setItem('store-lng', data.lng);
  } catch (e) {
    dispatch({ type: GET_STORE_ERROR, error: e });
  }
};

// 초기 상태
const initialState = {
  store: {
    address: '',
    badges: [],
    city: '',
    delivery_fee: 0,
    delivery_time: '',
    description: '',
    estimated_prep_time: 0,
    food_type: '',
    id: 0,
    is_delivery: true,
    is_partner: true,
    is_pickup: false,
    lat: 0,
    lng: 0,
    all_menus: [],
    name: '',
    open_hour: {},
    store_img: '',
  },
  status: {
    loading: false,
    success: true,
    error: {
      error: false,
      massage: null,
    },
  },
};

export default function ItemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STORE:
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
    case GET_STORE_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        store: { ...action.data },
        status: {
          loading: false,
          success: true,
          error: {
            error: false,
            massage: null,
          },
        },
      };
    case GET_STORE_ERROR:
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
