import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Timeline from '../Timeline';


function Home () {
    return (
        <>
            <HeroSection/>
            <Cards/>
            <Timeline/>
            <Footer/>
        </>
    )
}

export default Home;