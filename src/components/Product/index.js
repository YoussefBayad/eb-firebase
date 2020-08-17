import React from 'react';
import './index.scss';
const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={`/img/${product.name.trim()}.webp`} alt={product.name} />
      <p>{product.name}</p>
      <p className="price">${product.price}</p>
      <button className="buy">Add To Cart</button>
    </div>
  );
};

export default Product;
