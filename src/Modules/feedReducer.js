import { DevApi } from '../Dev/DevApi';
import {
  createPromiseThunk,
  reducerUtils,
  handlerAsyncActions,
} from '../lib/asyncUtils';

const GET_NEAR = 'GET_NEAR';
const GET_NEAR_SUCCESS = 'GET_NEAR_SUCCESS';
const GET_NEAR_ERROR = 'GET_NEAR_ERROR';

const GET_ORDER = 'GET_ORDER';
const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

const GET_FAV = 'GET_FAV';
const GET_FAV_SUCCESS = 'GET_FAV_SUCCESS';
const GET_FAV_ERROR = 'GET_FAV_ERROR';

const GET_FAST = 'GET_FAST';
const GET_FAST_SUCCESS = 'GET_FAST_SUCCESS';
const GET_FAST_ERROR = 'GET_FAST_ERROR';

export const getNearBy = createPromiseThunk(GET_NEAR, DevApi.getNearBy);
export const getOrderBy = createPromiseThunk(GET_ORDER, DevApi.getOrderBy);
export const getFavorite = createPromiseThunk(GET_FAV, DevApi.getFavorite);
export const getInFast = createPromiseThunk(GET_FAST, DevApi.getInFast);

const initialState = {
  nearby: reducerUtils.initial(),
  orderby: reducerUtils.initial(),
  favorite: reducerUtils.initial(),
  getinfast: reducerUtils.initial(),
};

export default function FeedReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEAR:
    case GET_NEAR_SUCCESS:
    case GET_NEAR_ERROR:
      return handlerAsyncActions(GET_NEAR, 'nearby')(state, action);

    case GET_ORDER:
    case GET_ORDER_SUCCESS:
    case GET_ORDER_ERROR:
      return handlerAsyncActions(GET_ORDER, 'orderby')(state, action);

    case GET_FAV:
    case GET_FAV_SUCCESS:
    case GET_FAV_ERROR:
      return handlerAsyncActions(GET_FAV, 'favorite')(state, action);

    case GET_FAST:
    case GET_FAST_SUCCESS:
    case GET_FAST_ERROR:
      return handlerAsyncActions(GET_FAST, 'getinfast')(state, action);
    default:
      return state;
  }
}
