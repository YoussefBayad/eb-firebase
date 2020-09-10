import { combineReducers } from 'redux';

import productsReducer from './Products/products.reducer.js';
import openCartReducer from './openCart.js';
import userReducer from './User/user.reducer';

export default combineReducers({
  products: productsReducer,
  openCart: openCartReducer,
  currentUser: userReducer,
});
