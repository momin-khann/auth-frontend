import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store.ts";
import { axios } from "@/lib/axios.ts";
import {
  AuthState,
  LoginSchemaType,
  OtpSchemaType,
  RegisterSchemaType,
  User,
} from "@/types";
import { useAppSelector } from "@/store/hooks.ts";

const registerUser = createAsyncThunk<unknown, RegisterSchemaType>(
  "sign-up",
  async (formData) => {
    try {
      await axios.post(`/auth/sign-up`, formData);
    } catch (error) {
      console.error(error);
    }
  },
);

const loginUser = createAsyncThunk<User, LoginSchemaType>(
  "sign-in",
  async (formData) => {
    try {
      const { data } = await axios.post(`/auth/sign-in`, formData);
      if (!data) return null;
      return data.data;
    } catch (error) {
      console.error(error);
    }
  },
);

const logout = createAsyncThunk("/sign-out", async () => {
  try {
    await axios.post("/auth/sign-out");
  } catch (error) {
    console.error(error);
  }
});

const checkAuth = createAsyncThunk("/check-auth", async () => {
  try {
    const { data } = await axios.get("/auth/check-auth");
    return data.data;
  } catch (error) {
    console.error("error: ", error.message);
  }
});

const verifyOtp = createAsyncThunk<any, OtpSchemaType>(
  "/verify-otp",
  async (otp) => {
    try {
      const { data } = await axios.post("/auth/verify-email", otp);
      return data.data;
    } catch (error) {
      console.error("error: ", error.message);
    }
  },
);

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
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error signing up";
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.error = null;
        state.userInfo = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error logging in";
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
      });
  },
});

export const auth = (state: RootState) => state.auth;
export { registerUser, loginUser, logout, checkAuth, verifyOtp };

export const useAuth = () => useAppSelector(auth);

export default authSlice.reducer;
