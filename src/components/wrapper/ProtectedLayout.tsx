import React, { Suspense } from "react";
import Navbar from "@/components/Navbar.tsx";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/store/authSlice.ts";
import LoadingSpinner from "@/components/reusable/LoadingSpinner.tsx";

const ProtectedLayout = () => {
  const { isAuthenticated, authStatus, userInfo } = useAuth();

  if (!isAuthenticated && !userInfo && authStatus === "rejected") {
    return <Navigate to={"/sign-in"} replace />;
  }

  if (userInfo && !userInfo.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return (
    <main className="min-h-screen w-full flex flex-col gap-6 items-center justify-center bg-blue-gradient">
      <Navbar />

      {/* All Protected Children Goes here */}
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default ProtectedLayout;
