import React from "react";
import "./Corporales.css";
import Navbar from "../Common/Navbar";
import { Footer } from "../Common/Footer";
import Calendar from "../HomePage/Calendar";
import HeroSlider from "../HomePage/HeroSlider"; 

const Corporales: React.FC = () => {
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

export default Corporales;
