import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './HeroSlider.css';

const HeroSlider = () => {
  useEffect(() => {
    // Initialize Swiper
    new Swiper('.swiper-container', {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/11.jpg"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/12.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default HeroSlider;
