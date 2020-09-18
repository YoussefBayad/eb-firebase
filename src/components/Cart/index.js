import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
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
    if (isCartOpen) {
      dispatch(openCart());
    }
  };

  const [ref] = useOutsideClickRef(handleOutsideClick);

  useEffect(() => {
    // localStorage.setItem('cart', JSON.stringify(cart));
  }, []);
  const cartVariants = {
    open: { x: 0 },
    closed: { x: 600 },
  };
  return (
    <>
      {isCartOpen && <div className="overlay"></div>}
      <motion.div
        animate={isCartOpen ? 'open' : 'closed'}
        variants={cartVariants}
        ref={ref}
        className="cart"
      >
        <CartHeader openCart={openCart} />
        <CartMain products={products} />
        <CartFooter products={products} openCart={openCart} />
      </motion.div>
    </>
  );
};

export default Cart;
