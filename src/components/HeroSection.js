import React from 'react';
import '../App.css'
import {Button} from './Button';
import './HeroSection.css';
import eVideo from './assets/videos/starsVideo.mp4';
import TwitterIcon from './assets/images/twitter.png';
import DiscordIcon from './assets/images/discord.png';
import OpenseaIcon from './assets/images/Opensea.png';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={eVideo} autoPlay loop playsInline type="video/mp4" muted/>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                CONNECT WALLET
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER  <i className='far fa-play-circle'></i>
            </Button>
        </div>
        <div className="row-form">
                <Link className="social-icon-link Twitter" to='/' target='_blank' aria-label='Twitter'>
                  <img src={TwitterIcon} alt="" className="icons"/>
                </Link>
                <Link className="social-icon-link Twitter" to='/' target='_blank' aria-label='Twitter'>
                  <img src={DiscordIcon} alt="" className="icons"/>
                </Link>
                <Link className="social-icon-link Twitter" to='/' target='_blank' aria-label='Twitter'>
                  <img src={OpenseaIcon} alt="" className="icons"/>
                </Link>
            </div>
    </div>
  )
}

export default HeroSection