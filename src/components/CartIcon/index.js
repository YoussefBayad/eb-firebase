import React from 'react';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { OPEN_CART } from '../../redux/openCart';

// img
import cartIcon from '../../assets/icon/cart.svg';

const CartIcon = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const cartLength = products.filter((product) => product.count > 0).length;

  return (
    <div
      className="cart-icon"
      onClick={() => {
        dispatch({ type: OPEN_CART });
      }}
    >
      <img src={cartIcon} alt="cart icon" />

      <p className="cart-items-number">{cartLength}</p>
    </div>
  );
};

export default CartIcon;
