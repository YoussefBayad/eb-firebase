import React from 'react';
import { Link } from 'react-router-dom';
/* DATA* */

import data from '../../data.json';

/* components*/

import Product from '../../components/Product';

/* style */

import './index.scss';

const Shop = () => {
  const { products } = data;
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
          <select>
            <option value="all">All</option>
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
