import { combineReducers } from 'redux';
import feedReducer from './feedReducer';
import { itemReducer } from './ItemReducer';
import UserReducer from './userReducer';

const RootReducer = combineReducers({
  Feed: feedReducer,
  Item: itemReducer,
  User: UserReducer,
});

// const sotre = createStore(RootReducer);
// console.log(store.getState());

export default RootReducer;
