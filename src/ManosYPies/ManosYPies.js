import React from "react";
import Navbar from "../Common/Navbar";
import { Footer } from '../Common/Footer'; 
import "./ManosYPies.css";

const ManosYPies = () => {
  return (
    <div>
      <Navbar /> {/* Use the Navbar component here */}
      {/* Your page content goes here */}
      <div className="group">
        {/* ... Rest of your page content ... */}
      </div>
      <Footer /> {/* Use the Footer component here */}
    </div>
  );
};

export default ManosYPies;
