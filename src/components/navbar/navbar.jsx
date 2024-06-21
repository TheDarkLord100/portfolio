import { useState } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import Resume from './../../assets/Vijayant Singh.pdf';

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
          <a href="#about" className="nav-link">About</a>
          <a href="#project" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href={Resume} target='_blank'>
            <div className="button-wrapper">
              <div className="nav-button">
                <div className="fake-border">
                  Resume
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
