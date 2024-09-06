import { createAsyncThunk } from "@reduxjs/toolkit";
import {
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
  async (formData) => {
    try {
      await axios.post(`/auth/sign-up`, formData);
    } catch (error) {
      console.error(error);
    }
  },
);

export const loginUser = createAsyncThunk<User, LoginSchemaType>(
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

export const changePassword = createAsyncThunk<User, PasswordSchemaType>(
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
