/* eslint-disable no-unused-vars */
// action
const SET_PAGE = 'SET_PAGE';
const OPEN_CATEGORIES = 'SET_CATEGORIES';
const SELECT_SERVICE = 'SELECT_SERVICE';

// Action 생성 함수
export const setPage = (page) => ({ type: SET_PAGE, page });
export const selectService = (service) => ({ type: SELECT_SERVICE, service });
export const openCategories = (isOpen) => ({ type: OPEN_CATEGORIES, isOpen });

// 초기 상태
const initialState = {
  page: '',
  service: 'delivery',
  isOpenCategories: false,
  findAddress: { input: '', data: '' },
  finditem: { input: '', data: '' },
};

export default function MainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case OPEN_CATEGORIES:
      return {
        ...state,
        isOpenCategories: action.isOpen,
      };
    case SELECT_SERVICE:
      return {
        ...state,
        service: action.service,
      };
    default:
      return state;
  }
}
