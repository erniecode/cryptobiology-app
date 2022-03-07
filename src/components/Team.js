import React from 'react';
import './Team.css';
import NFT6 from './assets/NFTs/nft6.jpeg';

function Team() {
  return (
    <center className='container'>
      <h1 className='title'>MEET OUR TEAM</h1>
      <p>Click over the images</p>
      <div className='row'>
        <div className='col-md-3 mb-3'>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img className='Avatar' src={NFT6} alt='Avatar' />
              </div>
              <div className='flip-card-back'>
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3 mb-3'>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img className='Avatar' src={NFT6} alt='Avatar' />
              </div>
              <div className='flip-card-back'>
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3 mb-3'>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img className='Avatar' src={NFT6} alt='Avatar' />
              </div>
              <div className='flip-card-back'>
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3 mb-3'>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img className='Avatar' src={NFT6} alt='Avatar' />
              </div>
              <div className='flip-card-back'>
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='row'>
        <div className='col-md-4 mb-3'>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img className='Avatar' src={NFT6} alt='Avatar' />
              </div>
              <div className='flip-card-back'>
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-3'>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img className='Avatar' src={NFT6} alt='Avatar' />
              </div>
              <div className='flip-card-back'>
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-3'>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img className='Avatar' src={NFT6} alt='Avatar' />
              </div>
              <div className='flip-card-back'>
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </center>
  );
}

export default Team;
