import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import SocialIcon from "./SocialIcon";
import SidebarLink from "./SidebarLink";

const socialLinksMap = [
  {
    icon: "github",
    link: "https://github.com/cheuni02",
  },
  {
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ivan-cheung-5657b812",
  },
  {
    icon: "instagram",
    link: "https://www.instagram.com/ivancheung85",
  },
];

const sidebarLinksMap = [
  {
    linkLabel: "Profile",
    linkIcon: "file-earmark-person-fill",
  },
  {
    linkLabel: "Experience",
    linkIcon: "eyeglasses",
  },
  {
    linkLabel: "Projects",
    linkIcon: "kanban-fill",
  },
  {
    linkLabel: "Education",
    linkIcon: "book",
  },
  {
    linkLabel: "Skills",
    linkIcon: "tools",
  },
  {
    linkLabel: "Contact",
    linkIcon: "envelope-fill",
  },
];



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
