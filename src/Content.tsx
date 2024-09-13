import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Profile from "./pages/Profile";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Sidebar from "./Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

const Content = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className="col-auto">
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Content;
