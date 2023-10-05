import React from "react";
import "./Button.css";

export const Button: React.FC = () => {
  return (
    <div className="box">
      <div className="botones">
        <div className="iniciar-sesion">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">Iniciar Sesión</div>
            </div>
          </div>
        </div>
        <img className="reservar" alt="Reservar" src="reservar.png" />
      </div>
    </div>
  );
};
