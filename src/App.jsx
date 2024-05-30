import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import RootLayout from './pages/RootLayaout';
import HomePage from "./pages/HomePage";
import {action as homeAction} from './pages/HomePage'
import {loader as homeLoader} from './pages/HomePage'
import LoginPage from "./pages/LoginPage";
import {action as loginAction} from './pages/LoginPage'
import {action as logoutAction} from './pages/actionRoutes/Logout'
import {action as blogsAction} from './pages/BlogsPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
        children: [{ 
          path: "home", 
          action: homeAction,
          loader: homeLoader,
          element: <HomePage /> ,
          children: [
            {
              path: "blogs/:id",
              action: blogsAction
            },
          ]
        }
      ],
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage/>,
    action: loginAction
  },
  { path: "logout", action: logoutAction },
        
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

