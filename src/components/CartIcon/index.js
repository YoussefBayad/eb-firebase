import React from 'react';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { openCart } from '../../redux/cart/cartSlice';

// img
import cartIcon from '../../assets/icon/cart.svg';

const CartIcon = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);
  let cartLength;
  products
    ? (cartLength = products.filter((product) => product.count > 0).length)
    : (cartLength = 0);
  console.log(openCart);

  return (
    <div
      className="cart-icon"
      onClick={() => {
        dispatch(openCart());
      }}
    >
      <img src={cartIcon} alt="cart icon" />

      <p className="cart-items-number">{cartLength}</p>
    </div>
  );
};

export default CartIcon;
