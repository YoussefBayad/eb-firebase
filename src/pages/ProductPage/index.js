import React from 'react';

import { useParams } from 'react-router-dom';

import { store } from '../../index';

// component 

import Count from '../../components/ProductCount'

// store 

// style
import "./index.scss"
import AddToCart from '../../components/AddToCart';

const ProductPage = () => {

  // destruct data

  const { id } = useParams();
  const { products , cart} = store.getState();
  const product = products.filter((product) => product.id === Number(id)).[0];

  // check if product in cart destruct count 
  let checkIfProductExist;
  let count;
  if (cart.length > -1) {
    checkIfProductExist = cart.some((item) => item.id === product.id);
    const productInCart = cart.filter((product) => product.id === Number(id));
    productInCart.length > 0 ? count = productInCart.[0].count : count = 0;


  }

  return (
    <div className="product-showcase">
      <div className="product-description">
        <h1>{product.name} </h1>
        <h2>${product.price} usd </h2>
      <div>
      <Count id={product.id} count={count} />
      <AddToCart id={product.id}/>
      </div>
      </div>
      <img src={`/img/${product.name.trim()}.webp`} alt={product.name}/>

    </div>
  );
};

export default ProductPage;
