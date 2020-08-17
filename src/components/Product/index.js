import React from 'react';
import './index.scss';
const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={`/img/${product.name.trim()}.webp`} alt={product.name} />
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
    </div>
  );
};

export default Product;
