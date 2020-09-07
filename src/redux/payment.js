/* data */
import data from '../data.json';

const { products } = data;

// action types

const PAYMENT_COMPLETED = 'payment-completed';

// action creators

export const paymentCompleted = () => ({
  type: PAYMENT_COMPLETED,
});

// Reducer

export default function paymentReducer(
  state = {
    products: [...products],
    openCart: false,
    currentUser: null,
  },

  action
) {
  if (action.type === PAYMENT_COMPLETED) {
    // new cart
    const products = state.products.map((product) => {
      return { ...product, count: 0 };
    });
    localStorage.setItem('products', JSON.stringify(products));

    return { ...state, products: [...products] };
  } else {
    return state;
  }
}
