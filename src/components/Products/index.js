import React from 'react';
import Product from '../Product';
import Fade from 'react-reveal/Fade';

import './index.scss';

const Products = ({ products }) => {
  return (
    <Fade bottom>
      <div className="products">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </Fade>
  );
};

export default Products;
