import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, StoreSlice } from '../../const';
import { UserProcess } from '../../types/state';
import { fetchUserStatus, loginUser, logoutUser, registrationUser, uploadAvatarUser } from '../action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: null,
  isUserStatusLoading: false,
  isRegistration: false,
};

export const userProcess = createSlice({
  name: StoreSlice.UserProcess,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserStatus.pending, (state) => {
        state.isUserStatusLoading = true;
      })
      .addCase(fetchUserStatus.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isUserStatusLoading = false;
      })
      .addCase(fetchUserStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isUserStatusLoading = false;
      })
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.isRegistration = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isRegistration = false;
      })
      .addCase(uploadAvatarUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  }
});
