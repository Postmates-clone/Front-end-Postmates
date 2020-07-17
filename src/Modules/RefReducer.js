/* eslint-disable no-unused-vars */

// action
const SET_CATEGORY_REF = 'SET_CATEGORY_REF';
const INIT_CATEGORY_REF = 'INIT_CATEGORY_REF';
const SET_SUBHEADER_REF = 'SET_SUBHEADER_REF';

// Action 생성 함수
export const setCategoryRef = (ref) => ({ type: SET_CATEGORY_REF, ref });
export const initCategoryRef = () => ({ type: INIT_CATEGORY_REF });

// 초기 상태
const initialState = {
  categoryRef: [],
};

export default function MainReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_CATEGORY_REF:
      return {
        ...state,
        categoryRef: [],
      };
    case SET_CATEGORY_REF:
      return {
        ...state,
        categoryRef: [...state.categoryRef, action.ref],
      };
    default:
      return state;
  }
}
