import React from 'react';
import Links from '../../../components/Links';
import Products from '../../../components/Products';

/* data */
import { store } from '../../../index';

const Wireless = () => {
  const products = store.getState();

  return (
    <div className="shop">
      <h1>Wireless Earbuds</h1>
      <Links filter="Earbuds" />
      <Products
        products={products.filter(
          (product) =>
            product.category === 'Earbuds' && product.wireless === 'true'
        )}
      />
    </div>
  );
};

export default Wireless;
