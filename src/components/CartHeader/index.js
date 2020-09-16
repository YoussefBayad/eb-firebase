import React from 'react';
import { useDispatch } from 'react-redux';

function CartHeader({ openCart }) {
  const dispatch = useDispatch();
  return (
    <div className="cart-header">
      <h1>CART</h1>
      <h1
        className="close-cart"
        onClick={() => {
          dispatch(openCart());
        }}
      >
        X
      </h1>
    </div>
  );
}

export default CartHeader;
