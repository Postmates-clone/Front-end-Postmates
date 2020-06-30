/* eslint-disable no-unused-vars */
import { DevUserApi } from '../Dev/DevUserApi';

// user 정보 취득 action
const GET_USER = 'GET_USER';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
const GET_USER_ERROR = 'GET_USER_ERROR';

// user 정보 취득 action 생성 함수
export const getUsersAsync = () => async (dispatch, state) => {
  dispatch({ type: GET_USER });
  try {
    const { data } = await DevUserApi.getUser(); // API 호출 - API 제작 해야 함
    dispatch({ type: GET_USER_SUCCESS, data });
  } catch (e) {
    dispatch({ type: GET_USER_ERROR, error: e });
  }
};

// 초기 상태
const initialState = {};

export default function ItemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
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
    case GET_USER_SUCCESS:
      return {
        ...state,
        userInfo: { ...action.data },
        status: {
          loading: false,
          success: true,
          error: {
            error: false,
            massage: null,
          },
        },
      };
    case GET_USER_ERROR:
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
