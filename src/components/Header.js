import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">◆</span>
          <div className="logo-text">
            <span className="logo-main">MICE</span>
            <span className="logo-sub">Event Solutions</span>
          </div>
        </Link>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`nav-link ${isActive("/services") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link to="/about#contact" className="nav-cta" onClick={closeMenu}>
            Get In Touch
          </Link>
        </nav>

        <button
          className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
