import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import SocialIcon from "./SocialIcon";
import SidebarLink from "./SidebarLink";
import { socialLinksMap } from "../dataMaps/socialLinksMap";
import { sidebarLinksMap } from "../dataMaps/sidebarLinksMap";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-center">
      <div className="social-links align-items-center">
        {socialLinksMap.map(({ icon, link }) => (
          <SocialIcon icon={icon} link={link} />
        ))}
      </div>
      <hr className="text-secondary mt-2" />
      <ul className="nav flex-column">
        {sidebarLinksMap.map(({ linkLabel, linkIcon }) => (
          <SidebarLink linkLabel={linkLabel} linkIcon={linkIcon} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
