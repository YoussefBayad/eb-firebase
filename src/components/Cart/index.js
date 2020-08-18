import React from 'react';
import CartProduct from '../CartProduct';

// animation

import Fade from 'react-reveal/Fade';

//store
import { store } from '../../index.js';

//style
import './index.scss';

const Cart = () => {
  const { cart } = store.getState();

  return (
    <Fade right>
      <div className="cart">
        <div className="cart-header">
          <h1>CART</h1>
          <h1 className="close-cart">X</h1>
        </div>
        <div className="cart-main">
          {cart.map((product) => (
            <CartProduct product={product} />
          ))}
        </div>

        <div className="cart-footer">
          <button className="checkout-btn">
            <span>CHECKOUT</span> <span>.</span> $ 100.99
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default Cart;
