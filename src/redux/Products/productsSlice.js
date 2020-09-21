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

// if it didn't work use try and catch in admin page just like dan did
//first cancel firestore listener cause might the cause you can go direct and remove product rom th ui since it get removed /////from the store or maybe the function gonna return to yuo to product deleted and do the same
//lite on add delete spinner and error  in admin relay on  a local state a instead of the global one

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product) => {
    try {
      var response = await firestore.collection('products').add(product);
    } catch (err) {
      console.log(err);
    }
    return response;
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (documentID) => {
    try {
      var response = await firestore
        .collection('products')
        .doc(documentID)
        .delete();
    } catch (err) {
      console.log(err);
    }
    return response;
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
    [addProduct.pending]: (state, action) => {
      state.status = 'loading';
      console.log('add product pending');
      // state.error = null;
    },
    [addProduct.fulfilled]: (state, action) => {
      // if (state.status === 'loading') {
      //   state.status = 'succeeded';
      // console.log(action.payload);
    },

    [addProduct.rejected]: (state, action) => {
      // console.log(action);
      // if (state.status === 'loading') {
      //   state.status = 'failed';
      //   state.error = 'failed to add product try again';
      // }
    },
    [deleteProduct.pending]: (state, action) => {
      state.status = 'loading';
      console.log('delete product pending');
    },
    [deleteProduct.fulfilled]: (state, action) => {
      // if (state.status === 'loading') {
      //   state.status = 'succeeded';
      // }
      console.log(action.payload);
    },
    [deleteProduct.rejected]: (state, action) => {
      // console.log(action);
      // if (state.status === 'loading') {
      //   state.status = 'failed';
      //   state.error = 'failed to delete product try again';
      // }
    },
  },
});

export const { latest, lowest, highest } = productsSlice.actions;

export default productsSlice.reducer;
