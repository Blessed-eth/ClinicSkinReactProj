import React, { useEffect, useState } from 'react';
import './ScrollingText.css';

function ScrollingText() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text">
        <span className="scrolling-text1">Una Experiencia unica</span>
        <span className="scrolling-text2">Clinic Skin</span>
      </div>
    </div>
  );
}

export default ScrollingText;
