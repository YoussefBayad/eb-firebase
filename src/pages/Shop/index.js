import React from 'react';

import { useSelector } from 'react-redux';
import Links from '../../components/Links';
import Products from '../../components/Products';
import './index.scss';

const Shop = () => {
  const { products } = useSelector((state) => state.products.data);
  return (
    <div className="shop">
      <h1>Shop</h1>
      <Links filter="Shop" />
      <Products products={products} />
    </div>
  );
};

export default Shop;
