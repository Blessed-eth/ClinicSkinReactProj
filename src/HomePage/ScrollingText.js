import React, { useEffect, useState } from 'react';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
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

  const translateX = `${scrollPosition / 3}px`; // Adjust the scroll speed as needed
  const translateXb = `${-scrollPosition / 3}px`; // Adjust the scroll speed as needed

  return (
    <div className="outer-container">
    <div className="scrolling-text-container">
      <div
        className="scrolling-text"
        style={{ transform: `translateX(${translateX})` }}
      >
        <AnimatedOnScroll animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
          <span className="scrolling-text1">Una Experiencia unica</span>
        </AnimatedOnScroll>
      </div>
      <div
        className="scrolling-text"
        style={{ transform: `translateX(${translateXb})` }}
      >
        <AnimatedOnScroll animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
          <span className="scrolling-text2">Clinic Skin</span>
        </AnimatedOnScroll>
      </div>
    </div>
    </div>
  );
}

export default ScrollingText;
