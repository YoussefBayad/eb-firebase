import React from 'react';
import Product from '../Product';
import './index.scss';
const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
