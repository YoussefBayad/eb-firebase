import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddle from 'redux-saga';
import rootSaga from './rootSaga';

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

const sagaMiddleware = createSagaMiddle();
export const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSaga);

export default store;
