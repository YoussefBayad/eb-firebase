import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayName: 'youssef',
  userRoles: ['user', 'admin'],
  photoURL: '/img/headphones-home-page.webp',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authChange(state, action) {
      return (state = action.payload);
    },
  },
});

export const { authChange } = userSlice.actions;

export default userSlice.reducer;
