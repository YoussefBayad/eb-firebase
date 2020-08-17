import React from 'react';
import './index.scss';
import Links from '../../components/Links';
import Products from '../../components/Products';

/* data */
import { store } from '../../index';

const Battery = () => {
  const products = store.getState();
  const ol = products.filter((product) => product.category === 'Battery');
  console.log(ol);
  return (
    <div className="shop">
      <h1>Batteries</h1>
      <Links />
      <Products products={products} />
    </div>
  );
};

export default Battery;
