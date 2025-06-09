import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";

import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Gellery from "../Pages/Gellery/Gellery";
import Errorpage from "../Pages/Errorpage/ErrorPage";
import Loading from "../Shared/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "login",
        Component: Login,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "register",
        Component: Register,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "allfoods",
        Component: AllFoods,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "gellery",
        Component: Gellery,
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);
