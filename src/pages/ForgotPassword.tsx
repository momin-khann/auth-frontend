import React from "react";
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
import { forgotPassword, useAuth } from "@/store/authSlice.ts";
import { ForgotSchemaType } from "@/types";
import { useAppDispatch } from "@/store/hooks.ts";

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAuth();

  // 1. Define your form.
  const form = useForm<ForgotSchemaType>();

  // 2. Define a submit handler.
  async function onSubmit(email: ForgotSchemaType) {
    dispatch(forgotPassword(email));
  }

  return (
    <CardWrapper headerLabel="Forgot Password">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            disabled={isLoading}
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Email"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isLoading} type="submit" className={"w-full"}>
            Submit
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
export default ForgotPassword;
