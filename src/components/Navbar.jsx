import React, { useState } from "react";
import "./Navbar.css";
import Switch from "./Switch";
import Notification from "./Notification";

const Navbar = () => {
  const [notification, setNotification] = useState(null);

  const handleLinkClick = (message) => {
    setNotification(message);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">p1trickDev</div>
      <ul className="navbar-links">
        <li>
          <a
            href="#home"
            onClick={() => handleLinkClick("Work in progress!!!")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => handleLinkClick("Work in progress!!!")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => handleLinkClick("Work in progress!!!")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handleLinkClick("Work in progress!!!")}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-switch">
        <Switch />
      </div>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
    </nav>
  );
};

export default Navbar;
