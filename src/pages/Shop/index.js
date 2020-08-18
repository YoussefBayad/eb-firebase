import React from 'react';
import { store } from '../../index';

/* components*/
import Links from '../../components/Links';
import Products from '../../components/Products';

/* style */

import './index.scss';

const Shop = () => {
  const { products } = store.getState();

  return (
    <div className="shop">
      <h1>Shop</h1>
      <Links filter="Shop" />
      <Products products={products} />
    </div>
  );
};

export default Shop;
