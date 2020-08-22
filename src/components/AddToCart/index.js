import React from 'react';

// store

import { store } from '../../index.js';

// style
import './index.scss';
const AddToCart = ({ id }) => {
  const { cart } = store.getState();

  // check if product exist in cart

  let checkIfProductExist;

  if (cart.length > -1) {
    checkIfProductExist = cart.some((item) => item.id === id);
  }
  return (
    <>
      {checkIfProductExist ? (
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
            if (checkIfProductExist) {
              store.dispatch({ type: 'incrementCount', id: id });
            } else {
              store.dispatch({ type: 'addToCart', id: id });
              store.dispatch({ type: 'openCart' });
            }
          }}
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default AddToCart;
