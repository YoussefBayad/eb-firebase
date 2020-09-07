/* data */
import data from '../data.json';

const { products } = data;

// action types
const OPEN_CART = 'openCart';
const REMOVE_FROM_CART = 'removeFromCart';
const INCREMENT = 'incrementCount';
const DECREMENT = 'decrementCount';

// action creators
export const openCart = () => ({
  type: OPEN_CART,
});
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});
export const increment = (id) => ({
  type: INCREMENT,
  id,
});
export const decrement = (id) => ({
  type: DECREMENT,
  id,
});

// Reducer

export default function cartReducer(
  state = {
    products: [...products],
    openCart: false,
    currentUser: null,
  },

  action
) {
  if (action.type === OPEN_CART) {
    return { ...state, openCart: !state.openCart };
  } else if (action.type === REMOVE_FROM_CART) {
    // clicked product
    let clickedProduct = state.products.filter(
      (product) => product.id === action.id
    )[0];

    // reset Count
    clickedProduct = { ...clickedProduct, count: 0 };

    //new cart
    const products = state.products.map((product) => {
      if (product.id === action.id) {
        return clickedProduct;
      }
      return product;
    });
    return { ...state, products: [...products] };
  } else if (action.type === INCREMENT) {
    // clicked product
    let clickedProduct = state.products.filter(
      (product) => product.id === action.id
    )[0];

    // incrementing Count
    const count = clickedProduct.count;
    clickedProduct = { ...clickedProduct, count: count + 1 };

    //new cart
    const products = state.products.map((product) => {
      if (product.id === action.id) {
        return clickedProduct;
      }
      return product;
    });

    return { ...state, products: [...products] };
  } else if (action.type === DECREMENT) {
    // clicked product
    let clickedProduct = state.products.filter(
      (product) => product.id === action.id
    )[0];

    // preventing count from < 0 values
    const count = clickedProduct.count;
    if (count === 1) {
      clickedProduct = { ...clickedProduct, count: 1 };
    } else {
      clickedProduct = { ...clickedProduct, count: count - 1 };
    }

    // new cart
    const products = state.products.map((product) => {
      if (product.id === action.id) {
        return clickedProduct;
      }
      return product;
    });

    return { ...state, products: [...products] };
  } else {
    return state;
  }
}
