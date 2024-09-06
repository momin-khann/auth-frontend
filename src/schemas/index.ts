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
  password: z.string().min(4, {
    message: "Password is required",
  }),
});

export const otpSchema = z.object({
  otp: z.string().length(6, "Verification code must be 6 digits"),
});

export const forgotPassword = z.object({
  email: z.string().email({
    message: "email is required",
  }),
});

export const resetPassword = z.object({
  new_password: z.string().min(4, {
    message: "Password is required",
  }),
  confirm_password: z.string().min(4, {
    message: "Password is required",
  }),
});

export const accountSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  role: z.string().optional(),
  tfa: z.boolean().optional(),
});

export const passwordSchema = z.object({
  password: z.string().optional(),
  confirm_password: z.string().optional(),
});
