import React from 'react';
import CartProduct from '../CartProduct';

const CartMain = ({ products }) => {
  return (
    <div className="cart-main">
      {products.map((product) => (
        <CartProduct key={product.documentID} product={product} />
      ))}
    </div>
  );
};

export default CartMain;
