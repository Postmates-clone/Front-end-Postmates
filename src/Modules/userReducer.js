import { DevUserApi } from '../Dev/DevUserApi';

// user 정보 취득
const GET_USER = 'GET_USER';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUsersAsync = () => async (dispatch) => {
  dispatch({ type: GET_USER });
  try {
    const { data } = await DevUserApi.getUser(); // API 호출 - API 제작 해야 함
    dispatch({ type: GET_USER_SUCCESS, data }); // 성공
  } catch (e) {
    dispatch({ type: GET_USER_ERROR, error: e }); // 실패
  }
};

const initialState = {
  isLogin: false,
  token: '',
  userInfo: {
    user_name: '',
    email: '',
    phone: '',
    address: '',
    favorite: [], // favorite 은 매장 정보 객체를 배열로 저장
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
    default:
      return state;
  }
}
