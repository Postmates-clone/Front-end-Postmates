/* eslint-disable no-unused-vars */
import { DevUserApi } from '../Dev/DevUserApi';

// user 정보 취득 action
const GET_USER = 'GET_USER';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
const GET_USER_ERROR = 'GET_USER_ERROR';

// user 정보 변경 action
const PATCH_USER = 'PATCH_USER';
const PATCH_USER_SUCCESS = 'PATCH_USER_SUCCESS';
const PATCH_USER_ERROR = 'PATCH_USER_ERROR';

// favorite 추가 action
const PUT_FAVORITE = 'PUT_FAVORITE';
const PUT_FAVORITE_SUCCESS = 'PUT_FAVORITE_SUCCESS';
const PUT_FAVORITE_ERROR = 'PUT_FAVORITE_ERROR';

// favorite 제거 action
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const REMOVE_FAVORITE_SUCCESS = 'REMOVE_FAVORITE_SUCCESS';
const REMOVE_FAVORITE_ERROR = 'REMOVE_FAVORITE_ERROR';

// // cart 추가 action
// const PUT_CART = 'PUT_CART';
// const PUT_CART_SUCCESS = 'PUT_CART_SUCCESS';
// const PUT_CART_ERROR = 'PUT_CART_ERROR';

// // cart 제거 action
// const REMOVE_CART = 'REMOVE_CART';
// const REMOVE_SUCCESS = 'REMOVE_SUCCESS';
// const REMOVE_ERROR = 'REMOVE_ERROR';

// // cart 수정 action
// const PATCH_CART = 'REMOVE_CART';
// const PATCH_SUCCESS = 'REMOVE_SUCCESS';
// const PATCH_ERROR = 'REMOVE_ERROR';

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

// favorite 추가 action 생성 함수
export const putFavoriteAsync = (payload) => async (dispatch, state) => {
  dispatch({ type: PUT_FAVORITE });
  try {
    const { data } = await DevUserApi.getUser(payload); // API 호출 - API 제작 해야 함
    dispatch({ type: PUT_FAVORITE_SUCCESS, data });
  } catch (e) {
    dispatch({ type: PUT_FAVORITE_ERROR, error: e });
  }
};

// favorite 제거 action 생성 함수
export const removeFavoriteAsync = (id) => async (dispatch, state) => {
  dispatch({ type: REMOVE_FAVORITE });
  try {
    const { data } = await DevUserApi.getUser(id); // API 호출 - API 제작 해야 함
    dispatch({ type: REMOVE_FAVORITE_SUCCESS, data });
  } catch (e) {
    dispatch({ type: REMOVE_FAVORITE_ERROR, error: e });
  }
};

const initialState = {
  isLogin: false,
  token: '',
  userInfo: {
    id: 0,
    user_name: '',
    email: '',
    phone: '',
    address: '',
    favorite: [], // favorite 은 매장 정보 객체를 배열로 저장
    cart: {
      totalPrice: 0,
      orderList: [],
    },
    history: [], // 구매이력
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

export default function userReducer(state = initialState, action) {
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
    case PATCH_USER:
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
    case PATCH_USER_SUCCESS:
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
    case PATCH_USER_ERROR:
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
    case PUT_FAVORITE:
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
    case PUT_FAVORITE_SUCCESS:
      return {
        ...state,
        userInfo: {},
        status: {
          loading: false,
          success: true,
          error: {
            error: false,
            massage: null,
          },
        },
      };
    case PUT_FAVORITE_ERROR:
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
