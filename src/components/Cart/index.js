import React, { useEffect } from 'react';
import CartProduct from '../CartProduct';

// animation

import Fade from 'react-reveal/Fade';

//store
import { store } from '../../index.js';

//style
import './index.scss';

const Cart = () => {
  // cart
  const { cart } = store.getState();

  // Ref

  // useEffect(() => {
  //   const handler = (e) => {
  //     if (!cartRef.current.contains(e.target)) {
  //       console.log(e);
  //     }
  //   };

  //   document.addEventListener('mousedown', handler);
  //   return () => {
  //     document.removeEventListener('mousedown', handler);
  //   };
  // }, []);

  return (
    <Fade right>
      <div className="cart">
        <div className="cart-header">
          <h1>CART</h1>
          <h1
            className="close-cart"
            onClick={() => store.dispatch({ type: 'openCart' })}
          >
            X
          </h1>
        </div>
        <div className="cart-main">
          {cart.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </div>

        <div className="cart-footer">
          <button className="checkout-btn">
            <span>CHECKOUT</span> <span>.</span>{' '}
            <span>
              $ {''}
              {cart.length > 0
                ? cart
                    .reduce((a, p) => {
                      return a + p.price * p.count;
                    }, 0)
                    .toFixed(2)
                : '00.00 usd'}
            </span>
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default Cart;
