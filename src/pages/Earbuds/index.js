import React from 'react';
import './index.scss';
import Links from '../../components/Links';
import Product from '../../components/Product';

/* data */
import { store } from '../../index';

const Earbuds = () => {
  const products = store.getState();

  return (
    <div className="shop">
      <h1>Earbuds</h1>
      <Links />
      <div className="products">
        {products
          .filter((product) => product.category === 'Earbuds')
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Earbuds;
