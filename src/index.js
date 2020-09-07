import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import store from './redux/createStore';
// App
import App from './App';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);
