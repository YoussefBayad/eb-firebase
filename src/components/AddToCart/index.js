import React from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_CART } from '../../redux/openCart';
import types from '../../redux/Products/products.types';

// style
import './index.scss';

const AddToCart = ({ documentID, count }) => {
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
            dispatch({ type: types.INCREMENT, id: documentID });
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
