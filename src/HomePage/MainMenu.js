import React from "react";
import { Link } from "react-router-dom";
import "./MainMenu.css";
import Pedicura  from '../assets/pedicurenegro1.png';
import Faciales from '../assets/faciales1.png';
import Cejas from '../assets/cejas1.png';
import Corporales from '../assets/corporales1.png';

export const MainMenu = () => {
  return (
    <div className="mainmenu"> {/* You may want to update the class name here */}
      <div className="menus">
        <div className="image-grid">
        <Link to="/ManosYPies" className="image-button">
          <div className="imgbutton-container">
            <img className="pedicura" src={Pedicura} alt="Pedicura" />
            </div>
            <div className="text-wrapper">Manicure y Pedicure</div>
          </Link>
          <Link to="/Faciales" className="image-button">
          <div className="imgbutton-container">
            <img className="faciales" src={Faciales} alt="Tratamientos faciales" />
            </div>
            <div className="text-wrapper">Tratamientos Faciales</div>
          </Link>
          <Link to="/Eyesbrows" className="image-button">
          <div className="imgbutton-container">
            <img className="cejas" src={Cejas} alt="Pestañas y cejas" />
            </div>
            <div className="text-wrapper">Pestañas y Cejas</div>
          </Link>
          <Link to="/Corporales"className="image-button">
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
