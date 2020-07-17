/* eslint-disable no-fallthrough */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
/* eslint-disable spaced-comment */

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
const OPEN_CART = 'OPEN_CART';
const ADD_COUNT = 'ADD_COUNT';

export const openCart = (openState) => ({ type: OPEN_CART, openState });
export const addCount = (count) => ({ type: ADD_COUNT, count });

const initialState = {
  isPaneOpen: false,
  cart: [],
  totalCount: 0,
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const cartItem = state.cart.find(
        (item) => item.name === action.payload.name,
        console.log(action.payload.name),
      );

      if (!cartItem) {
        console.log(action.payload);
        return {
          ...state,
          cart: state.cart.concat(action.payload),
        };
      } else {
        const optionsKeys = Object.keys(cartItem.options);
        const payloadKeys = Object.keys(action.payload.options);
        console.log('KEYS', optionsKeys, payloadKeys);

        if (optionsKeys.length !== payloadKeys.length) {
          console.log('KEYS', optionsKeys.length, payloadKeys.length);

          return {
            ...state,
            cart: state.cart.concat(action.payload),
          };
        } else {
          let isInCart = true;
          optionsKeys.forEach((key) => {
            const optionItem = cartItem.options[key];
            const payloadOptionItem = action.payload.options[key];
            console.log(optionItem, payloadOptionItem);
            console.log(action.payload);

            if (!payloadOptionItem) {
              isInCart = false;
            }
            if (optionItem.id !== payloadOptionItem.id) {
              isInCart = false;
            }
          });
          console.log('bye', optionsKeys);

          if (!isInCart) {
            return {
              ...state,
              cart: state.cart.concat(action.payload),
            };
          } else {
            console.log('ddddd', action.payload);
            return {
              ...state,
              cart: state.cart.map((_cartItem) => {
                if (_cartItem.name === action.payload.name) {
                  return {
                    ..._cartItem,
                    count: _cartItem.count + action.payload.count,
                  };
                }
                return _cartItem;
              }),
            };
          }
        }
      }
    }

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
        totalCount: 0,
      };
    case OPEN_CART:
      return {
        ...state,
        isPaneOpen: action.openState,
      };
    case ADD_COUNT:
      return {
        ...state,
        totalCount: action.count,
      };
    default:
      return state;
  }
}
