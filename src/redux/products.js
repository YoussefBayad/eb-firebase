// action types

export const LATEST = 'latest';
export const HIGHEST = 'highest';
export const LOWEST = 'lowest';
export const REMOVE_FROM_CART = 'removeFromCart';
export const INCREMENT = 'incrementCount';
export const DECREMENT = 'decrementCount';

export const PAYMENT_COMPLETED = 'payment-completed';

// action creators

//

// Reducer

export default function productReducer(
  state = null,

  action
) {
  if (action.type === LATEST) {
    const latest = state.slice().sort((a, b) => (a.id > b.id ? 1 : -1));
    return [...latest];
  } else if (action.type === LOWEST) {
    const lowest = state.slice().sort((a, b) => (a.price > b.price ? 1 : -1));
    return [...lowest];
  } else if (action.type === HIGHEST) {
    const highest = state.slice().sort((a, b) => (a.price < b.price ? 1 : -1));

    return [...highest];
  } else if (action.type === REMOVE_FROM_CART) {
    // clicked product
    let clickedProduct = state.filter((product) => product.id === action.id)[0];

    // reset Count
    clickedProduct = { ...clickedProduct, count: 0 };

    //new cart
    const products = state.map((product) => {
      if (product.id === action.id) {
        return clickedProduct;
      }
      return product;
    });
    return [...products];
  } else if (action.type === INCREMENT) {
    // clicked product
    let clickedProduct = state.filter((product) => product.id === action.id)[0];

    // incrementing Count
    const count = clickedProduct.count;
    clickedProduct = { ...clickedProduct, count: count + 1 };

    //new cart
    const products = state.map((product) => {
      if (product.id === action.id) {
        return clickedProduct;
      }
      return product;
    });

    return [...products];
  } else if (action.type === DECREMENT) {
    // clicked product
    let clickedProduct = state.filter((product) => product.id === action.id)[0];

    // preventing count from < 0 values
    const count = clickedProduct.count;
    if (count === 1) {
      clickedProduct = { ...clickedProduct, count: 1 };
    } else {
      clickedProduct = { ...clickedProduct, count: count - 1 };
    }

    // new cart
    const products = state.map((product) => {
      if (product.id === action.id) {
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
