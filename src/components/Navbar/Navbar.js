import React, { useRef } from 'react';
import Menu from '../../assets/hamburger-menu.png.png';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('menu');
  };
  return (
    <div className="navbar">
      <div className="menu-mobile">
        <span>Website Test Sabi</span>

        <div className="toggle" onClick={showNavbar}>
          <img src={Menu} alt="menu" />
        </div>
      </div>

      <ul ref={navRef} className="menu">
        <li>
          <NavLink
            exact
            className={({ isActive }) => (isActive ? 'navbar-active' : '')}
            to="/"
          >
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'navbar-active' : '')}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'navbar-active' : '')}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
