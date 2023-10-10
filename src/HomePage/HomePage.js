import React from 'react';
import SideMenu from '../Common/SideMenu';
import Navbar from '../Common/Navbar'; 
import { Footer } from '../Common/Footer'
import { breakpoints } from '../breakpoints';
import { useWindowWidth } from '../breakpoints';
import HeroSlider from '../HomePage/HeroSlider';
import Bio from './Bio'; // Import the Bio component
import './Homepage.css';
import { MainMenu } from './MainMenu';
import ScrollingText from './ScrollingText';
import { ImageContainer } from './ImageContainer';
import MyCalendar from './Calendar';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

registerLocale('es', es);

function HomePage() {
  const screenWidth = useWindowWidth();
  return (
    <div className="homepage-container">
      <div className="bio-text-container">
      <HeroSlider />
        <Bio />
      </div>
      <MainMenu />
      <ScrollingText /> {/* Add the ScrollingText component */}
      <ImageContainer />
      <MyCalendar />
    </div>
  );
}

export default HomePage;
