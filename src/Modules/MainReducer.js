/* eslint-disable no-unused-vars */
// action
const SET_PAGE = 'SET_PAGE';

// Action 생성 함수
export const setPage = (page) => ({ type: SET_PAGE, page });

// 초기 상태
const initialState = {
  page: '',
  status: {
    loading: false,
    success: true,
    error: {
      error: false,
      massage: null,
    },
  },
};

export default function MainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
}
