import React from 'react';
import { Link } from 'react-router-dom';
import './Sidemenu.css';
import logo2 from '../assets/logo-white.png';
import { breakpoints } from '../breakpoints';
import { useWindowWidth } from '../breakpoints';

const SideMenu = ({ isOpen, onClose }) => {
  const menuClassName = `side-menu ${isOpen ? 'open' : ''}`;

  const handleLinkClick = () => {
    onClose(); // Close the SideMenu when a link is clicked
  };

  const screenWidth = useWindowWidth();

  return (
    <div className={menuClassName}>
      <div className="sidemenu-container">
        <Link to="/ManosYPies" className="menu1 text-decoration-none" onClick={handleLinkClick}>
          Manos y Pies
        </Link>
        <Link to="/Eyebrows" className="menu2 text-decoration-none" onClick={handleLinkClick}>
          Eyebrows y Eyelashes
        </Link>
        <Link to="/Depilacion" className="menu3 text-decoration-none" onClick={handleLinkClick}>
          Depilación
        </Link>
        <Link to="/Corporales" className="menu4 text-decoration-none" onClick={handleLinkClick}>
          Tratamientos Corporales
        </Link>
        <Link to="/Faciales" className="menu5 text-decoration-none" onClick={handleLinkClick}>
          Tratamientos Faciales
        </Link>
        <Link to="/MiCuenta" className="menu6 text-decoration-none" onClick={handleLinkClick}>
          Mi Cuenta
        </Link>
          <img className="logomenu" alt="clinic skin logo" src={logo2} />

      </div>
    </div>
  );
};

export default SideMenu;
