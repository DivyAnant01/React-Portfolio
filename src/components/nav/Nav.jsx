import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <nav>
        <div className="left">Anant's Portfolio</div>

        {/* Hamburger Icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>

        {/* Navigation Menu */}
        <div className={`right ${menuActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuActive(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuActive(false)}>About</Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setMenuActive(false)}>Services</Link>
            </li>
            <li>
              <Link to="/certificates" onClick={() => setMenuActive(false)}>Certificates</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuActive(false)}>Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
