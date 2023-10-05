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


function HomePage() {
  const screenWidth = useWindowWidth();
  return (
    <div>
      <HeroSlider />
      <Bio />
      <MainMenu />
      <ScrollingText /> {/* Add the ScrollingText component */}
      <ImageContainer />
      <MyCalendar />

    </div>
  );
}

export default HomePage;
