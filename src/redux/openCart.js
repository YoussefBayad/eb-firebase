import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const openCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart(state) {
      state = !state;
    },
  },
});

export const { openCart } = openCartSlice.actions;
