import React from 'react';
import { useDispatch } from 'react-redux';
import { openCart, addToCart } from '../../redux/cart/cartSlice';
import './index.scss';

const AddToCart = ({ documentID, count }) => {
  const dispatch = useDispatch();
  return (
    <>
      {count > 0 ? (
        <button className="buy in-cart" onClick={() => dispatch(openCart())}>
          In Cart
        </button>
      ) : (
        <button
          className="buy"
          onClick={() => {
            dispatch(addToCart(documentID));
            dispatch(openCart());
          }}
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default AddToCart;
