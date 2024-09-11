import React from "react";
import { Link } from "react-router-dom";

interface SidebarLinkProps {
  linkLabel: string;
  linkIcon: string;
}

function SidebarLink({ linkLabel, linkIcon }: SidebarLinkProps) {
  let path: string;
  if (linkLabel === "Home") path = "/";
  else path = `/${linkLabel.toLowerCase()}`;

  return (
    <li className="nav-item py-1 text-white px-2">
      <Link to={path} className="nav-link text-white px-2">
        <i className={`sidebar-icon bi bi-${linkIcon} me-2 fs-5`}></i>
        <span className="fs-5">{linkLabel}</span>
      </Link>
    </li>
  );
}

export default SidebarLink;