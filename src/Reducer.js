/* data */
import data from './data.json';

/* Reducer */

const Reducer = (
  state = {
    ...data,
    cart: [
      {
        id: 1,
        name: 'indy fuel true wireless earbuds',
        price: 119.99,
        category: 'Earbuds',
        wireless: 'true',
      },
    ],
    openCart: true,
  },
  action
) => {
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
    case 'removeFromCart':
      const newCart = state.cart.filter((product) => product.id !== action.id);
      console.log(newCart);
      return { ...state, cart: newCart };

    case 'incrementCount':
      //   const clickedProduct = state.products.filter(
      //     (product) => product.id === action.id
      //   ).[0];
      // const  products= state.products.filter(product => product.id !== action.id);
      //   // console.log(products)
      //   console.log(state)
      return state;
    case 'decrementCount':
      return state;
    case 'openCart':
      return { ...state, openCart: !state.openCart };
    default:
      return state;
  }
};

export default Reducer;
