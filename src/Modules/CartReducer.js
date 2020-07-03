/* eslint-disable spaced-comment */
import * as optionsApi from '../Dev/DevItemOption';

//액션타입
const GET_OPTIONS_LOADING = 'GET_OPTIONS_LOADING';
const GET_OPTIONS_SUCCESS = 'GET_OPTIONS_SUCCESS';
const GET_OPTIONS_ERROR = 'GET_OPTIONS_ERROR';

//thunk 생성함수
export const getOptions = () => async (dispatch) => {
  dispatch({ type: GET_OPTIONS_LOADING });

  try {
    const options = await optionsApi.getOptions();
    dispatch({ type: GET_OPTIONS_SUCCESS }, options);
  } catch (e) {
    dispatch({ type: GET_OPTIONS_ERROR, error: e });
  }
};

//초기상태
const initialState = {
  cart: [],
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OPTIONS_LOADING:
      return {
        ...state,
        options: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_OPTIONS_SUCCESS:
      return {
        ...state,
        options: {
          loading: false,
          data: action.options,
          error: null,
        },
      };
    case GET_OPTIONS_ERROR:
      return {
        ...state,
        options: {
          loading: true,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
