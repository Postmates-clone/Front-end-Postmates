/* eslint-disable no-unused-vars */
// action
const SET_PAGE = 'SET_PAGE';
const SELECT_SERVICE = 'SELECT_SERVICE';
const CHANGE_SUB_INPUT = 'CHANGE_SUB_INPUT';

// Action 생성 함수
export const setPage = (page) => ({ type: SET_PAGE, page });
export const selectService = (service) => ({ type: SELECT_SERVICE, service });
export const changeSubInput = (value) => ({ type: CHANGE_SUB_INPUT, value });

// 초기 상태
const initialState = {
  page: '',
  service: 'delivery',
  isOpenCategories: false,
  subHeaderInput: '',
};

export default function MainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case SELECT_SERVICE:
      return {
        ...state,
        service: action.service,
      };
    case CHANGE_SUB_INPUT:
      return {
        ...state,
        subHeaderInput: action.value,
      };
    default:
      return state;
  }
}
