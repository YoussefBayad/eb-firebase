import React from 'react';

// store

import { store } from '../../index';

//style
import './index.scss';

const Product = ({ product }) => {
  const { cart } = store.getState();
  let checkIfProductExist;
  if (cart.length > -1) {
    checkIfProductExist = cart.some((item) => item.id === product.id);
  }
  return (
    <div className="product">
      <img src={`/img/${product.name.trim()}.webp`} alt={product.name} />
      <p>{product.name}</p>
      <p className="price">${product.price}</p>
      <button
        className="buy"
        onClick={() => {
          if (checkIfProductExist) {
            store.dispatch({ type: 'incrementCount', id: product.id });
          } else {
            store.dispatch({ type: 'addToCart', id: product.id });
            store.dispatch({ type: 'openCart' });
          }
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
