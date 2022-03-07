import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';
import eLogo from './assets/images/Cryptobiology-Logo.png';
import TwitterIcon from './assets/images/twitter.png';
import DiscordIcon from './assets/images/discord.png';
import OpenseaIcon from './assets/images/Opensea.png';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <img src={eLogo} alt='' className='logo' />
          </div>
          <small className='website-rights'>Cryptobiology • 2022</small>
          <div className='row-form'>
            <Link
              className='social-icon-link Twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <img src={TwitterIcon} alt='' className='icons' />
            </Link>
            <Link
              className='social-icon-link Twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <img src={DiscordIcon} alt='' className='icons' />
            </Link>
            <Link
              className='social-icon-link Twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <img src={OpenseaIcon} alt='' className='icons' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
