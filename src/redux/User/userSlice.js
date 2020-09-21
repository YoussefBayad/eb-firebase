import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handleUserProfile } from '../../Firebase/utils';

const initialState = null;

// {
//   displayName: 'youssef',
//   userRoles: ['user', 'admin'],
//   photoURL: '/img/headphones-home-page.webp',
// };

//  {
//   displayName: 'youssef bayad',
//   userRoles: ['user', 'admin'],
//   photoURL: '/img/earbuds-home-page.webp',
// };

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
