import React from 'react';
import './index.scss';
import Links from '../../components/Links';
import Products from '../../components/Products';

/* Store */
import { store } from '../../index';

const Battery = () => {
  const { products } = store.getState();

  return (
    <div className="shop">
      <h1>Batteries</h1>
      <Links filter="Battery" />
      <Products
        products={products.filter((product) => product.category === 'Battery')}
      />
    </div>
  );
};

export default Battery;
