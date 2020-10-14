import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import AdminFilter from '../AdminFilter';
import Button from '../forms/Button';

const AdminProducts = ({ products, onDeleteProduct }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <>
    <AdminFilter
          initialState={products}
          products={filteredProducts}
          setProducts={setFilteredProducts}
    />
    
    <motion.div
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="admin-products"
    >
      <AnimatePresence>
        {filteredProducts.map((product) => {
          const { name, price, documentID, photoURL } = product;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ y: 1000, opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="admin-product"
              key={documentID}
            >
              <img
                className="thumb"
                src={
                  photoURL ? photoURL : `/img/${name.replace(/\s/g, '')}.webp`
                }
                alt={name}
              />

              <h2>{name}</h2>
              <h2>${price}</h2>
              <Button onClick={() => onDeleteProduct(product)}>Delete</Button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
    </>
  );
};

export default AdminProducts;
