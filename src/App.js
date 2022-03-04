import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import HowItWorks from './components/pages/HowItWorks';
import Terms from './components/pages/Terms';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/HowItWorks" exact element={<HowItWorks/>}></Route>
        <Route path="/Terms" exact element={<Terms/>}></Route>
      </Routes>
    </Router>
    
    </>
      
  );
}

export default App;
