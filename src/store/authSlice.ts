import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store.ts";
import { axios } from "@/lib/axios.ts";
import { AuthState, LoginSchemaType, RegisterSchemaType, User } from "@/types";

const registerUser = createAsyncThunk<User, RegisterSchemaType>(
  "auth/sign-up",
  async (formData) => {
    try {
      const response = await axios.post(`auth/sign-up`, formData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
);

const loginUser = createAsyncThunk<User, LoginSchemaType>(
  "auth/sign-in",
  async (formData) => {
    try {
      const { data } = await axios.post(`auth/sign-in`, formData);
      if (!data) return null;
      return data.data;
    } catch (error) {
      console.error(error);
    }
  },
);

const logout = createAsyncThunk("auth/sign-out", async (data) => {
  try {
    // await axios.post();
  } catch (error) {
    console.error(error);
  }
});

const checkAuth = createAsyncThunk("check-auth", async (data, error) => {
  try {
  } catch (error) {
    console.error("error: ");
  }
});

/* Initial State */
const initialState: AuthState = {
  isLoading: false,
  userInfo: [],
  status: "idle",
  error: null,
  isAuthenticated: false,
  isCheckingAuth: false,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userInfo.push(action.payload);
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
        state.userInfo.push(action.payload);
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
        state.userInfo = [];
        state.isAuthenticated = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state) => {
        state.error = "Error logging out";
        state.isLoading = false;
      });
  },
});

export const authReducer = (state: RootState) => state.auth;
export { registerUser, loginUser, logout };

export default counterSlice.reducer;
