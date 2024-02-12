import React, { Fragment, useEffect, useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Base from "./components/Base";
import UserHome from "./pages/User/Index";
import AdminHome from "./pages/Admin/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "user",
    element: <Base />,
    children: [
      {
        path: "",
        element: <UserHome />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Base />,
    children: [
      {
        path: "",
        element: <AdminHome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
