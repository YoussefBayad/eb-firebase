import React from 'react';
import { Link } from 'react-router-dom';
import Filter from '../Filter';
import User from '../User';
import CartIcon from '../CartIcon';
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
          <Filter />
          <User />
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Header;
