import React from 'react';

import Product from '../Product';
import Fade from 'react-reveal/Fade';
import spinner from '../../assets/icon/spinner.gif';

import './index.scss';

const Products = ({ data, status }) => {
  return (
    <Fade bottom>
      <div className="products">
        {status === 'succeeded' &&
          data.map((product) => (
            <Product product={product} key={product.documentID} />
          ))}
        {status === 'loading' && (
          <img
            src={spinner}
            alt="Loading ..."
            style={{ margin: '20rem auto' }}
          />
        )}
        {status === 'failed' && <h1>Failed Reload </h1>}
      </div>
    </Fade>
  );
};

export default Products;
