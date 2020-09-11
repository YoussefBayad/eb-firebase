import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';
import { handleFetchProducts } from './redux/Products/products.helpers';
import productsTypes from './redux/Products/products.types';

//redux
import { useDispatch, useSelector } from 'react-redux';

// auth

import { auth, handleUserProfile } from './Firebase/utils.js';

// layout
import AdminLayout from './layouts/AdminLayout';
import MainLayout from './layouts/MainLayout.js';
import HomeLayout from './layouts/HomeLayout.js';

// pages

import HomePage from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Shop from './pages/Shop';
import Payment from './pages/Payment';
import Admin from './pages/Admin';
import Earbuds from './pages/Earbuds';
import Wireless from './pages/Earbuds/Wireless';
import Wired from './pages/Earbuds/Wired';
import Headphones from './pages/Headphones';
import Battery from './pages/Battery';
import ProductPage from './pages/ProductPage';

// HOC
import WithAdminAuth from './hoc/withAdminAuth.js';
import WithAuth from './hoc/withAuth';

// style

import './default.scss';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch({
            type: 'auth',
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        dispatch({ type: 'auth', currentUser: null });
      }
    });
    if (products !== null && products.length > 0) return;
    else {
      console.log('fetching data');
      handleFetchProducts()
        .then((products) => {
          console.log(products);

          dispatch({ type: productsTypes.SET_PRODUCTS, products });
        })
        .catch((err) => console.log(err));
    }

    return () => {
      authListener();
    };
  }, []);
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <HomeLayout>
            <HomePage />
          </HomeLayout>
        )}
      />

      <Route
        exact
        path="/admin"
        render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )}
      />
      <Route
        exact
        path="/shop/product/:id"
        render={() => (
          <HomeLayout>
            <ProductPage />
          </HomeLayout>
        )}
      />

      <MainLayout>
        <Route exact path="/shop" render={() => <Shop />} />
        <Route
          exact
          path="/login"
          render={() => (
            <WithAuth>
              <Login />
            </WithAuth>
          )}
        />
        <Route
          exact
          path="/registration"
          render={() => (
            <WithAuth>
              <Registration />
            </WithAuth>
          )}
        />
        <Route exact path="/shop/headphones" component={Headphones} />
        <Route exact path="/shop/earbuds" component={Earbuds} />
        <Route exact path="/shop/earbuds/wireless" component={Wireless} />
        <Route exact path="/shop/earbuds/wired" component={Wired} />
        <Route exact path="/shop/batteries" component={Battery} />
        <Route exact path="/payment" component={Payment} />
      </MainLayout>
    </Switch>
  );
};

export default App;
