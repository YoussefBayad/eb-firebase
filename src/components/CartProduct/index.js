import React from 'react';

import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART } from '../../redux/products';

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
        src={`/img/${product.name.replace(/\s/g, '')}.webp`}
        alt={product.name}
      />
      <div className="cart-product-description">
        <p className="cart-product-name">{product.name}</p>
        <p className="cart-product-price">${product.price} usd</p>
        <div className="quantity">
          <Count id={product.id} count={product.count} />
          <h5
            className="cart-remove-product"
            onClick={() => dispatch({ type: REMOVE_FROM_CART, id: product.id })}
          >
            REMOVE
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
