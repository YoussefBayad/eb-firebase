import React from 'react';
import Zoom from 'react-reveal/Zoom';
// store

import { store } from '../../index';

//style
import './index.scss';

/* component  */

const Product = ({ product }) => {
  const { cart } = store.getState();

  // check if product exist in cart

  let checkIfProductExist;
  if (cart.length > -1) {
    checkIfProductExist = cart.some((item) => item.id === product.id);
  }
  return (
    <Zoom>
      <div className="product">
        <img src={`/img/${product.name.trim()}.webp`} alt={product.name} />
        <p>{product.name}</p>
        <p className="price">${product.price}</p>

        {
          // check If Product Exist in cart
        }

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
                store.dispatch({ type: 'incrementCount', id: product.id });
              } else {
                store.dispatch({ type: 'addToCart', id: product.id });
                store.dispatch({ type: 'openCart' });
              }
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    </Zoom>
  );
};

export default Product;
