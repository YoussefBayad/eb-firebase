import React from 'react';
import './index.scss';
import Links from '../../components/Links';
import Products from '../../components/Products';

/* data */
import { store } from '../../index';

const Earbuds = () => {
  const products = store.getState();

  return (
    <div className="shop">
      <h1>Earbuds</h1>
      <Links />
      <Products products={products} />
    </div>
  );
};

export default Earbuds;
