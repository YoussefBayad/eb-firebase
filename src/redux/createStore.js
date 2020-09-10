import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddle from 'redux-saga';
import rootSaga from './rootSaga';
import thunk from 'redux-thunk';

/* data */
// import data from '../data.json';
//localStorage
// const localStorageProducts = JSON.parse(localStorage.getItem('products'));
// if (localStorageProducts !== null) {
//   products = localStorageProducts;
// } else {
// products = data.products;
// }
// initial state

// const initialState = {
//   products: [],
//   currentUser: null,
//   openCart: false,
// };

const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware];

const store = createStore(
  rootReducer,

  applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSaga);

export default store;
