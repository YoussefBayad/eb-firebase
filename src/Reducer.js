/* data */
import data from './data.json';

/* Reducer */

const Reducer = (state = { ...data, cart: [], openCart: true }, action) => {
  switch (action.type) {
    case 'latest':
      const latest = state.products
        .slice()
        .sort((a, b) => (a.id > b.id ? 1 : -1));
      return { ...state, products: latest };
    case 'lowest':
      const lowest = state.products
        .slice()
        .sort((a, b) => (a.price > b.price ? 1 : -1));
      return { ...state, products: lowest };

    case 'highest':
      const highest = state.products
        .slice()
        .sort((a, b) => (a.price < b.price ? 1 : -1));

      return { ...state, products: highest };
    case 'addToCart':
      const clickedProduct = state.products.filter(
        (product) => product.id === action.id
      );
      return { ...state, cart: [...state.cart, ...clickedProduct] };
    case 'openCart':
      return { ...state, openCart: !state.openCart };
    default:
      return state;
  }
};

export default Reducer;