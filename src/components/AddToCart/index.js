import React from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_CART } from '../../redux/openCart';
import { INCREMENT } from '../../redux/products';

// style
import './index.scss';

const AddToCart = ({ id, count }) => {
  const dispatch = useDispatch();
  return (
    <>
      {count > 0 ? (
        <button
          className="buy in-cart"
          onClick={() => dispatch({ type: OPEN_CART })}
        >
          In Cart
        </button>
      ) : (
        <button
          className="buy"
          onClick={() => {
            dispatch({ type: INCREMENT, id });
            dispatch({ type: OPEN_CART });
          }}
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default AddToCart;
