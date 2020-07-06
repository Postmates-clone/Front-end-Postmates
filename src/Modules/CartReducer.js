/* eslint-disable no-undef */
/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
/* eslint-disable spaced-comment */

//액션타입
// const GET_OPTIONS_LOADING = 'GET_OPTIONS_LOADING';
// const GET_OPTIONS_SUCCESS = 'GET_OPTIONS_SUCCESS';
// const GET_OPTIONS_ERROR = 'GET_OPTIONS_ERROR';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const ADD_INSTRUCTION_TO_CART = 'ADD_INSTRUCTION_TO_CART';

// count
export const SET_DIFF = 'SET_DIFF';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });


//thunk 생성함수
// export const getOptions = () => async (dispatch) => {
//   dispatch({ type: GET_OPTIONS_LOADING });

//   try {
//     const options = await optionsApi.getOptions();
//     dispatch({ type: GET_OPTIONS_SUCCESS }, options);
//   } catch (e) {
//     dispatch({ type: GET_OPTIONS_ERROR, error: e });
//   }
// };

//초기상태
const initialState = {
  cart: [],
  number: 1,
  diff: 1,
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const cartItem = state.cart.find(
        (item) => item.name === action.payload.name,
      );
      
// TODO: option에 대한 분기처리 어떻게 할지?
      // if (!cartItem) {
      //   return {
      //     ...state,
      //     cart: state.cart.concat(action.payload),
      //   };
      // } else {
      //   if (cartItem.options.length !== action.payload.options.length) {
      //     return {
      //       ...state,
      //       cart: state.cart.concat(action.payload),
      //     };
      //   } else {
      //     let isInCart = true;

      //     cartItem.options.forEach((option, idx) => {
      //       if (option.id !== action.payload.options[idx]) {
      //         isInCart = false;
      //       }
      //     });

      //     if (!isInCart) {
      //       return {
      //         ...state,
      //         cart: state.cart.concat(action.payload),
      //       };
      //     } else {
      //       return {
      //         ...state,
      //         cart: state.cart.map((_cartItem) => {
      //           if (_cartItem.name === action.payload.name) {
      //             return {
      //               ..._cartItem,
      //               count: _cartItem.count + action.payload.count,
      //             };
      //           }
      //           return _cartItem;
      //         }),
      //       };
      //     }
      //   }
      // }
    };

    // special instruction -삭제 예정
    // case ADD_INSTRUCTION_TO_CART:
    //   return {
    //     ...state,
    //     cart: state.cart.map((item) => {
    //       if (item.name === action.payload.name) {
    //         return action.payload;
    //       }
    //       return cart;
    //     }),
    //   };

    case SET_DIFF:
      return {
        ...state, diff: action.diff
      };
    case INCREASE:
      return {
        ...state, number: state.number + state.diff
      };
    case DECREASE:
        return {
          ...state, number: state.number - state.diff
        };
    case REMOVE_FROM_CART:
      console.log('WHAT IS THIS PAYLOAD', action.payload);
      return {
        ...state,
        cart: state.cart.filter((item) => item.name !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}
