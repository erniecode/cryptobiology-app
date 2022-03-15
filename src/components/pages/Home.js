import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import QA from '../QA';
import Slider from '../Slider';
import Team from '../Team';
import Timeline from '../Timeline';
import About from '../About';

function Home() {
  return (
    <>
      <HeroSection />
      <Slider />
      <About />
      <Cards />
      <Team />
      <Timeline />
      <QA />
      <Footer />
    </>
  );
}

export default Home;
