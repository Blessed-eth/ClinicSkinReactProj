import React from "react";
import Navbar from "../Common/Navbar";
import { Footer } from '../Common/Footer'; 
import "./ManosYPies.css";
import Coverflow from '../Common/Coverflow';

const ManosYPies = () => {
  return (
    <div>
      <Navbar /> {/* Use the Navbar component here */}
      {/* Your page content goes here */}
      <Coverflow />
      <div className="group">
        {/* ... Rest of your page content ... */}
      </div>
      <Footer /> {/* Use the Footer component here */}
    </div>
  );
};

export default ManosYPies;
