import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";

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
        path: "allfoods",
        Component: AllFoods,
      },
    ],
  },
]);
