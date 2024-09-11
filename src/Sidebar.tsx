import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import SidebarLink from "./components/SidebarLink";

const Sidebar = () => {
  return (
    <div className="sidebar flex-column">
      <a href="d-flex align-items-center">
        <i className="sidebar-icon bi bi-emoji-smile-fill fs-5 me-3"></i>
        <span className="fs-10">Ivan Cheung</span>
      </a>
      <hr className="text-secondary mt-2" />
      <ul className="nav flex-column">
        <SidebarLink linkLabel="Home" linkIcon="house-door" />
        <SidebarLink linkLabel="Experience" linkIcon="eyeglasses" />
        <SidebarLink linkLabel="Education" linkIcon="book" />
        <SidebarLink linkLabel="Skills" linkIcon="tools" />
        <SidebarLink linkLabel="Contact" linkIcon="telephone-fill" />
      </ul>
    </div>
  );
};

export default Sidebar;
