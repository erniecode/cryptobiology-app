import React from 'react';
import './About.css';
import fltHouse from './assets/images/floatinghouse.png';
import fltBridge from './assets/images/floatingbridge.png';
import moon from './assets/images/moon.png';

function About() {
  return (
    <section className='about-section'>
      <div className='container'>
        <div className='row'>
          <div className='content-column col-lg-6 col-md-12 col-sm-12 order-2'>
            <div className='inner-column'>
              <div className='sec-title'>
                <span className='title'>About Company</span>
                <h2>Unveil the horror of the cryptids… or not?</h2>
              </div>
              <div className='text'>
                Cryptobiology is a collection of 7,000 unique masterpieces of
                art that compose a moment in time of art, where the cryptids
                were created. Before their chants, before their story, they were
                merely a visual conception that we perceived as the legends that
                we’ve been told, and passed on since their discoveries in modern
                culture. These mythical NFTs represent the portraying of
                creatures called with skepticism, as they are approached in
                different disciplines and pseudosciences, history geography,
                literature, science, films and periodistic labor included. the
                cryptids. They open a new environment of opportunities to its
                holders, from exclusive drops, cave of cryptids, multiple AMAs
                and networks with future community.
              </div>
              {/*<ul className='list-style-one'>
                <li>Lorem Ipsum is simply dummy tex</li>
                <li>Consectetur adipisicing elit</li>
                <li>Sed do eiusmod tempor incididunt</li>
              </ul> */}
              <div className='btn-box'>
                <a href='#' className='theme-btn btn-style-one'>
                  Join Discord
                </a>
              </div>
            </div>
          </div>
          <div className='image-column col-lg-6 col-md-12 col-sm-12'>
            <div className='inner-column wow fadeInLeft'>
              <figure className='image-3'>
                <a href='#' className='lightbox-image' data-fancybox='images'>
                  <img src={moon} alt='' />
                </a>
              </figure>
              <figure className='image-1 floating'>
                <a href='#' className='lightbox-image' data-fancybox='images'>
                  <img src={fltHouse} alt='' />
                </a>
              </figure>
              <figure className='image-2 floating2'>
                <a href='#' className='lightbox-image' data-fancybox='images'>
                  <img src={fltBridge} alt='' />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
