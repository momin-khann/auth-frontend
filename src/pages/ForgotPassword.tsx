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

  return (
    <CardWrapper headerLabel="Forgot Password">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            disabled={isPending}
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

          <Button disabled={isPending} type="submit" className={"w-full"}>
            Submit
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
export default ForgotPassword;
