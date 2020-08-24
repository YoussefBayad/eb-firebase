import React from 'react';

// router
import { Link } from 'react-router-dom';

//data

import { store } from '../../index';

// img
import person from '../../assets/icon/person.svg';
import cartIcon from '../../assets/icon/cart.svg';

//style
import './index.scss';
import Filter from '../Filter';

const Header = () => {
  const { products, currentUser } = store.getState();
  const cartLength = products.filter((product) => product.count > 0).length;
  return (
    <nav>
      <div className="nav-container">
        <div className="left-nav">
          <Link to="/" className="logo">
            EB
          </Link>
          <Link to="/shop">Shop</Link>
          <Link to="/">About Us</Link>
        </div>
        <div className="right-nav">
          <Filter />
          {currentUser ? (
            <div className="user" title={currentUser.displayName}>
              <img
                src={currentUser.photoURL}
                alt="user image"
                className="user-image"
              />
            </div>
          ) : (
            <Link to="/login">
              <div className="user" title="LogIn">
                <img src={person} alt="person icon" />
              </div>
            </Link>
          )}
          <div
            className="cart-icon"
            onClick={() => {
              store.dispatch({ type: 'openCart' });
            }}
          >
            <img src={cartIcon} alt="cart icon" />

            <p className="cart-items-number">{cartLength}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
