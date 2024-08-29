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

const VerifyEmail = () => {
  const [isPending, startTransition] = useTransition();

  // 1. Define your form.
  const form = useForm<z.infer<typeof otpSchema>>();

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof otpSchema>) {}

  async function handleResendOTP() {
    // const res = await resendOtp(email);
    // res.success ? toast.success(res.message) : toast.error(res.message);
  }

  return (
    <CardWrapper headerLabel="Verify OTP">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            disabled={isPending}
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

          <div className={"flex gap-2"}>
            <Button
              disabled={isPending}
              variant={"outline"}
              type={"button"}
              onClick={handleResendOTP}
              className={"w-full"}
            >
              Resend
            </Button>
            <Button disabled={isPending} type="submit" className={"w-full"}>
              Verify
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
export default VerifyEmail;
