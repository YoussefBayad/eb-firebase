import React from 'react';
import { Link } from 'react-router-dom';
import search from '../../assets/icon/search.svg';
import person from '../../assets/icon/person.svg';
import cart from '../../assets/icon/cart.svg';
import './index.scss';

const Header = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          EB
        </Link>

        <div className="right-nav">
          <img src={search} alt="search icon" />
          <img src={person} alt="person icon" />
          <img src={cart} alt="cart icon" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
