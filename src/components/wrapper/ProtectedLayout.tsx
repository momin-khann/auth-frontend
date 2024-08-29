import React, { Suspense } from "react";
import Navbar from "@/components/Navbar.tsx";
import { Outlet } from "react-router-dom";
import Loading from "@/components/reusable/Loading.tsx";

const ProtectedLayout = () => {
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 items-center justify-center bg-blue-gradient">
      <Navbar />

      {/* All Protected Children Goes here */}
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default ProtectedLayout;
