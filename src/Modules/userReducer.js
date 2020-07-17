/* eslint-disable no-unused-vars */
import { DevUserApi } from '../Dev/DevUserApi';
import api from '../Utils/LoginApi';

// user 가입 action
const CREATE_USER = 'CREATE_USER';
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

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
export const REMOVE_CART = 'REMOVE_CART';
const REMOVE_CART_SUCCESS = 'REMOVE_CART_SUCCESS';
const REMOVE_CART_ERROR = 'REMOVE_CART_ERROR';

// cart 수정 action
const PATCH_CART = 'REMOVE_CART';
const PATCH_CART_SUCCESS = 'REMOVE_CART_SUCCESS';
const PATCH_CART_ERROR = 'REMOVE_CART_ERROR';

// 희진 login action
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';

// login action 생성 함수
export const loginUsersAsync = (payload) => async (dispatch, state) => {
  dispatch({ type: LOGIN_USER });
  try {
    const { data } = await api.post('/api/v1/members/login/', payload);
    dispatch({ type: LOGIN_USER_SUCCESS, data, email: payload.email });
    localStorage.setItem('token', data.token);
  } catch (e) {
    dispatch({ type: LOGIN_USER_ERROR, error: e });
    localStorage.removeItem('token');
  }
};

// user 가입 action 생성 함수
export const createUsersAsync = (payload) => async (dispatch, state) => {
  dispatch({ type: CREATE_USER });
  try {
    const { data } = await DevUserApi.createUser(payload);
    dispatch({ type: CREATE_USER_SUCCESS, data });
  } catch (e) {
    dispatch({ type: CREATE_USER_ERROR, error: e });
  }
};

// user 정보 취득 action 생성 함수
export const getUsersAsync = () => async (dispatch, state) => {
  dispatch({ type: GET_USER });
  try {
    const { data } = await api.get('/api/v1/members/'); // API 호출 - API 제작 해야 함
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
    orderhistory: [{}, {}], // check out 했던 주문. 구매이력.
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
    case CREATE_USER:
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
    case CREATE_USER_SUCCESS:
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
    case CREATE_USER_ERROR:
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
    case LOGIN_USER:
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
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.data.token,
        isLogin: true,
        userInfo: { ...state.userInfo, email: action.email },
        status: {
          loading: false,
          success: true,
          error: {
            error: false,
            massage: null,
          },
        },
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLogin: false,
        userInfo: {},
        status: {
          loading: false,
          success: false,
          error: {
            error: true,
            massage: action.error,
          },
        },
      };

    case LOGOUT_USER:
      return {
        ...state,
        isLogin: false,
        userInfo: {},
        status: {
          loading: false,
          success: false,
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
