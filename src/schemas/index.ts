import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const registerSchema = z.object({
  name: z.string().min(2, {
    message: "Minimum 2 characters are required.",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const otpSchema = z.object({
  otp: z.string().length(6, "Verification code must be 6 digits"),
});

export const forgotPassword = z.object({
  newPassword: z.string().min(1, {
    message: "Password is required",
  }),
  confirmPassword: z.string().min(1, {
    message: "Password is required",
  }),
});
