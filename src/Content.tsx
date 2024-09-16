import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { Sidebar } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import { contentRoutesMap } from "./dataMaps";

const Content = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className="col-auto">
          <Sidebar />
        </div>
        <div>
          <Routes>
            {contentRoutesMap.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Content;
