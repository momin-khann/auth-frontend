import React, { useEffect, useState } from "react";
import CardWrapper from "@/components/wrapper/AuthCardWrapper.tsx";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas";
import { useAppDispatch } from "@/store/hooks.ts";
import { loginUser, useAuth } from "@/store/authSlice.ts";
import { useNavigate } from "react-router-dom";
import { LoginSchemaType } from "@/types";
import toast from "react-hot-toast";
import LoadingSpinner from "@/components/reusable/LoadingSpinner.tsx";

const SignIn = () => {
  const { isLoading, error, isAuthenticated, userInfo } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginSchemaType) {
    dispatch(loginUser(values));
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (isAuthenticated && userInfo) {
      toast.success("Login successful");
      navigate("/dashboard");
    }
  }, [error, isAuthenticated, userInfo]);

  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel={"Don't have an account?"}
      backButtonHref={"/sign-up"}
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            // disabled={isLoading}
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    autoComplete={"off"}
                    placeholder="john.doe@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="">
            <FormField
              // disabled={isLoading}
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete={"off"}
                      placeholder="******"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              onClick={() => navigate("/forgot-password")}
              variant={"link"}
              type={"button"}
              className={"p-0 m-0"}
            >
              Forgot Password?
            </Button>
          </div>

          <Button disabled={isLoading} type="submit" className={"w-full"}>
            Sign In
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
export default SignIn;
