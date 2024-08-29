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
import { forgotPassword } from "@/schemas";

const ForgotPassword = () => {
  const [isPending, startTransition] = useTransition();

  // 1. Define your form.
  const form = useForm<z.infer<typeof forgotPassword>>();

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof forgotPassword>) {}

  async function handleResendOTP() {
    // const res = await resendOtp(email);
    // res.success ? toast.success(res.message) : toast.error(res.message);
  }

  return (
    <CardWrapper headerLabel="Reset Password">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            disabled={isPending}
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input placeholder="New Password" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={isPending}
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm New Password"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isPending} type="submit" className={"w-full"}>
            Set New Password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
export default ForgotPassword;
