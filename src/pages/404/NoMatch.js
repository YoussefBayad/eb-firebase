import React from 'react';
import { Link } from 'react-router-dom';
import chevronRight from '../../assets/icon/chevron-right.svg';

import './index.scss';

const NoMatch = () => {
  return (
    <div className="no-match">
      <h1>404</h1>
      <h2>This page is not available</h2>
      <Link to="/shop" className="checkout-btn go-back-btn">
        Go Back To Shop <img src={chevronRight} alt=">" />
      </Link>
    </div>
  );
};

export default NoMatch;
