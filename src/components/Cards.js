import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import NFT1 from './assets/NFTs/nft1.jpeg';
import NFT2 from './assets/NFTs/nft2.jpeg';
import NFT3 from './assets/NFTs/nft3.jpeg';
import NFT4 from './assets/NFTs/nft4.jpeg';
import NFT5 from './assets/NFTs/nft5.jpeg';
import NFT6 from './assets/NFTs/nft6.jpeg';
import NFT7 from './assets/NFTs/nft7.jpeg';


function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC NFTs!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src={NFT1}
                        text="One of the most strange creatures on the cryptobiology world!"
                        label="Monstry"
                        path="/services"
                    />
                    <CardItem 
                        src={NFT2}
                        text="Cute but letal!"
                        label="Pulpatus"
                        path="/services"
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src={NFT3}
                        text="One of the most strange creatures on the cryptobiology world!"
                        label="Monstry"
                        path="/services"
                    />
                    <CardItem 
                        src={NFT4}
                        text="Cute but letal!"
                        label="Pulpatus"
                        path="/services"
                    />
                    <CardItem 
                        src={NFT5}
                        text="Cute but letal!"
                        label="Pulpatus"
                        path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;