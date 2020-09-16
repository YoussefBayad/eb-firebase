import React from 'react';
import Links from '../../components/Links';
import Products from '../../components/Products';

// redux
import { useSelector } from 'react-redux';

const Headphones = () => {
  const products = useSelector((state) => state.products.data);
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
