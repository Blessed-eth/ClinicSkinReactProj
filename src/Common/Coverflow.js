import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slider-pro/dist/js/jquery.sliderPro.min.js';
import 'slider-pro/dist/css/slider-pro.min.css';
import './Coverflow.css';

const SlidingCarousel = () => {
  useEffect(() => {
    const initializeCarousel = () => {
      $('#carousel').sliderPro({
        width: '100%', // Set the width as needed
        height: 400, // Set the height as needed
        autoplay: false, // Example option: Disable autoplay
        // Add more options as needed
      });
    };

    // Initialize the carousel when the component mounts
    initializeCarousel();

    // Clean up and destroy the carousel when the component unmounts
    return () => {
      $('#carousel').sliderPro('destroy');
    };
  }, []);

  return (
    <div>
      {/* Your HTML for the carousel */}
      <div id="carousel">
        {/* Slides go here */}
        {/* Example slide */}
        <div className="sp-slides">
          <div className="slide">
            <img
              className="sp-image"
              alt="Image Caption"
              src="https://unsplash.it/300/200?image=432"
            />
            <p className="sp-caption">
              Curabitur nec dapibus neque. Aenean orci enim, rutrum ac lacinia in, dapibus sit amet lorem.
            </p>
          </div>
          {/* Add more slides as needed */}
        </div>
      </div>
    </div>
  );
};

export default SlidingCarousel;
