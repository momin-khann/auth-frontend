import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "@/components/reusable/Error.tsx";
import Home from "@/pages/Home.tsx";
import SignIn from "@/pages/SignIn.tsx";
import App from "@/App.tsx";

export const router = createBrowserRouter([
  {
    element: <App />,
    // loader: rootLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // Redirect Auth Routes
      {
        path: "verify-email",
      },
      {
        path: "sign-up",
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "reset-password/:token",
      },
      // Protected Routes
      {
        path: "dashboard",
      },
      {
        path: "admin",
      },
      {
        path: "settings",
      },
    ],
  },
]);
