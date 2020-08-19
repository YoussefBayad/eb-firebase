import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//stores
import { store } from './index';

/* components */

import Header from './components/Header';
import Subheader from './components/Subheader';
import Cart from './components/Cart';

import Footer from './components/Footer/index.js';

/* pages*/

import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import Earbuds from './pages/Earbuds';
import Wireless from './pages/Earbuds/Wireless';
import Wired from './pages/Earbuds/Wired';

import Headphones from './pages/Headphones';
import Battery from './pages/Battery';

/* style*/

import './default.scss';

function App() {
  const { openCart } = store.getState();
  return (
    <div className=" app">
      {openCart && <Cart />}
      <div className={`${openCart ? 'overlay' : ''}`}>
        <Router>
          <Header />
          <Subheader />
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/shop/headphones" component={Headphones} />
              <Route exact path="/shop/earbuds" component={Earbuds} />
              <Route exact path="/shop/earbuds/wireless" component={Wireless} />
              <Route exact path="/shop/earbuds/wired" component={Wired} />
              <Route exact path="/shop/batteries" component={Battery} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
