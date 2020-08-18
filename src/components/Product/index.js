import React from 'react';

// store

import { store } from '../../index';

//style
import './index.scss';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={`/img/${product.name.trim()}.webp`} alt={product.name} />
      <p>{product.name}</p>
      <p className="price">${product.price}</p>
      <button
        className="buy"
        onClick={() => {
          store.dispatch({ type: 'addToCart', id: product.id });
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
