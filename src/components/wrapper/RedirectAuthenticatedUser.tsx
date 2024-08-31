import React from "react";
import { useAuth } from "@/store/authSlice.ts";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const RedirectAuthenticatedUser = ({ children }: Props) => {
  const { isAuthenticated, userInfo } = useAuth();

  if (isAuthenticated && userInfo) {
    return <Navigate to={"/dashboard"} replace />;
  }

  return children;
};
export default RedirectAuthenticatedUser;
