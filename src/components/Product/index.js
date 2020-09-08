import React from 'react';
import Zoom from 'react-reveal/Zoom';

//style
import './index.scss';

/* component  */
import { Link } from 'react-router-dom';
import AddToCart from '../AddToCart';

const Product = ({ product }) => {
  return (
    <Zoom>
      <div className="product">
        <Link to={`/shop/product/${product.id}`}>
          <img
            src={`/img/${product.name.replace(/\s/g, '')}.webp`}
            alt={product.name.replace(/\s/g, '')}
          />
          <p>{product.name}</p>
          <p className="price">${product.price}</p>
        </Link>
        <AddToCart id={product.id} count={product.count} />
      </div>
    </Zoom>
  );
};

export default Product;
