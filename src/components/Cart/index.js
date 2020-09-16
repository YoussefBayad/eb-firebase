import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openCart } from '../../redux/cart/cartSlice';
import Fade from 'react-reveal/Fade';
import CartHeader from '../CartHeader';
import CartMain from '../CartMain';
import CartFooter from '../CartFooter';
import useOutsideClickRef from '@rooks/use-outside-click-ref';
import './index.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const { isCartOpen, data: products } = useSelector((state) => state.cart);

  const handleOutsideClick = (e) => {
    if (e.target.className === 'cart-remove-product') return;
    dispatch(openCart());
  };
  const [ref] = useOutsideClickRef(handleOutsideClick);

  useEffect(() => {
    // localStorage.setItem('cart', JSON.stringify(cart));
  }, []);

  return (
    <>
      {isCartOpen && (
        <>
          <div className="overlay"></div>
          <Fade right>
            <div ref={ref} className="cart">
              <CartHeader openCart={openCart} />
              <CartMain products={products} />
              <CartFooter products={products} openCart={openCart} />
            </div>
          </Fade>
        </>
      )}
    </>
  );
};

export default Cart;
