/* data */
import data from '../data.json';

const { products } = data;

// action types

const LATEST = 'latest';
const HIGHEST = 'highest';
const LOWEST = 'lowest';

// action creators

export const latest = () => ({
  type: LATEST,
});
export const lowest = () => ({
  type: LOWEST,
});
export const highest = () => ({
  type: HIGHEST,
});

// Reducer

export default function sortReducer(
  state = {
    products: [...products],
    openCart: false,
    currentUser: null,
  },

  action
) {
  if (action.type === LATEST) {
    const latest = state.products
      .slice()
      .sort((a, b) => (a.id > b.id ? 1 : -1));
    return { ...state, products: latest };
  } else if (action.type === LOWEST) {
    const lowest = state.products
      .slice()
      .sort((a, b) => (a.price > b.price ? 1 : -1));
    return { ...state, products: lowest };
  } else if (action.type === HIGHEST) {
    const highest = state.products
      .slice()
      .sort((a, b) => (a.price < b.price ? 1 : -1));

    return { ...state, products: highest };
  } else {
    return state;
  }
}
