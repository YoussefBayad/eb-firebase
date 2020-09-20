import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { firestore } from '../../Firebase/utils';

const initialState = {
  data: [
    {
      photoURL: null,
      name: 'Uproar Wireless Headphone',
      price: 49.99,
      category: 'Headphone',
      wireless: 'true',
      wirelessCharging: 'false',
      totalCharge: '24',
      waterProof: 'false',
      fullControl: 'true',
      eitherBudSolo: 'false',
      tile: 'true',
      count: 0,
    },
    {
      photoURL: null,
      name: 'Wild Indy™ Evo True Wireless Earbuds with Print',
      price: 89.99,
      category: 'Earbuds',
      wireless: 'true',
      wirelessCharging: 'true',
      totalCharge: '30',
      waterProof: 'true',
      fullControl: 'true',
      eitherBudSolo: 'false',
      tile: 'true',
      count: 0,
    },
    {
      photoURL: null,
      name: 'Venue Noise Canceling Wireless Headphone',
      price: 119.99,
      category: 'Headphone',
      wireless: 'true',
      wirelessCharging: 'false',
      totalCharge: '30',
      waterProof: 'false',
      fullControl: 'true',
      eitherBudSolo: 'false',
      tile: 'true',
      count: 0,
    },
    {
      photoURL: null,
      name: 'Vert Clip-Anywhere Wireless Earbuds',
      price: 69.99,
      category: 'Earbuds',
      wireless: 'true',
      wirelessCharging: 'true',
      totalCharge: '30',
      waterProof: 'false',
      fullControl: 'true',
      eitherBudSolo: 'true',
      tile: 'true',
      count: 0,
    },
  ],
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
      if (action.payload.length === 0) {
        state.status = 'failed';
        state.error = 'Failed Reload';
      }
      if (state.status === 'loading') {
        state.data = action.payload;
        state.status = 'succeeded';
      }
    },
    [fetchProducts.rejected]: (state, action) => {
      console.log(action);
      if (state.status === 'loading') {
        state.status = 'failed';
        state.error = 'Failed Reload';
      }
    },
  },
});

export const { latest, lowest, highest } = productsSlice.actions;

export default productsSlice.reducer;
