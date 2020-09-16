import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { authChange } from './redux/User/userSlice.js';

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
// import Admin from './pages/Admin';
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
  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(
            authChange({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        dispatch(authChange(null));
      }
    });
  }, [dispatch]);
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

      {/* <Route
        exact
        path="/admin"
        render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )}
      /> */}
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
