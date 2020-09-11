import productTypes from './products.types';

// action types
const {
  SET_PRODUCTS,
  LATEST,
  HIGHEST,
  LOWEST,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
  PAYMENT_COMPLETED,
} = productTypes;

// Reducer

export default function productReducer(
  state = null,

  action
) {
  if (action.type === SET_PRODUCTS) {
    return [...action.products];
  } else if (action.type === LATEST) {
    const latest = state
      .slice()
      .sort((a, b) => (a.documentID > b.documentID ? 1 : -1));
    return [...latest];
  } else if (action.type === LOWEST) {
    const lowest = state.slice().sort((a, b) => (a.price > b.price ? 1 : -1));
    return [...lowest];
  } else if (action.type === HIGHEST) {
    const highest = state.slice().sort((a, b) => (a.price < b.price ? 1 : -1));

    return [...highest];
  } else if (action.type === REMOVE_FROM_CART) {
    // clicked product
    let clickedProduct = state.filter(
      (product) => product.documentID === action.id
    )[0];

    // reset Count
    clickedProduct = { ...clickedProduct, count: 0 };

    //new cart
    const products = state.map((product) => {
      if (product.documentID === action.id) {
        return clickedProduct;
      }
      return product;
    });
    return [...products];
  } else if (action.type === INCREMENT) {
    // clicked product
    let clickedProduct = state.filter(
      (product) => product.documentID === action.id
    )[0];
    console.log(clickedProduct);
    // incrementing Count
    const count = clickedProduct.count;
    clickedProduct = { ...clickedProduct, count: count + 1 };

    //new cart
    const products = state.map((product) => {
      if (product.documentID === action.id) {
        return clickedProduct;
      }
      return product;
    });

    return [...products];
  } else if (action.type === DECREMENT) {
    // clicked product
    let clickedProduct = state.filter(
      (product) => product.documentID === action.id
    )[0];

    // preventing count from < 0 values
    const count = clickedProduct.count;
    if (count === 1) {
      clickedProduct = { ...clickedProduct, count: 1 };
    } else {
      clickedProduct = { ...clickedProduct, count: count - 1 };
    }

    // new cart
    const products = state.map((product) => {
      if (product.documentID === action.id) {
        return clickedProduct;
      }
      return product;
    });

    return [...products];
  } else if (action.type === PAYMENT_COMPLETED) {
    // new cart
    const products = state.map((product) => {
      return { ...product, count: 0 };
    });
    localStorage.setItem('products', JSON.stringify(products));

    return [...products];
  } else {
    return state;
  }
}
