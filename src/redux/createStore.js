import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddle from 'redux-saga';
import rootSaga from './rootSaga';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware];
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

export default store;
