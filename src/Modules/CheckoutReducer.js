// store 정보 취득 action
const GET_CHECKOUT = 'GET_CHECKOUT';
const GET_CHECKOUT_SUCCESS = 'GET_CHECKOUT_SUCCESS';
const GET_CHECKOUT_ERROR = 'GET_CHECKOUT_ERROR';

// export const getStoreAsync = (id) => async (dispatch) => {
//   dispatch({ type: GET_STORE });
//   try {
//     const { data } = await DevApi.getItem(id);
//     dispatch({ type: GET_STORE_SUCCESS, data });
//   } catch (e) {
//     dispatch({ type: GET_STORE_ERROR, error: e });
//   }
// };

// 초기 상태
const initialState = {
  deliveryAddress: [
    { id: '01', name: 'New York, Abc, AAAA' },
    { id: '02', name: 'LA, AAA, BBBB' },
  ],
  time: [
    { id: '01', name: 'as soon as possible' },
    { id: '02', name: 'as quickly as possible' },
  ],
  payment: [
    { id: '01', name: '010-0000-0000' },
    { id: '02', name: '010-0000-0000' },
  ],
  status: {
    loading: false,
    success: true,
    error: {
      error: false,
      massage: null,
    },
  },
};

export default function CheckoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHECKOUT:
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
    case GET_CHECKOUT_SUCCESS:
      return {
        ...state,
        deliveryAddress: action.data.deliveryAddress,
        time: action.data.time,
        payment: action.data.payment,
        status: {
          loading: false,
          success: true,
          error: {
            error: false,
            massage: null,
          },
        },
      };
    case GET_CHECKOUT_ERROR:
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
