import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store.ts";
import { PasswordSchemaType, User, UserState } from "@/types";
import { useAppSelector } from "@/store/hooks.ts";
import { axios } from "@/lib/axios.ts";

const changePassword = createAsyncThunk<User, PasswordSchemaType>(
  "/change-password",
  async (formData) => {
    try {
      const { data } = await axios.post("/user/change-password");
      return data.data;
    } catch (error) {
      console.error("error: ", error.message);
    }
  },
);

const updateProfileSettings = createAsyncThunk<User, PasswordSchemaType>(
  "/profile-settings",
  async (formData) => {
    try {
      const { data } = await axios.post("/user/update-profile");
      return data.data;
    } catch (error) {
      console.error("error: ", error.message);
    }
  },
);

/* Initial State */
const initialState: UserState = {
  isLoading: false,
  userInfo: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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

export const user = (state: RootState) => state.user;
export {};

export const useUser = () => useAppSelector(user);

export default userSlice.reducer;
