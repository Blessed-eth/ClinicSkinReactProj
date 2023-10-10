import React from "react";
import Navbar from "../Common/Navbar";
import { Footer } from '../Common/Footer'; 
import "./ManosYPies.css";
import SlidingCarousel from '../Common/Coverflow';
import manosImage from '../assets/manospics/manos1.jpg'; // Import the image you want to use
import BackArrow from "../Common/Backarrow";
import Link  from 'react-router-dom';

const ManosYPies = () => {
  return (
    <div>
      {/* Your page content goes here */}
      <BackArrow to="/"/>
      <SlidingCarousel imageSrc={manosImage} /> {/* Pass the image as a prop */}
      <div className="group">
        {/* ... Rest of your page content ... */}
      </div>
    </div>
  );
};

export default ManosYPies;
