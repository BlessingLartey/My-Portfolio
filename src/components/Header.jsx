import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <span className="logo">BKL</span>
          <div className="contact-info">
            <span>0245644384</span>
            <span>bbklartey@gmail.com</span>
          </div>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          <GiHamburgerMenu className="hamburger-icon" />
        </div>
      </div>
      {/* Conditionally render sidebar based on isSidebarOpen state */}
      {isSidebarOpen && (
        <nav className="sidebar">
          <ul>
            <li>
              <Link to="/" onClick={() => setIsSidebarOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsSidebarOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsSidebarOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsSidebarOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
