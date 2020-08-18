/* data */
import data from './data.json';

/* Reducer */

const Reducer = (state = { ...data, cart: [], openCart: false }, action) => {
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
      const product = clickedProduct[0];
      return {
        ...state,
        cart: [...state.cart, { ...product, count: 1 }],
      };
    case 'openCart':
      return { ...state, openCart: !state.openCart };
    case 'incrementCount':
      //   const clickedProduct = state.products.filter(
      //     (product) => product.id === action.id
      //   ).[0];
      // const  products= state.products.filter(product => product.id !== action.id);
      //   // console.log(products)
      //   console.log(state)
      console.log('increment');
      return state;
    default:
      return state;
  }
};

export default Reducer;
