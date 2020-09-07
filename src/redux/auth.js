// action types

const AUTH = 'auth';

// action creators

export const auth = (currentUser) => ({
  type: AUTH,
  currentUser,
});

// Reducer

export default function authReducer(
  state = null,

  action
) {
  if (action.type === AUTH) {
    return action.currentUser;
  } else {
    return state;
  }
}
