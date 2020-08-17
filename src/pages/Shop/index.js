import React from 'react';

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
      <div className="links">links inks</div>
      <div className="products">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
