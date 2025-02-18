import { useState } from "react";
import "./Navbar.css";
import Switch from "./Switch";
import Notification from "./Notification";

const Navbar = () => {
  const [notification, setNotification] = useState(null);

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">p1trickDev</div>
      <ul className="navbar-links">
        <li>
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, "about")}
          >
            About
          </a>
        </li>
        <li><a href="#skills">Skills</a></li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleLinkClick(e, "projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
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
