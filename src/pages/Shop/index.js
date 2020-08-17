import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../index';

/* components*/

import Product from '../../components/Product';

/* style */

import './index.scss';

const Shop = () => {
  const products = store.getState();
  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="links">
        <Link to="/headphones" className="link ">
          Headphones
        </Link>
        <Link to="/earbuds" className="link ">
          Earbuds
        </Link>
        <Link to="/battery" className="link ">
          Battery
        </Link>
        <div className="price-filter">
          <h3>Filter :</h3>
          <select onChange={(e) => store.dispatch({ type: e.target.value })}>
            <option value="latest">Latest</option>
            <option value="highest">Highest</option>
            <option value="lowest">Lowest</option>
          </select>
        </div>
      </div>
      <div className="products">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
