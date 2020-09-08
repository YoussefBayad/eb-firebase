import React from 'react';

// router
import { Link } from 'react-router-dom';

// components

import Filter from '../Filter';
import User from '../User';
import CartIcon from '../CartIcon';

//style
import './index.scss';

const Header = () => {
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
          <Filter show={false} />
          <User />

          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Header;
