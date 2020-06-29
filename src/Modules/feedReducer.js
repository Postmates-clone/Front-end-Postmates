import Api from '../Utils/feedApi';
import { createPromiseThunk, reducerUtils } from '../lib/asyncUtils';

// stores 조회하기
const GET_STORES = 'GET_STORES';
const GET_STORES_SUCCESS = 'GET_STORES_SUCCESS';
const GET_STORES_ERROR = 'GET_STORES_ERROR';

// store individual 조회하기
// const GET_STORE = 'GET_STORE';
// const GET_STORE_SUCCESS = 'GET_STORE_SUCCESS';
// const GET_STOR_ERROR = 'GET_STORE_ERROR';

export const getStores = createPromiseThunk(GET_STORES, Api.getStores);
// export const getStores = () => async (dispatch) => {
//   dispatch({ type: 'GET_STORES' });
//   try {
//     const storeList = await Api.get('/place');
//     console.log('GET_STORES', storeList);
//     dispatch({ type: GET_STORES_SUCCESS, storeList });
//   } catch (e) {
//     dispatch({ type: GET_STORES_ERROR, error: e });
//   }
// };

const initialState = {
  stores: reducerUtils.initial(),
};

export default function feedReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STORES:
      return {
        ...state,
        stores: reducerUtils.loading(),
      };
    case GET_STORES_SUCCESS:
      return {
        ...state,
        stores: reducerUtils.success(action.payload),
      };
    case GET_STORES_ERROR:
      return {
        ...state,
        stores: reducerUtils.error(action.error),
      };
    default:
      return state;
  }
}

// export const FEED_SET_LOADING = 'FEED_SET_LOADING';
// export const FEED_HAS_ERROR = 'FEED_HAS_ERROR';
// export const FEED_SET_DATA = 'FEED_SET_DATA';
// export const FEED_DETAIL_SET_DATA = 'FEED_DETAIL_SET_DATA';

// const initialState = {
//   stores: [],
//   store: {},
//   status: 'idle',
// };

// export default function feedReducer(state = initialState, action) {
//   switch (action.type) {
//     case FEED_SET_LOADING:
//       return { ...state, status: 'loading' };
//     case FEED_HAS_ERROR:
//       return { ...state, status: 'error' };
//     case FEED_SET_DATA:
//       return {
//         ...state,
//         stores: action.payload,
//         status: 'completed',
//       };
//     case FEED_DETAIL_SET_DATA:
//       return { ...state, store: action.payload, status: 'completed' };
//     default:
//       return state;
//   }
// }
