import React from 'react';
import Links from '../../../components/Links';
import Products from '../../../components/Products';

/* data */
import { store } from '../../../index';

const Wired = () => {
  const products = store.getState();

  return (
    <div className="shop">
      <h1>Wired Earbuds</h1>
      <Links filter="Earbuds" />
      <Products
        products={products.filter((product) => product.wireless === 'false')}
      />
    </div>
  );
};

export default Wired;
