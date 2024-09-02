import { createBrowserRouter, Navigate } from "react-router-dom";
import Error from "@/components/reusable/Error.tsx";
import Home from "@/pages/Home.tsx";
import SignIn from "@/pages/SignIn.tsx";
import App from "@/App.tsx";
import VerifyEmail from "@/pages/VerifyEmail.tsx";
import SignUp from "@/pages/SignUp.tsx";
import ForgotPassword from "@/pages/ForgotPassword.tsx";
import Dashboard from "@/pages/Dashboard.tsx";
import Admin from "@/pages/Admin.tsx";
import Settings from "@/pages/Settings.tsx";
import ProtectedLayout from "@/components/wrapper/ProtectedLayout.tsx";
import RedirectAuthenticatedUser from "@/components/wrapper/RedirectAuthenticatedUser.tsx";

// Define routes
const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "sign-up",
    element: (
      <RedirectAuthenticatedUser>
        <SignUp />
      </RedirectAuthenticatedUser>
    ),
  },
  {
    path: "sign-in",
    element: (
      <RedirectAuthenticatedUser>
        <SignIn />
      </RedirectAuthenticatedUser>
    ),
  },
  {
    path: "forgot-password",
    element: (
      <RedirectAuthenticatedUser>
        <ForgotPassword />
      </RedirectAuthenticatedUser>
    ),
  },
  /* Catch All Unknown Routes*/
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
];

const protectedRoutes = [
  {
    path: "",
    element: <Dashboard />,
  },
  {
    path: "admin",
    element: <Admin />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: "*",
    element: <Navigate to={"/dashboard"} />,
  },
];

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
    children: [
      ...publicRoutes,
      {
        path: "/dashboard",
        element: <ProtectedLayout />,
        children: protectedRoutes,
      },
    ],
  },
]);
