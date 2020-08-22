import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from '../CartProduct';
import useOutsideClickRef from '@rooks/use-outside-click-ref';

// animation

import Fade from 'react-reveal/Fade';

//store
import { store } from '../../index.js';

//style
import './index.scss';

const Cart = () => {
  // cart
  const { cart } = store.getState();

  //handle clicked

  const handleClick = (e) => {
    store.dispatch({ type: 'openCart' });
  };

  // outside click
  const [ref] = useOutsideClickRef(handleClick);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, []);

  return (
    <Fade right>
      <div ref={ref} className="cart">
        <div className="cart-header">
          <h1>CART</h1>
          <h1
            className="close-cart"
            onClick={() => {
              store.dispatch({ type: 'openCart' });
            }}
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
          <Link
            to="/payment"
            className="checkout-btn"
            onClick={() => {
              store.dispatch({ type: 'openCart' });
            }}
          >
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
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default Cart;
