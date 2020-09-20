import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { firestore } from '../../Firebase/utils';

const initialState = {
  data: [],
  status: 'succeeded',
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    let productsRef = firestore.collection('products');
    let productsCollection = await productsRef
      .orderBy('createdAt', 'desc')
      .get();
    let products = [];
    for (const doc of productsCollection.docs) {
      products.push({ ...doc.data(), documentID: doc.id });
    }
    return products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    latest(state) {
      state.data.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    },
    lowest(state) {
      state.data.sort((a, b) => (a.price > b.price ? 1 : -1));
    },
    highest(state) {
      state.data.sort((a, b) => (a.price < b.price ? 1 : -1));
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      if (state.status === 'loading') {
        state.data = action.payload;
        console.log(action.payload);
        state.status = 'succeeded';
      }
    },
    [fetchProducts.rejected]: (state, action) => {
      if (state.status === 'loading') {
        state.status = 'failed';
        state.error = 'Failed Reload';
      }
    },
  },
});

export const { latest, lowest, highest } = productsSlice.actions;

export default productsSlice.reducer;
