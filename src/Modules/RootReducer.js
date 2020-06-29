import { FeedReducer, ItemReducer, UserReducer, CombineReducers } from 'redux';

const RootReducer = CombineReducers({
  Feed: FeedReducer,
  Item: ItemReducer,
  User: UserReducer,
});

// const sotre = createStore(RootReducer);
// console.log(store.getState());

export default RootReducer;
