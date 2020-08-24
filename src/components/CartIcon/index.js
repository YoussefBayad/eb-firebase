import React from 'react';

//store

import { store } from '../../index';

// img
import cartIcon from '../../assets/icon/cart.svg';

const CartIcon = () => {
  const { products } = store.getState();
  const cartLength = products.filter((product) => product.count > 0).length;

  return (
    <div
      className="cart-icon"
      onClick={() => {
        store.dispatch({ type: 'openCart' });
      }}
    >
      <img src={cartIcon} alt="cart icon" />

      <p className="cart-items-number">{cartLength}</p>
    </div>
  );
};

export default CartIcon;
