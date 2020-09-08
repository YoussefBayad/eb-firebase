// action types
export const OPEN_CART = 'openCart';

// Reducer

export default function openCartReducer(
  state = false,

  action
) {
  if (action.type === OPEN_CART) {
    return !state;
  } else {
    return state;
  }
}
