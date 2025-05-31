import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { PiExportFill } from "react-icons/pi";
import { MdContactPhone } from "react-icons/md";

import "./left.css";

const LeftSideBar = ({ currentPage, onNavigate }) => {
  const navItems = [
    { name: "about", label: "About", icon: <IoPerson /> },
    { name: "resume", label: "MyResume", icon: <FaAddressCard /> },
    { name: "portfolio", label: "Portfolio", icon: <PiExportFill /> },
    { name: "contact", label: "Contact", icon: <MdContactPhone /> },
  ];
  return (
    <div className="left-sidebar-container">
      <div className="left-sidebar-top">
        <img
          src="/gt.jpg"
          alt=""
          loading="lazy"
          className="left-side-bar-img"
        />
        <h2 className="left-side-bar-name">Ohwojero Godstime</h2>
        <p className="left-side-bar-sub">Full Stack Developer</p>
        <p className="connect">Let's connect</p>

        <div className="icons">
          <FaLinkedin className="icon" />
          <FaGithub className="icon" />
          <FaXTwitter className="icon" />
        </div>

        <nav className="left-sidebar">
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => onNavigate(item.name)}
                  className={`navLink ${
                    currentPage === item.name ? "active" : ""
                  }`}
                  aria-current={currentPage === item.name ? "page" : undefined}
                >
                  {item.icon} {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
     
     
    </div>
  );
};

export default LeftSideBar;
