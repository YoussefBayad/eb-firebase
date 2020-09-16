import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openCart, addToCart } from '../../redux/cart/cartSlice';
import './index.scss';

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const isProductInCart = useSelector((state) =>
    state.cart.data.find((item) => item.documentID === product.documentID)
  );
  console.log(isProductInCart);
  return (
    <>
      {isProductInCart === undefined ? (
        <button
          className="buy"
          onClick={() => {
            dispatch(addToCart(product));
            dispatch(openCart());
          }}
        >
          Add To Cart
        </button>
      ) : (
        <button className="buy in-cart" onClick={() => dispatch(openCart())}>
          In Cart
        </button>
      )}
    </>
  );
};

export default AddToCart;
