/* data */
import data from './data.json';

const { products } = data;
/* Reducer */

const Reducer = (state = products, action) => {
  switch (action.type) {
    case 'all':
      return state;
    case 'lowest':
      const lowest = state.slice().sort((a, b) => (a.price > b.price ? 1 : -1));
      console.log(lowest);
      return { lowest };

    case 'highest':
      const highest = state
        .slice()
        .sort((a, b) => (a.price < b.price ? 1 : -1));
      console.log(highest);
      return { highest };
    default:
      return state;
  }
};

export default Reducer;
