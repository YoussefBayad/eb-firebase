import React from 'react';

// store
import { store } from '../../index.js';
// style
import './index.scss';
const AddToCart = ({ id, count }) => {
  return (
    <>
      {count > 0 ? (
        <button
          className="buy in-cart"
          onClick={() => store.dispatch({ type: 'openCart' })}
        >
          In Cart
        </button>
      ) : (
        <button
          className="buy"
          onClick={() => {
            store.dispatch({ type: 'incrementCount', id: id });
            store.dispatch({ type: 'openCart' });
          }}
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default AddToCart;
