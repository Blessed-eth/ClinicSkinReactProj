import React, { useEffect, useRef, useState } from 'react';
import './HeroSlider.css'; // Your custom styles
import Banner1 from '../assets/clinicskinbanner1.png';
import Banner3 from '../assets/clinicskinbanner3.png';
import Banner4 from '../assets/clinicskinbanner4.png';
import Banner5 from '../assets/clinicskinbanner5.png';
import Banner6 from '../assets/clinicskinbanner6.png';
import Banner7 from '../assets/clinicskinbanner7.png';

const HeroSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;

    const changeSlide = () => {
      const slides = slider.querySelectorAll('.slide');
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
    };

    // Start auto-slider
    const interval = setInterval(changeSlide, 6000); // Adjust the interval as needed

    // Cleanup on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const translateX = -currentSlide * 100; // Calculate the translation value

  return (
    <div className="slider-container" ref={sliderRef}>
      <div className="slides" style={{ transform: `translateX(${translateX}%)` }}>
        <div className="slide">
          <img className="banner1" src={Banner1} alt="" />
        </div>
        <div className="slide">
          <img className="banner3" src={Banner3} alt="" />
        </div>
        <div className="slide">
          <img className="banner4" src={Banner4} alt="" />
        </div>
        <div className="slide">
          <img className="banner5" src={Banner5} alt="" />
        </div>
        <div className="slide">
          <img className="banner6" src={Banner6} alt="" />
        </div>
        <div className="slide">
          <img className="banner7" src={Banner7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
