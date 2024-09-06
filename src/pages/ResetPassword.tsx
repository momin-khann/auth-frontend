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
import { resetPassword, useAuth } from "@/store/authSlice.ts";
import { ResetSchemaType } from "@/types";
import { useAppDispatch } from "@/store/hooks.ts";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAuth();
  const { token } = useParams();
  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<ResetSchemaType>();

  // 2. Define a submit handler.
  async function onSubmit({ new_password, confirm_password }: ResetSchemaType) {
    if (new_password !== confirm_password) {
      toast.error("passwords are not same");
      return;
    }

    dispatch(resetPassword({ new_password, token }));
    navigate("/sign-in");
  }

  return (
    <CardWrapper headerLabel="Forgot Password">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            disabled={isLoading}
            control={form.control}
            name="new_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="New Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={isLoading}
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
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
export default ResetPassword;
