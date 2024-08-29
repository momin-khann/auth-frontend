import { createBrowserRouter } from "react-router-dom";
import Error from "@/components/reusable/Error.tsx";
import Home from "@/pages/Home.tsx";
import SignIn from "@/pages/SignIn.tsx";
import App from "@/App.tsx";
import VerifyEmail from "@/pages/VerifyEmail.tsx";
import SignUp from "@/pages/SignUp.tsx";
import ResetPassword from "@/pages/ResetPassword.tsx";
import Dashboard from "@/pages/Dashboard.tsx";
import Admin from "@/pages/Admin.tsx";
import Settings from "@/pages/Settings.tsx";
import ProtectedLayout from "@/components/wrapper/ProtectedLayout.tsx";

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
    element: <SignUp />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "reset-password/:token",
    element: <ResetPassword />,
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
