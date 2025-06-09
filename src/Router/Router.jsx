import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";

import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Gellery from "../Pages/Gellery/Gellery";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "allfoods",
        Component: AllFoods,
      },
      {
        path: "gellery",
        Component: Gellery,
      },
    ],
  },
]);
