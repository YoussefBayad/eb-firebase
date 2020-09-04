import React from 'react';
import ReactDOM from 'react-dom';

// redux

import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import Reducer from './Reducer';

// App
import App from './App';

/* Store */
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(Reducer, devToolsEnhancer({ trace: true }));

/* render */

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);
