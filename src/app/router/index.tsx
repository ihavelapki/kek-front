import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Afisha from "../../pages/Afisha";
import FilmPage from "../../pages/FlimPage";
import BarGrill from "../../pages/BarGrill";
import RadioHome from "../../pages/RadioHome";
import LoginPage from "../../pages/LoginPage";
import SigninPage from "../../pages/SigninPage";

import { RequireAuth } from "../../entities/session/ui/RequireAuth";
import { RequireGuest } from "../../entities/session/ui/RequireGuest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "cinema",
        children: [
          {
            index: true,
            element: <Navigate to="about" replace />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "afisha",
            element: (
              <RequireAuth>
                <Afisha />
              </RequireAuth>
            ),
          },
          {
            path: "afisha/:id",
            element: (
              <RequireAuth>
                <FilmPage />
              </RequireAuth>
            ),
          },
          {
            path: "bargrill",
            element: (
              <RequireAuth>
                <BarGrill />
              </RequireAuth>
            ),
          },
          {
            path: "login",
            element: (
              <RequireGuest>
                <LoginPage />
              </RequireGuest>
            ),
          },
          {
            path: "signin",
            element: (
              <RequireGuest>
                <SigninPage />
              </RequireGuest>
            ),
          },
          {
            path: "*",
            element: <Navigate to="about" replace />,
          },
        ],
      },

      {
        path: "radio",
        children: [
          {
            index: true,
            element: <RadioHome />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "*",
            element: <Navigate to="/radio" replace />,
          },
        ],
      },

      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};