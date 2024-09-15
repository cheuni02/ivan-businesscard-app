import React from 'react'
import { Link } from 'react-router-dom';

interface SocialIconProps {
    link: string;
    icon: string;
}

const SocialIcon = ({ link, icon }: SocialIconProps) => {
  return (
    <span className="social-icon">
      <Link to={link}>
        <i className={`social-icon bi-${icon}`}></i>
      </Link>
    </span>
  );
}

export default SocialIcon;