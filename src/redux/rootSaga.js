import { all, call } from 'redux-saga/effects';

import productsSagas from './Products/products.sagas';

export default function* rootSaga() {
  yield all([call(productsSagas)]);
}
