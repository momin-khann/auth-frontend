import React from "react";
import CardWrapper from "@/components/wrapper/CardWrapper.tsx";
import { useAuth } from "@/store/authSlice.ts";
import FormError from "@/components/reusable/FormError.tsx";
import FormSuccess from "@/components/reusable/FormSuccess.tsx";
import LoadingSpinner from "@/components/reusable/LoadingSpinner.tsx";

const Admin = () => {
  const { userInfo } = useAuth();

  if (!userInfo) return <LoadingSpinner />;

  if (userInfo.role === "USER") {
    return (
      <CardWrapper label={"🔑 Admin Page"}>
        <FormError message={"You are not allowed to see the content."} />
      </CardWrapper>
    );
  }

  return (
    <CardWrapper label={"🔑 Admin"}>
      <FormSuccess message={"You are allowed to see the content."} />
    </CardWrapper>
  );
};
export default Admin;
