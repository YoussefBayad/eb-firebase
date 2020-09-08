import productTypes from './products.types';

const INITIAL_STATE = {
  products: [],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  if (productTypes.SET_PRODUCTS) {
    return {
      ...state,
      products: action.products,
    };
  } else {
    return state;
  }
};

export default productsReducer;
