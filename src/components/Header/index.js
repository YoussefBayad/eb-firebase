import React from 'react';

// router
import { Link } from 'react-router-dom';

//data

import { store } from '../../index';
// img
import search from '../../assets/icon/search.svg';
import person from '../../assets/icon/person.svg';
import cartIcon from '../../assets/icon/cart.svg';

//style
import './index.scss';

const Header = () => {
  const { cart, openCart } = store.getState();
  const cartLength = cart.length;
  return (
    <>
      <nav>
        <div className="nav-container">
          <Link to="/" className="logo">
            EB
          </Link>

          <div className="right-nav">
            <img src={search} alt="search icon" />
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
    </>
  );
};

export default Header;
