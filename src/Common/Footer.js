import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import instagramIcon from "../assets/instagram white.png";
import facebookIcon from "../assets/facebook-circular-logo-white.png";
import whatsappIcon from "../assets/whatsapp white.png";
import { Link, useNavigate } from 'react-router-dom';

// Define ScrollToTopButton component here
function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This provides a smooth scrolling effect
    });
  };

  return (
    <Link to="/" onClick={scrollToTop}>
      <img className="logo" alt="Logo" src={logo} />
    </Link>
  );
}

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="copyright">
        <div className="rights">
          2023 Clinic Skin Camila Carrasco. © Todos Los Derechos Reservados
        </div>
      </div>
      <div className="social-media-icons">
        <a href="https://www.instagram.com">
          <img className="social-media-icon" src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com">
          <img className="social-media-icon" src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.whatsapp.com">
          <img className="social-media-icon" src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
      <div className="footer-menu">
        <div className="text-wrapper-2">Manos y Pies</div>
        <div className="text-wrapper-3">Eyebrows y Eyelashes</div>
        <div className="text-wrapper-4">Depilación</div>
        <div className="overlap">
          <div className="text-wrapper-5">Micropigmentación</div>
          <div className="text-wrapper-6">Tratamientos Corporales</div>
        </div>
      </div>
      <div className="footer-servicios">
        <div className="text-wrapper-7">Servicios</div>
      </div>
      <div className="address">
        <p className="ohiggins-segundo">
          Ohiggins 669 segundo piso oficina b-2
          <br />
          <br />
          Pucón, <br />
          La Araucanía, Chile
        </p>
      </div>
      <ScrollToTopButton /> {/* Include the ScrollToTopButton component */}
    </footer>
  );
}
