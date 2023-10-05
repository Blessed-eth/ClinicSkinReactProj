import React, { useEffect, useState } from 'react';
import './ScrollingText.css'; // Import the CSS styles you created

function ScrollingText() {
  const [scrollingDirection, setScrollingDirection] = useState('forward');
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scroll events
  const handleScroll = () => {
    const currentPosition = window.scrollY;

    if (currentPosition > scrollPosition) {
      setScrollingDirection('forward');
    } else {
      setScrollingDirection('backward');
    }

    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    // Add an event listener for the 'scroll' event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textClass =
    scrollingDirection === 'forward'
      ? 'scrolling-text animate-forward'
      : 'scrolling-text animate-backward';
      
  return (
    <div className="scrolling-text">
        Experiencia unica Clinic Skin
    </div>
  );
}

export default ScrollingText;
