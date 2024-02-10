import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./home/Home";
import Projects from "./projects/Projects";

let lorem: string =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

let data = [
  {
    id: Math.random(),
    title: "Box titulo 1",
    text: lorem,
    backgroundColor: "#D5CAFA",
  },
  {
    id: Math.random(),
    title: "Box titulo 2",
    text: lorem,
    backgroundColor: "#EDA9A9",
  },
];

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        // element: <Home items={data} />,
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
