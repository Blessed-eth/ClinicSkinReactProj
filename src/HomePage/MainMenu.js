import React from "react";
import { Link } from "react-router-dom";
import "./MainMenu.css";
import Pedicura  from '../assets/piespics/pies12.jpg';
import Faciales from '../assets/cejaspics/cejas13.jpg';
import Cejas from '../assets/cejaspics/cejas1.jpg';
import Corporales from '../assets/corporalespics/corporales1.jpg';

export const MainMenu = () => {
  return (
    <div className="mainmenu"> 
      <div className="menus">
        <div className="image-grid">
        <Link to="/ManosYPies" className="image-button text-decoration-none">
          <div className="imgbutton-container">
            <img className="pedicura" src={Pedicura} alt="Pedicura" />
            </div>
            <div className="text-wrapper">Manicure y Pedicure</div>
          </Link>
          <Link to="/Faciales" className="image-button text-decoration-none">
          <div className="imgbutton-container">
            <img className="faciales" src={Faciales} alt="Tratamientos faciales" />
            </div>
            <div className="text-wrapper">Tratamientos Faciales</div>
          </Link>
          <Link to="/Eyesbrows" className="image-button text-decoration-none">
          <div className="imgbutton-container">
            <img className="cejas" src={Cejas} alt="Pestañas y cejas" />
            </div>
            <div className="text-wrapper">Pestañas y Cejas</div>
          </Link>
          <Link to="/Corporales" className="image-button text-decoration-none">
            <div className="imgbutton-container">
            <img className="corporales" src={Corporales} alt="Tratamientos corporales" />
            </div>
            <div className="text-wrapper">Tratamientos Corporales</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
