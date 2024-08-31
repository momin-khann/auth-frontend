import { z } from "zod";
import { loginSchema, registerSchema } from "@/schemas";

export interface ApiResponse {
  success: boolean;
  message: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

export interface AuthState {
  isLoading: boolean;
  userInfo: User[];
  status: "idle" | "pending" | "succeeded" | "rejected";
  error: string | null;
  isAuthenticated: boolean;
  isCheckingAuth: boolean;
}

export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;
