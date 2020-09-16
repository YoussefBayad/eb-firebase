import React from 'react';

import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cart/cartSlice';

// components

import Count from '../ProductCount';

//style
import './index.scss';
const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-product">
      <img
        className="cart-product-img"
        src={
          product.photoURL
            ? product.photoURL
            : `/img/${product.name.replace(/\s/g, '')}.webp`
        }
        alt={product.name}
      />
      <div className="cart-product-description">
        <p className="cart-product-name">{product.name}</p>
        <p className="cart-product-price">${product.price} usd</p>
        <div className="quantity">
          <Count id={product.documentID} count={product.count} />
          <h5
            className="cart-remove-product"
            onClick={() => dispatch(removeFromCart(product.documentID))}
          >
            REMOVE
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
