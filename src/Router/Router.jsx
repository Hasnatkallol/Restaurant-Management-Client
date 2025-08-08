import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";

import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

import Errorpage from "../Pages/Errorpage/ErrorPage";
import Loading from "../Shared/Loading";
import TopDetails from "../Shared/TopDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PurchaseFood from "../Shared/PurchaseFood";
import Gellery from "../Pages/Gellery/Gellery";
import AddFood from "../Pages/AddFood/AddFood";
import MyFood from "../Pages/MyFood/MyFood";
import Update from "../Pages/MyFood/Update";
import MyOrder from "../Pages/MyOrder/MyOrder";
import HelpCenter from "../Pages/HelpCenter/HelpCenter";
import HealthyDiet from "../Pages/HealthyDiet/HealthyDiet";
import Profile from "../Shared/Profile";

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
      {
        path: "foods/:id",
        loader: ({ params }) =>
          fetch(
            `https://reasturent-management-server.vercel.app/foods/${params.id}`
          ),
        Component: TopDetails,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "purchase/:id",
        loader: ({ params }) =>
          fetch(
            `https://reasturent-management-server.vercel.app/foods/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <PurchaseFood></PurchaseFood>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "addfood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
          <Profile></Profile>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "myfood",
        element: (
          <PrivateRoute>
            <MyFood></MyFood>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "update/:id",
        loader: ({ params }) =>
          fetch(
            `https://reasturent-management-server.vercel.app/foods/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "myorder",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "helpcenter",
        Component: HelpCenter,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "healthydiet",
        Component: HealthyDiet,
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);
