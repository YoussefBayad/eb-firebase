import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

//stores
import { store } from './index';
import { middlewares } from './redux/createStore';

// auth

import { auth, handleUserProfile } from './Firebase/utils.js';

/* components */

import Header from './components/Header';
import Subheader from './components/Subheader';
import Cart from './components/Cart';

import Footer from './components/Footer/index.js';

/* pages*/

import HomePage from './pages/Home';
import Login from './pages/Login';
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
import Registration from './pages/Registration';

const App = () => {
  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          store.dispatch({
            type: 'auth',
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        store.dispatch({ type: 'auth', currentUser: null });
      }
    });

    return () => {
      authListener();
    };
  }, []);
  const { currentUser, openCart } = store.getState();
  return (
    <div className=" app">
      <Router>
        {openCart && <Cart />}
        <div className={`${openCart ? 'overlay' : ''}`}>
          <Header />
          <Subheader />

          <Switch>
            <Route exact path="/shop/product/:id" component={ProductPage} />
            <Route exact path="/" component={HomePage} />
            <div className="container">
              <Route exact path="/shop" component={Shop} />
              <Route
                exact
                path="/login"
                render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
              />
              <Route
                exact
                path="/registration"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <Registration />
                }
              />
              <Route exact path="/payment" component={Payment} />
              <Route exact path="/shop/headphones" component={Headphones} />
              <Route exact path="/shop/earbuds" component={Earbuds} />
              <Route exact path="/shop/earbuds/wireless" component={Wireless} />
              <Route exact path="/shop/earbuds/wired" component={Wired} />
              <Route exact path="/shop/batteries" component={Battery} />
            </div>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
