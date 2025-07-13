import React from "react";
import loxa from '../src/Asset/images/f.jpg';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (e, sectionId) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home and scroll after it's rendered
      e.preventDefault();
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // delay to ensure Home renders
    }
  };

  return (
    <div className={`navbar ${theme}`}>
      <div className="my-log">
        <img src={loxa} className="nav-img" alt="navbar" />
      </div>

      <div className="links">
        <li><Link to="/">HOME</Link></li>
        {/* Remove separate AIM page link if AIM is on home; else keep as <Link to="/Aim"> */}
        <li>
          <a href="/#aim" onClick={(e) => scrollToSection(e, "aim")}>AIM</a>
        </li>
        <li><Link to="/Experience">EXPERIENCE</Link></li>
        <li><Link to="/Education">EDUCATION</Link></li>
        <li><Link to="/Resume">RESUME</Link></li>

        <li>
          <a href="/#blog" onClick={(e) => scrollToSection(e, "blog")}>BLOG</a>
        </li>

        <li>
          <a href="/#contact" onClick={(e) => scrollToSection(e, "contact")}>CONTACT</a>
        </li>

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
