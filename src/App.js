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
      <div>
        <Navbar /> {/* Display the Navbar on every page */}
        <Routes>
          <Route path="/" element={<HomePage />}>
            {/* Place the <Bio /> component within the homepage route */}

          </Route>
          {/* Add more routes for other pages */}
        </Routes>
        <Footer /> {/* Display the Footer on every page */}
      </div>
    </Router>
  );
}

export default App;
