import React from 'react';
import Links from '../../../components/Links';
import Products from '../../../components/Products';

// redux
import { useSelector } from 'react-redux';

const Wireless = () => {
  const products = useSelector((state) => state.products.data);

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
