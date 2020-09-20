import React from 'react';
import Button from '../forms/Button';

const AdminProducts = ({ products, onDeleteProduct }) => {
  return (
    <div className="admin-products">
      {products.map((product) => {
        const { name, price, documentID, photoURL } = product;
        return (
          <div className="admin-product" key={documentID}>
            <img
              className="thumb"
              src={photoURL ? photoURL : `/img/${name.replace(/\s/g, '')}.webp`}
              alt={name}
            />

            <h2>{name}</h2>
            <h2>${price}</h2>
            <Button onClick={() => onDeleteProduct(documentID)}>Delete</Button>
          </div>
        );
      })}
    </div>
  );
};

export default AdminProducts;
