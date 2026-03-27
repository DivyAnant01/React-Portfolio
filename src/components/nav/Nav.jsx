import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header>
      <nav>
        <div className="left">Anant's Portfolio</div>

        {/* Hamburger */}
        <div className="menu-toggle" onClick={() => setMenuActive(!menuActive)}>
          <i className="fa-solid fa-bars"></i>
        </div>

        {/* Menu */}
        <div className={`right ${menuActive ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setMenuActive(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuActive(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={() => setMenuActive(false)}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/certificates" onClick={() => setMenuActive(false)}>Certificates</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuActive(false)}>Contact Me</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;