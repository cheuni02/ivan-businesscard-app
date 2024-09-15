import React from "react";
import {
  Profile,
  Experience,
  Education,
  Skills,
  Contact,
  Projects,
} from "../pages";
import "bootstrap/dist/css/bootstrap.min.css";

export const contentRoutesMap = [
  {
    path: "/",
    element: <Profile />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
