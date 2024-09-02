import { z } from "zod";
import {
  accountSchema,
  loginSchema,
  otpSchema,
  passwordSchema,
  registerSchema,
} from "@/schemas";

export interface ApiResponse {
  success: boolean;
  message: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

export interface AuthState {
  isLoading: boolean;
  userInfo: User | null;
  error: string | null;
  isAuthenticated: boolean;
  authStatus: "idle" | "pending" | "success" | "rejected";
}

export interface UserState {
  isLoading: boolean;
  userInfo: User | null;
  error: string | null;
}

export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;
export type AccountSchemaType = z.infer<typeof accountSchema>;
export type PasswordSchemaType = z.infer<typeof passwordSchema>;
export type OtpSchemaType = z.infer<typeof otpSchema>;
