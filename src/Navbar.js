import React from "react";
import loxa from '../src/Asset/images/f.jpg';
import { Link } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`navbar ${theme}`}>
      <div className="my-log">
        <img src={loxa} className="nav-img" alt="navbar" />
      </div>

      <div className="links">
        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/AIM">AIM</Link>
        </li>

        <li>
          <Link to="/EXPERIENCE">EXPERIENCE</Link>
        </li>

        <li>
          <Link to="/EDUCATION">EDUCATION</Link>
        </li>

        <li>
          <Link to="/RESUME">RESUME</Link>
        </li>

        <li>
          <Link to="/BLOG">BLOG</Link>
        </li>

        <li>
          <Link to="/CONTACT">CONTACT</Link>
        </li>

        {/* Theme toggle button */}
        <li>
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'light' ? '🌙 Dark' : '🌞 Light'}
          </button>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
