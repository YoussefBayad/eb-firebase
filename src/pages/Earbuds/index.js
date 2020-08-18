import React from 'react';
import Links from '../../components/Links';
import Products from '../../components/Products';

/* data */
import { store } from '../../index';

const Earbuds = () => {
  const products = store.getState();

  return (
    <div className="shop">
      <h1>Earbuds</h1>
      <Links filter="Earbuds" />
      <Products
        products={products.filter((product) => product.category === 'Earbuds')}
      />
    </div>
  );
};

export default Earbuds;
