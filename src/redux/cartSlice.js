import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart(state) {
      return (state = !state);
    },
  },
});

export const { openCart } = cartSlice.actions;
export default cartSlice.reducer;
