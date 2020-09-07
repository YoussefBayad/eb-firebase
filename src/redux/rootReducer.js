import { combineReducers } from 'redux';

import productsReducer from './products.js';
import openCartReducer from './openCart.js';
import authReducer from './auth.js';

export default combineReducers({
  products: productsReducer,
  openCart: openCartReducer,
  currentUser: authReducer,
});
