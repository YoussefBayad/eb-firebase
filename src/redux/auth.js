/* data */
import data from '../data.json';

const { products } = data;

// action types

const AUTH = 'auth';

// action creators

export const auth = (currentUser) => ({
  type: AUTH,
  currentUser,
});

// Reducer

export default function authReducer(
  state = {
    products: [...products],
    openCart: false,
    currentUser: null,
  },

  action
) {
  if (action.type === AUTH) {
    return { ...state, currentUser: action.currentUser };
  } else {
    return state;
  }
}
