import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./home/Home";
import Projects from "./projects/Project";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

export default routes;
