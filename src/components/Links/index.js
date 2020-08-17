import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../index';
import './index.scss';

const Links = () => {
  return (
    <div className="links">
      <Link to="/headphones" className="link ">
        Headphones
      </Link>
      <Link to="/earbuds" className="link ">
        Earbuds
      </Link>
      <Link to="/batteries" className="link ">
        Battery
      </Link>
      <div className="price-filter">
        <h3>Filter :</h3>
        <select onChange={(e) => store.dispatch({ type: e.target.value })}>
          <option value="latest">Latest</option>
          <option value="highest">Highest Price</option>
          <option value="lowest">Lowest Price</option>
        </select>
      </div>
    </div>
  );
};

export default Links;
