import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AddToCart from '../AddToCart';
import './index.scss';

const Product = ({ product }) => {
  return (
    <motion.div whileTap={{ scale: 0.9 }} animate className="product">
      <Link to={`/shop/product/${product.documentID}`}>
        <img
          src={
            product.photoURL
              ? product.photoURL
              : `/img/${product.name.replace(/\s/g, '')}.webp`
          }
          alt={product.name.replace(/\s/g, '')}
        />
        <p>{product.name}</p>
        <p className="price">${product.price}</p>
      </Link>
      <AddToCart product={product} />
    </motion.div>
  );
};

export default Product;
