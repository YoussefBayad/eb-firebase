import React from 'react';
import './index.scss';
import Links from '../../components/Links';
import Product from '../../components/Product';

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
      <div className="products">
        {products
          .filter((product) => product.category === 'Battery')
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Battery;
