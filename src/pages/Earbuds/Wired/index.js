import React from 'react';
import Links from '../../../components/Links';
import Products from '../../../components/Products';

// redux
import { useSelector } from 'react-redux';

const Wired = () => {
  const products = useSelector((state) => state.products.data);

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
