/* data */
import data from './data.json';

// assigning products

let products;
const localStorageProducts = JSON.parse(localStorage.getItem('products'));
if (localStorageProducts !== null) {
  products = localStorageProducts;
} else {
  products = data.products;
}

/* Reducer */

const Reducer = (
  // state
  state = {
    products: [...products],

    openCart: false,
    currentUser: null,
  },

  action
) => {
  /* sort */

  if (action.type === 'latest') {
    const latest = state.products
      .slice()
      .sort((a, b) => (a.id > b.id ? 1 : -1));
    return { ...state, products: latest };
  } else if (action.type === 'lowest') {
    const lowest = state.products
      .slice()
      .sort((a, b) => (a.price > b.price ? 1 : -1));
    return { ...state, products: lowest };
  } else if (action.type === 'highest') {
    const highest = state.products
      .slice()
      .sort((a, b) => (a.price < b.price ? 1 : -1));

    return { ...state, products: highest };
  } else if (action.type === 'removeFromCart') {
    /* remove from cart */

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
  } else if (action.type === 'incrementCount') {
    /* increment and decrement */
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
  } else if (action.type === 'decrementCount') {
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
  } else if (action.type === 'payment-completed') {
    /* payment completed */
    // new cart
    const products = state.products.map((product) => {
      return { ...product, count: 0 };
    });
    localStorage.setItem('products', JSON.stringify(products));

    return { ...state, products: [...products] };
  } else if (action.type === 'openCart') {
    /* open Cart */
    return { ...state, openCart: !state.openCart };
  } else if (action.type === 'auth') {
    /* auth */
    return { ...state, currentUser: action.currentUser };
  } else {
    return state;
  }
};

export default Reducer;
