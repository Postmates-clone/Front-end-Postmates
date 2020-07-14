/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import { combineReducers } from 'redux';
// import { all } from 'redux-saga/effects';
import MainReducer from './MainReducer';
import FeedReducer from './FeedReducer';
import ItemReducer from './ItemReducer';
import UserReducer from './UserReducer';
import RefReducer from './RefReducer';
import CartReducer from './CartReducer';
import LocationReducer from './LocationReducer';
import CheckoutReducer from './CheckoutReducer';

const RootReducer = combineReducers({
  Main: MainReducer,
  Feed: FeedReducer,
  Item: ItemReducer,
  User: UserReducer,
  Ref: RefReducer,
  Cart: CartReducer,
  Location: LocationReducer,
  Checkout: CheckoutReducer,
});

// export function* rootSaga() {
//   yield all([PlaceSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
// }

// const store = createStore(RootReducer);
// console.log(store.getState());

export default RootReducer;
