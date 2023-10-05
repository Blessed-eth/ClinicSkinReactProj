import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './HeroSlider.css';
import Banner1 from '../assets/clinicskinbanner1.png';
import Banner2 from '../assets/clinicskinbanner2.png';

const HeroSlider = () => {
  useEffect(() => {
    // Initialize Swiper
    new Swiper('.swiper-container', {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      effect: 'slide', // Change effect to 'slide'
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1, // Change slidesPerView to 1

    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img className="banner1" src={Banner1} alt="" />
        </div>
        <div className="swiper-slide">
          <img className="banner2" src={Banner2} alt="" />
        </div>
      </div>

    </div>
  );
};

export default HeroSlider;
