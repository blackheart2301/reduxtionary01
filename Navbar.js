import React from 'react';
import { Link } from 'react-router-dom';
import '../Designs/Navbar.css'; // Import your CSS stylesheet here

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="app-title">Dictionary App</h1>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/" className="link-text">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/history" className="link-text">
              History
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;