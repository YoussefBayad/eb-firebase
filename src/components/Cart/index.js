import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { OPEN_CART } from '../../redux/openCart';
import CartProduct from '../CartProduct';
import useOutsideClickRef from '@rooks/use-outside-click-ref';
import Fade from 'react-reveal/Fade';
import './index.scss';

const Cart = () => {
  const dispatch = useDispatch();

  // cart items
  const { products, openCart } = useSelector((state) => state);
  let cart;
  products
    ? (cart = products.filter((product) => product.count > 0))
    : (cart = []);

  const handleClick = (e) => {
    if (e.target.className === 'cart-remove-product') return;

    dispatch(openCart());
  };

  const [ref] = useOutsideClickRef(handleClick);

  useEffect(() => {
    // localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <>
      {openCart && (
        <>
          <div className="overlay"></div>
          <Fade right>
            <div ref={ref} className="cart">
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
              <div className="cart-main">
                {cart.map((product) => (
                  <CartProduct key={product.documentID} product={product} />
                ))}
              </div>
              <div className="cart-footer">
                <Link
                  to="/payment"
                  className="checkout-btn"
                  onClick={() => {
                    dispatch(openCart());
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
        </>
      )}
    </>
  );
};

export default Cart;
