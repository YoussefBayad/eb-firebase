import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartOpen: false,
  data: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart(state, action) {
      state.data.push(action.payload);
    },
    removeFromCart(state, action) {
      state.data = state.data.filter(
        (product) => product.documentID !== action.payload
      );
    },
    increment(state, action) {
      const clickedProduct = state.data.find(
        (product) => product.documentID === action.payload
      );
      clickedProduct.count++;
    },
    decrement(state, action) {
      const clickedProduct = state.data.find(
        (product) => product.documentID === action.payload
      );
      // preventing count from negative value
      if (clickedProduct.count === 1) return;
      else {
        clickedProduct.count--;
      }
    },
  },
});

export const {
  openCart,
  addToCart,
  increment,
  decrement,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
