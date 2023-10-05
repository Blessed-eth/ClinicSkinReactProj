import React from "react";
import "./ImageCont.css";
import Facial2 from '../assets/facial2.png';

export const ImageContainer = () => {
  return (
    <div className="imagecontainer">
    <div className="image">
      <img className="facial2" src={Facial2}/>
    </div>

    </div>
  );
};
