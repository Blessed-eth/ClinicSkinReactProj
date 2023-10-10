import React, { useEffect, useRef, useState } from 'react';
import './Coverflow.css';

const SlidingCarousel = ({ imageSrc }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = carousel.querySelectorAll('.slide');

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    };

    const handleSwipe = (event) => {
      const threshold = 50; // Adjust this value to control sensitivity
      const deltaX = event.clientX - event.touches[0].clientX;

      if (deltaX > threshold) {
        // Swipe right (previous slide)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      } else if (deltaX < -threshold) {
        // Swipe left (next slide)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    };

    // Attach touch event listener for swipe gestures
    carousel.addEventListener('touchstart', (event) => {
      event.preventDefault();
      event.stopPropagation();
      carousel.addEventListener('touchmove', handleSwipe);
    });

    // Detach touch event listener when swipe ends
    carousel.addEventListener('touchend', () => {
      carousel.removeEventListener('touchmove', handleSwipe);
    });

    // Show the initial slide
    showSlide(currentIndex);
  }, [currentIndex]);

  return (
    <div>
      {/* Your HTML for the carousel */}
      <div ref={carouselRef} className="custom-carousel">
        {/* Slides go here */}
        {/* Example slide */}
        <div className="slide">
          <img
            className="carousel-image"
            alt="carousel"
            src={imageSrc} // Use the imageSrc prop here
          />
          <p className="sp-caption">
            Curabitur nec dapibus neque. Aenean orci enim, rutrum ac lacinia in, dapibus sit amet lorem.
          </p>
        </div>
        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default SlidingCarousel;
