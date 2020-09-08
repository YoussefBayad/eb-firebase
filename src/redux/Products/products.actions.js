import productsTypes from './products.types';

export const addProductStart = (productData) => ({
  type: productsTypes.ADD_NEW_PRODUCT_START,
  productData,
});

export const fetchProductsStart = () => ({
  type: productsTypes.FETCH_PRODUCTS_START,
});

export const setProducts = (products) => ({
  type: productsTypes.SET_PRODUCTS,
  products,
});

export const deleteProductStart = (productID) => ({
  type: productsTypes.DELETE_PRODUCT_START,
  productID,
});
