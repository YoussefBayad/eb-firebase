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
      let clickedProduct = action.payload.products.find(
        (product) => product.documentID === action.id
      );
      state.data.push(clickedProduct);
    },
    removeFromCart(state, action) {
      state.data.filter((product) => product.documentID !== action.payload.id);
    },
    increment(state, action) {
      let clickedProduct = state.data.find(
        (product) => product.documentID === action.payload.id
      );
      clickedProduct.count++;
    },
    decrement(state, action) {
      let clickedProduct = state.find(
        (product) => product.documentID === action.payload.id
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
