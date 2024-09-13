import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import SidebarLink from "./components/SidebarLink";
import SocialIcon from "./components/SocialIcon";

const Sidebar = () => {
  return (
    <div className="sidebar flex-column align-items-center">
      <div className="social-links align-items-center">
        <SocialIcon icon="github" link="https://github.com/cheuni02" />
        <SocialIcon
          icon="instagram"
          link="https://www.instagram.com/ivancheung85"
        />
        <SocialIcon
          icon="facebook"
          link="https://www.facebook.com/ivan.cheung.7167"
        />
      </div>
      <hr className="text-secondary mt-2" />
      <ul className="nav flex-column">
        <SidebarLink linkLabel="Profile" linkIcon="file-earmark-person-fill" />
        <SidebarLink linkLabel="Experience" linkIcon="eyeglasses" />
        <SidebarLink linkLabel="Education" linkIcon="book" />
        <SidebarLink linkLabel="Skills" linkIcon="tools" />
        <SidebarLink linkLabel="Contact" linkIcon="telephone-fill" />
      </ul>
    </div>
  );
};

export default Sidebar;
