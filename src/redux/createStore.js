import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import productsReducer from './Products/productsSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});
