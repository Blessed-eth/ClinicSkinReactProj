import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Checkout from './Checkout/Checkout';
import Navbar from './Common/Navbar';
import { SideMenu } from './Common/SideMenu';
import Corporales from './Corporales/Corporales';
import Depilacion from './Depilacion/Depilacion';
import ManosYPies from './ManosYPies/ManosYPies';
import HeroSlider from './HomePage/HeroSlider';
import { Footer } from './Common/Footer';
import { useWindowWidth } from "./breakpoints";
import { breakpoints } from './breakpoints'; // Import your breakpoints
import Bio from './HomePage/Bio';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Navbar /> {/* Display the Navbar on every page */}
        <div className="content-container">
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="ManosYPies" element={<ManosYPies />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/corporales" element={<Corporales />} />
            <Route path="/depilacion" element={<Depilacion />} />
          </Routes>
        </div>
        <Footer /> {/* Display the Footer on every page */}
      </div>
    </Router>
  );
}

export default App;

