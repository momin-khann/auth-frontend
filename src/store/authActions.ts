import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ChangePasswordType,
  ForgotSchemaType,
  LoginSchemaType,
  OtpSchemaType,
  PasswordSchemaType,
  RegisterSchemaType,
  ResetPasswordType,
  User,
} from "@/types";
import { axios } from "@/lib/axios.ts";

export const registerUser = createAsyncThunk<unknown, RegisterSchemaType>(
  "sign-up",
  async (formData, { rejectWithValue }) => {
    try {
      await axios.post(`/auth/sign-up`, formData);
    } catch (error) {
      return rejectWithValue(error.response?.data?.errorMessage);
    }
  },
);

export const loginUser = createAsyncThunk<User, LoginSchemaType>(
  "sign-in",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/auth/sign-in`, formData);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.errorMessage);
    }
  },
);

export const logout = createAsyncThunk("/sign-out", async () => {
  try {
    await axios.post("/auth/sign-out");
  } catch (error) {
    console.error(error);
  }
});

export const checkAuth = createAsyncThunk("/check-auth", async () => {
  try {
    const { data } = await axios.get("/auth/check-auth");
    return data.data;
  } catch (error) {
    console.error("error: ", error.message);
  }
});

export const verifyOtp = createAsyncThunk<User, OtpSchemaType>(
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

export const forgotPassword = createAsyncThunk<unknown, ForgotSchemaType>(
  "/forgot-password",
  async (email) => {
    try {
      await axios.post("/auth/forgot-password", email);
    } catch (error) {
      console.error("error: ", error.message);
    }
  },
);

export const resetPassword = createAsyncThunk<unknown, ResetPasswordType>(
  "/reset-password",
  async (formData) => {
    const { token, new_password } = formData;
    try {
      const { data } = await axios.post(`/auth/reset-password/${token}`, {
        new_password,
      });
    } catch (error) {
      console.error("error: ", error.message);
    }
  },
);

export const changePassword = createAsyncThunk<User, ChangePasswordType>(
  "/change-password",
  async (formData) => {
    const { id, new_password } = formData;
    try {
      const { data } = await axios.post(`/user/change-password/${id}`, {
        new_password,
      });
      return data.data;
    } catch (error) {
      console.error("error: ", error.message);
    }
  },
);

export const updateProfileSettings = createAsyncThunk<User, PasswordSchemaType>(
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
