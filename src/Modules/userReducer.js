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
const PUT_CART = 'PUT_CART';
const PUT_CART_SUCCESS = 'PUT_CART_SUCCESS';
const PUT_CART_ERROR = 'PUT_CART_ERROR';

// cart 제거 action
const REMOVE_CART = 'REMOVE_CART';
const REMOVE_CART_SUCCESS = 'REMOVE_CART_SUCCESS';
const REMOVE_CART_ERROR = 'REMOVE_CART_ERROR';

// cart 수정 action
const PATCH_CART = 'REMOVE_CART';
const PATCH_CART_SUCCESS = 'REMOVE_CART_SUCCESS';
const PATCH_CART_ERROR = 'REMOVE_CART_ERROR';

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

// user 정보 수정 action 생성 함수
export const patchUsersAsync = (payload) => async (dispatch, state) => {
  dispatch({ type: PATCH_USER });
  try {
    const { data } = await DevUserApi.patchUser(payload); // API 호출 - API 제작 해야 함
    dispatch({ type: PATCH_USER_SUCCESS, data });
  } catch (e) {
    dispatch({ type: PATCH_USER_ERROR, error: e });
  }
};

// favorite 추가 action 생성 함수
export const putFavoriteAsync = (payload) => async (dispatch, state) => {
  dispatch({ type: PUT_FAVORITE });
  try {
    const { data } = await DevUserApi.putFavorite(payload); // API 호출 - API 제작 해야 함
    dispatch({ type: PUT_FAVORITE_SUCCESS, data });
  } catch (e) {
    dispatch({ type: PUT_FAVORITE_ERROR, error: e });
  }
};

// favorite 제거 action 생성 함수
export const removeFavoriteAsync = (id) => async (dispatch, state) => {
  dispatch({ type: REMOVE_FAVORITE });
  try {
    const { data } = await DevUserApi.removeFavorite(id); // API 호출 - API 제작 해야 함
    dispatch({ type: REMOVE_FAVORITE_SUCCESS, data });
  } catch (e) {
    dispatch({ type: REMOVE_FAVORITE_ERROR, error: e });
  }
};

// cart 추가 action 생성 함수
export const putCartAsync = (payload) => async (dispatch, state) => {
  dispatch({ type: PUT_CART });
  try {
    const { data } = await DevUserApi.putCart(payload); // API 호출 - API 제작 해야 함
    dispatch({ type: PUT_CART_SUCCESS, data });
  } catch (e) {
    dispatch({ type: PUT_CART_ERROR, error: e });
  }
};

// cart 제거 action 생성 함수
export const removeCartAsync = (payload) => async (dispatch, state) => {
  dispatch({ type: REMOVE_CART });
  try {
    const { data } = await DevUserApi.removeCart(payload); // API 호출 - API 제작 해야 함
    dispatch({ type: REMOVE_CART_SUCCESS, data });
  } catch (e) {
    dispatch({ type: REMOVE_CART_ERROR, error: e });
  }
};

// cart 수정 action 생성 함수
export const patchCartAsync = (payload) => async (dispatch, state) => {
  dispatch({ type: PATCH_CART });
  try {
    const { data } = await DevUserApi.patchCart(payload); // API 호출 - API 제작 해야 함
    dispatch({ type: PATCH_CART_SUCCESS, data });
  } catch (e) {
    dispatch({ type: PATCH_CART_ERROR, error: e });
  }
};

// 초기 상태
const initialState = {
  isLogin: false,
  token: '',
  userInfo: {
    id: 0,
    username: '',
    email: '',
    phone: '',
    address: '',
    favorite: [], // favorite 은 매장 정보 객체를 배열로 저장
    cart: {
      totalPrice: 0,
      orderList: [], // cart에 담긴 물품 List
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
        userInfo: {
          ...state.userInfo,
          favorite: [...action.data],
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
    case REMOVE_FAVORITE:
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
    case REMOVE_FAVORITE_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          favorite: [...action.data],
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
    case REMOVE_FAVORITE_ERROR:
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
    case PUT_CART:
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
    case PUT_CART_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          cart: {
            ...state.userInfo.cart,
            orderList: [...action.data],
          },
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
    case PUT_CART_ERROR:
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
    case PATCH_CART:
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
    case PATCH_CART_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          cart: {
            ...state.userInfo.cart,
            orderList: [...action.data],
          },
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
    case PATCH_CART_ERROR:
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
    case REMOVE_CART:
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
    case REMOVE_CART_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          cart: {
            ...state.userInfo.cart,
            orderList: [...action.data],
          },
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
    case REMOVE_CART_ERROR:
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
