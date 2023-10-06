import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import SideMenu from './SideMenu';
import { Link } from 'react-router-dom'; 


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`line line-1 ${isMenuOpen ? 'line-1-open' : ''}`} />
          <div className={`line line-2 ${isMenuOpen ? 'line-2-open' : ''}`} />
          <div className={`line line-3 ${isMenuOpen ? 'line-3-open' : ''}`} />
        </div>
        <Link to="/" className="logo-link">
          <img className="logo" alt="Logo" src={logo} />
        </Link>
      </div>
       <SideMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </div>
  );
}

export default Navbar;
