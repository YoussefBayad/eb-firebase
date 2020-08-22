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
  const { products } = store.getState();
  const cartLength = products.filter((product) => product.count > 0).length;
  return (
    <nav>
      <div className="nav-container">
        <div className="left-nav">
          <Link to="/" className="logo">
            EB
          </Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className="right-nav">
          <Filter />
          <img src={person} alt="person icon" />
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
