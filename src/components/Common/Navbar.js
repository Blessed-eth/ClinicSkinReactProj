import React from 'react';
import './Navbar.css'; // Import the CSS file for your navbar styles

function Navbar() {
  return (
    <div className="navbar">
      <div className="burger-menu">
        <img className="line-3" alt="Line" src="line-1.svg" />
        <img className="line-4" alt="Line" src="line-2.svg" />
        <img className="line-5" alt="Line" src="line-3.svg" />
      </div>
      <img className="logo-2" alt="Logo" src="logo.png" />
    </div>
  );
}

export default Navbar;
