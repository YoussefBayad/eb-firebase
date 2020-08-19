import React from 'react';

//store
import { store } from '../../index.js';

//style
import './index.scss';
const CartProduct = ({ product }) => {
  return (
    <div className="cart-product">
      <img
        className="cart-product-img"
        src={`/img/${product.name.trim()}.webp`}
        alt={product.name}
      />
      <div className="cart-product-description">
        <p className="cart-product-name">{product.name}</p>
        <p className="cart-product-price">${product.price} usd</p>
        <div className="quantity">
          <div className="count">
            <button onClick={() => store.dispatch({ type: 'incrementCount' })}>
              +
            </button>
            1
            <button onClick={() => store.dispatch({ type: 'decrementCount' })}>
              -
            </button>
          </div>
          <h5
            className="cart-remove-product"
            onClick={() =>
              store.dispatch({ type: 'removeFromCart', id: product.id })
            }
          >
            REMOVE
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
