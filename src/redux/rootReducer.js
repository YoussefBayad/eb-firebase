import { combineReducers } from 'redux';

import reducer from '../Reducer.js';
import sortReducer from './sort.js';
import cartReducer from './cart.js';
import authReducer from './auth.js';
import paymentReducer from './payment.js';

export default combineReducers({
  red: reducer,
  sort: sortReducer,
  cart: cartReducer,
  auth: authReducer,
  payment: paymentReducer,
});
