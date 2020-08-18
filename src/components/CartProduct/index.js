import React from 'react';
import './index.scss';
const CartProduct = ({ product }) => {
  return (
    <div className="cart-product">
      <img
        className="cart-product-img"
        src={`img/${product.name.trim()}.webp`}
        alt=""
      />
      <div className="cart-product-description">
        <p className="cart-product-name">{product.name}</p>
        <p className="cart-product-price">${product.price} usd</p>
        <div className="quantity">
          <div className="count">+ 1 -</div>
          <h5 className="cart-remove-product">REMOVE</h5>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
