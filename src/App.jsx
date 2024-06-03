import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import RootLayout from "./pages/RootLayaout";
import HomePage from "./pages/HomePage";
import { action as homeAction } from "./pages/DashboardPage";
import { loader as homeLoader } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { action as loginAction } from "./pages/LoginPage";
import { loader as loginLoader } from "./pages/LoginPage";
import { action as logoutAction } from "./pages/actionRoutes/Logout";
import { action as blogsAction } from "./pages/BlogsPage";
import { loader as mainLoader } from "./pages/MainPage";
import { loader as registerLoader } from "./pages/RegisterPage";
import { action as registerAction } from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
        loader: mainLoader,
      },
      {
        path: "home",
        element: <DashboardPage />,
        action: homeAction,
        children: [
          {
            path: "",
            element: <HomePage />,
            loader: homeLoader,
            
          },
          {
            path: "blogs/:id",
            action: blogsAction,
          },
        ],
      },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction,
        loader: loginLoader,
      },
      {
        path: "signup",
        element: <RegisterPage />,
        action: registerAction,
        loader: registerLoader,
      },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
