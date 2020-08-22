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

import HomePage from './pages/Home';
import Shop from './pages/Shop';
import Payment from './pages/Payment';
import Earbuds from './pages/Earbuds';
import Wireless from './pages/Earbuds/Wireless';
import Wired from './pages/Earbuds/Wired';

import Headphones from './pages/Headphones';
import Battery from './pages/Battery';
import ProductPage from './pages/ProductPage';

/* style*/

import './default.scss';

function App() {
  const { openCart } = store.getState();
  return (
    <div className=" app">
      <Router>
        {openCart && <Cart />}
        <div className={`${openCart ? 'overlay' : ''}`}>
          <Header />
          <Subheader />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <div className="container">
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/payment" component={Payment} />
              <Route exact path="/shop/headphones" component={Headphones} />
              <Route exact path="/shop/earbuds" component={Earbuds} />
              <Route exact path="/shop/earbuds/wireless" component={Wireless} />
              <Route exact path="/shop/earbuds/wired" component={Wired} />
              <Route exact path="/shop/batteries" component={Battery} />
              <Route exact path="/shop/product/:id" component={ProductPage} />
            </div>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
