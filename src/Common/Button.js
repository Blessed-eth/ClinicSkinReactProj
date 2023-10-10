import React from "react";
import "./Button.css";
import { Link } from 'react-router-dom';

export const Button = () => {
  return (
    <div className="button-container">
      <div className="botones">
        <Link to="/" className="button-1 text-decoration-none">
          <div className="button1">
            <div className="iniciar-sesion">Iniciar Sesion</div>
          </div>
        </Link>
        <Link to="/reservar" className="button-2 text-decoration-none">
          <div className="button2">
            <div className="reservar">Reservar</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
