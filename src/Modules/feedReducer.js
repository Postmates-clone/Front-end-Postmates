export const FEED_SET_LOADING = 'FEED_SET_LOADING';
export const FEED_HAS_ERROR = 'FEED_HAS_ERROR';
export const FEED_SET_DATA = 'FEED_SET_DATA';
export const FEED_DETAIL_SET_DATA = 'FEED_DETAIL_SET_DATA';

const initialState = {
  stores: [],
  store: {},
  status: 'idle',
};

export default function feedReducer(state = initialState, action) {
  switch (action.type) {
    case FEED_SET_LOADING:
      return { ...state, status: 'loading' };
    case FEED_HAS_ERROR:
      return { ...state, status: 'error' };
    case FEED_SET_DATA:
      return {
        ...state,
        stores: action.payload,
        status: 'completed',
      };
    case FEED_DETAIL_SET_DATA:
      return { ...state, store: action.payload, status: 'completed' };
    default:
      return state;
  }
}
