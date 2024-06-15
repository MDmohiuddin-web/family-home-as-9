import React from "react";
import ReactDOM from "react-dom/client";

import Error from "./Error/Error";
import Home from "./Home/Home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Login from "./User_Authontication/Login";
import Signup from "./User_Authontication/Signup";
import AuthProvider from "./Firebase/AuthProvider";
import Profile from "./User_Authontication/Profile";
import Privaterawout from "./Private/Privaterawout";
import Cards from "./Home/Cards";
import { HelmetProvider } from "react-helmet-async";
import Cardinfo from "./Home/Cardinfo";
import Details from "./Navigation/details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },

      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/carddetelse.json"),
      },
      {
        path: "/Cards",
        element: <Cards></Cards>,
      },
      {
        path: "/info/:id",
        element: (
          <Privaterawout>
            <Cardinfo></Cardinfo>
          </Privaterawout>
        ),
        loader: () => fetch("/carddetelse.json"),
      },
      {
        path: "/Profile",
        element: (
          <Privaterawout>
            <Profile></Profile>
          </Privaterawout>
        ),
      },
      {
        path: "/details",
        element: <Details></Details>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
