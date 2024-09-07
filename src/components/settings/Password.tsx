import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordSchemaType } from "@/types";
import { passwordSchema } from "@/schemas";
import { useAuth } from "@/store/authSlice.ts";
import { useAppDispatch } from "@/store/hooks.ts";
import { changePassword } from "@/store/authActions.ts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  const form = useForm<PasswordSchemaType>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

  function onSubmit({ new_password, confirm_password }: PasswordSchemaType) {
    if (new_password !== confirm_password) {
      toast.error("passwords are not same");
      return;
    }

    dispatch(changePassword({ new_password, id: userInfo._id }));
    navigate("/dashboard");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-4"}>
        <FormField
          // disabled={isLoading}
          control={form.control}
          name="new_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input
                  autoComplete={"off"}
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
          // disabled={isLoading}
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  autoComplete={"off"}
                  placeholder="Confirm Password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type={"submit"}>Save</Button>
      </form>
    </Form>
  );
};
export default Password;
