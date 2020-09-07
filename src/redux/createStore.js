import { createStore } from 'redux';
import rootReducer from './rootReducer';
/* data */
import data from '../data.json';

//localStorage
let products;
const localStorageProducts = JSON.parse(localStorage.getItem('products'));
if (localStorageProducts !== null) {
  products = localStorageProducts;
} else {
  products = data.products;
}
// initial state
const initialState = {
  products: [...products],
  currentUser: null,
  openCart: false,
};

export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
