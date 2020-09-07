import React from 'react';
import Links from '../../components/Links';
import Products from '../../components/Products';

// redux
import { useSelector } from 'react-redux';

const Earbuds = () => {
  const products = useSelector((state) => state.products);

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
