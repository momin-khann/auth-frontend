import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store.ts";
import { useAppSelector } from "@/store/hooks.ts";
import { AuthState } from "@/types";
import {
  registerUser,
  loginUser,
  logout,
  checkAuth,
  verifyOtp,
  forgotPassword,
  resetPassword,
  changePassword,
  updateProfileSettings,
} from "./authActions";

/* Initial State */
const initialState: AuthState = {
  isLoading: false,
  userInfo: null,
  error: null,
  isAuthenticated: false,
  authStatus: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string) || "Error signing up";
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userInfo = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string) || "Error logging in";
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userInfo = null;
        state.isAuthenticated = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.error = "Error logging out";
      })
      .addCase(checkAuth.pending, (state) => {
        state.authStatus = "pending";
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authStatus = "rejected";
        if (action.payload) {
          state.userInfo = action.payload;
          state.isAuthenticated = true;
          state.authStatus = "success";
        }
      })
      .addCase(checkAuth.rejected, (state) => {
        state.error = "Error checking auth";
        state.authStatus = "rejected";
        state.isAuthenticated = false;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
        state.authStatus = "pending";
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
        state.isAuthenticated = true;
        state.authStatus = "success";
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.authStatus = "rejected";
        state.error = state.error =
          action.error.message || "error while verification";
      })
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = state.error =
          action.error.message || "error while verification";
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = state.error =
          action.error.message || "error while verification";
      })
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "error changing password";
      })
      .addCase(updateProfileSettings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfileSettings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(updateProfileSettings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "error updating profile settings";
      });
  },
});

export const auth = (state: RootState) => state.auth;
export {
  registerUser,
  loginUser,
  logout,
  checkAuth,
  verifyOtp,
  forgotPassword,
  resetPassword,
};

export const useAuth = () => useAppSelector(auth);

export default authSlice.reducer;
