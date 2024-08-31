import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import React, { useEffect } from "react";
import { checkAuth, useAuth } from "@/store/authSlice.ts";
import { useAppDispatch } from "@/store/hooks.ts";
import Loading from "@/components/reusable/Loading.tsx";

function App() {
  const dispatch = useAppDispatch();
  const { userInfo, authStatus } = useAuth();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  if (authStatus === "pending") return <Loading />;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <main className="min-h-screen flex flex-col items-center justify-center bg-blue-gradient">
        <Outlet />
      </main>
    </>
  );
}

export default App;
