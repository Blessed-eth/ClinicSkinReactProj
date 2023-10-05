import React from "react";
import "./Button.css";
import { Link } from 'react-router-dom';

export const Button = () => {
  return (
    <div className="button-container">
      <div className="botones">
      
            <div className="button">
            <Link className="iniciar-sesion">Iniciar Sesion</Link>
            </div>
            <div className="button">
            <Link className="reservar">Reservar</Link>
            </div>
      
      </div>
    </div>
  );
};
