import React from 'react';
import Links from '../../components/Links';
import Products from '../../components/Products';

/* Store */
import { store } from '../../index';

const Headphones = () => {
  const { products } = store.getState();
  const headphones = products.filter(
    (product) => product.category === 'Headphone'
  );
  return (
    <div className="shop">
      <h1>Headphones</h1>
      <Links filter="Headphones" />
      <Products products={headphones} />
    </div>
  );
};

export default Headphones;
