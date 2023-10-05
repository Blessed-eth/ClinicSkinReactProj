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
        <Link to="/ManosYPies" className="menu1" onClick={handleLinkClick}>
          Manos y Pies
        </Link>
        <Link to="/Eyebrows" className="menu2" onClick={handleLinkClick}>
          Eyebrows y Eyelashes
        </Link>
        <Link to="/Depilacion" className="menu3" onClick={handleLinkClick}>
          Depilación
        </Link>
        <Link to="/Corporales" className="menu4" onClick={handleLinkClick}>
          Tratamientos Corporales
        </Link>
        <Link to="/Faciales" className="menu4" onClick={handleLinkClick}>
          Tratamientos Faciales
        </Link>
        <Link to="/Agendar" className="menu5" onClick={handleLinkClick}>
          Agendar
        </Link>
        <Link to="/MiCuenta" className="menu6" onClick={handleLinkClick}>
          Mi Cuenta
        </Link>
          <img className="logomenu" alt="clinic skin logo" src={logo2} />

      </div>
    </div>
  );
};

export default SideMenu;
