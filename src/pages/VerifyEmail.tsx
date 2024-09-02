import React, { useTransition } from "react";
import CardWrapper from "@/components/wrapper/AuthCardWrapper.tsx";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { otpSchema } from "@/schemas";
import { useAppDispatch } from "@/store/hooks.ts";
import { useAuth, verifyOtp } from "@/store/authSlice.ts";
import { OtpSchemaType } from "@/types";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAuth();
  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<OtpSchemaType>();

  // 2. Define a submit handler.
  function onSubmit(values: OtpSchemaType) {
    dispatch(verifyOtp(values));
    navigate("/dashboard");
  }

  async function handleResendOTP() {}

  return (
    <CardWrapper headerLabel="Verify OTP">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            disabled={isLoading}
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Verification Code</FormLabel>
                <FormControl>
                  <Input placeholder="123456" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className={"w-full grid grid-cols-2 gap-2"}>
            <Button
              disabled={isLoading}
              variant={"outline"}
              type={"button"}
              onClick={handleResendOTP}
              className={"border border-primary"}
            >
              Resend
            </Button>
            <Button disabled={isLoading} type="submit">
              Verify
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
export default VerifyEmail;
