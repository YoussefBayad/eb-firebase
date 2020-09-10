import React from 'react';

import Product from '../Product';
import Fade from 'react-reveal/Fade';
import spinner from '../../assets/icon/spinner.gif';

import './index.scss';

const Products = ({ products }) => {
  return (
    <Fade bottom>
      <div className="products">
        {products &&
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        {!products && (
          <img
            src={spinner}
            alt="Loading ..."
            style={{ margin: '20rem auto' }}
          />
        )}
      </div>
    </Fade>
  );
};

export default Products;
