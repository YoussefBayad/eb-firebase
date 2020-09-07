import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { OPEN_CART } from '../../redux/openCart';

import CartProduct from '../CartProduct';
import useOutsideClickRef from '@rooks/use-outside-click-ref';

// animation

import Fade from 'react-reveal/Fade';

//store

//style
import './index.scss';

const Cart = () => {
  const dispatch = useDispatch();
  // cart
  const products = useSelector((state) => state.products);
  const cart = products.filter((product) => product.count > 0);
  //handle clicked

  const handleClick = (e) => {
    if (e.target.className === 'cart-remove-product') return;

    dispatch({ type: OPEN_CART });
  };

  // outside click
  const [ref] = useOutsideClickRef(handleClick);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <Fade right>
      <div ref={ref} className="cart">
        <div className="cart-header">
          <h1>CART</h1>
          <h1
            className="close-cart"
            onClick={() => {
              dispatch({ type: OPEN_CART });
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
              dispatch({ type: OPEN_CART });
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
