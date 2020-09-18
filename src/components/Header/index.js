import React from 'react';
import { Link } from 'react-router-dom';

import Filter from '../Filter';
import User from '../User';
import CartIcon from '../CartIcon';
import './index.scss';
import { useSelector } from 'react-redux';

const Header = () => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <nav>
      <div className="nav-container">
        <div className="left-nav">
          <div className="burger">
            <span className="burger-child"></span>
            <span className="burger-child"></span>
            <span className="burger-child"></span>
          </div>

          <Link to="/" className="logo">
            EB
          </Link>
          <Link to="/shop">Shop</Link>
          <Link to="/">About</Link>
        </div>
        <div className="right-nav">
          <Filter />
          <User />
          <CartIcon />
        </div>
        <div className="responsive-nav">
          <h1 className="close-nav">X</h1>
          <Link to="/shop">Shop</Link>
          <Link to="/shop/headphones">Headphones</Link>
          <Link to="/shop/earbuds">Earbuds</Link>
          <Link to="/">About Us</Link>
          {currentUser ? (
            <button>Logout</button>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
