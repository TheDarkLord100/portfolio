import { useState } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-right">
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#link1" className="nav-link">About</a>
          <a href="#link2" className="nav-link">Projects</a>
          <a href="#link3" className="nav-link">Contact</a>
          <button className="nav-button">Resume</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
