import React from 'react';
import { store } from '../../index';

/* components*/
import Links from '../../components/Links';

import Product from '../../components/Product';

/* style */

import './index.scss';

const Shop = () => {
  const products = store.getState();
  return (
    <div className="shop">
      <h1>Shop</h1>
      <Links />
      <div className="products">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
