import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import QA from '../QA';
import Slider from '../Slider';
import Team from '../Team';
import Timeline from '../Timeline';

function Home() {
  return (
    <>
      <HeroSection />
      <Slider />
      <Cards />
      <Team />
      <Timeline />
      <QA />
      <Footer />
    </>
  );
}

export default Home;
