import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

function Navbar() {
  return (
    <nav>
      <ul>
        <Link className="navlink" to="/about">
          <li>About</li>
        </Link>
        <Link className="navlink" to="/services">
          <li>Services</li>
        </Link>
        <Link className="navlink" to="/home">
          <li>
            <img className="logo" src={logo} alt="Logo" />
          </li>
        </Link>
        <Link className="navlink" to="/joinus">
          <li>Join Us</li>
        </Link>
        <Link className="navlink" to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
