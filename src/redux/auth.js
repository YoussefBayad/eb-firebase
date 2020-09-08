// action types

const AUTH = 'auth';

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
