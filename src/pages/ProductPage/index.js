import React from 'react';
import { useParams } from 'react-router-dom';
import { store } from '../../index';
const ProductPage = () => {
  const { id } = useParams();
  const { products } = store.getState();
  const product = products.filter((product) => product.id === Number(id)).[0];
  return (
    <div>
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
    </div>
  );
};

export default ProductPage;
