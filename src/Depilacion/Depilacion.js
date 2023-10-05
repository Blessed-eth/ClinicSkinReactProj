import React from "react";
import "./Depilacion.css";
import Navbar from "../Common/Navbar";
import Calendar from "../HomePage/Calendar";
import HeroSlider from "../HomePage/HeroSlider"; 
import { Footer } from '../Common/Footer'; 

const Depilacion: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <HeroSlider /> {/* Replace Iphone with HeroSlider */}
        <div className="other-content">
          {/* Your page content here */}
        </div>
      </div>
      <Footer />
      <Calendar />
    </div>
  );
};

export default Depilacion;
