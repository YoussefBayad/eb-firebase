import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handleUserProfile } from '../../Firebase/utils';

const initialState = null;

//{
//   displayName: 'youssef bayad',
//   userRoles: ['user', 'admin'],
// };

// export const fetchUser = createAsyncThunk(
//   'users/fetchUsers',
//   async (userAuth,dispatch) => {
//     if (userAuth) {
//       const userRef = await handleUserProfile(userAuth);
//       userRef.onSnapshot((snapshot) => {
//         dispatch(
//           authChange({
//             id: snapshot.id,
//             ...snapshot.data(),
//           })
//         );
//       });
//     } else {
//       dispatch(authChange(null));
//     }
//   }
// );

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
