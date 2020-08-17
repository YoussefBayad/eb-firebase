/* data */
import data from './data.json';

const { products } = data;
/* Reducer */

const Reducer = (state = products, action) => {
  switch (action.type) {
    case 'latest':
      const latest = state.slice().sort((a, b) => (a.id > b.id ? 1 : -1));
      return latest;

    case 'lowest':
      const lowest = state.slice().sort((a, b) => (a.price > b.price ? 1 : -1));
      return lowest;

    case 'highest':
      const highest = state
        .slice()
        .sort((a, b) => (a.price < b.price ? 1 : -1));

      return highest;
    default:
      return state;
  }
};

export default Reducer;
