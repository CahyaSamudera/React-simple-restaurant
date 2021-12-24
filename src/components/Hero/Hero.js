import React from 'react';
import './Hero.css';
import background from '../../images/restaurant.jpg';

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '100vh',
    width: '100%',
    display: 'table',
  };
  return (
    <>
      <div className='hero' id='hero' style={backgroundStyle}>
        <div className='hero-container'>
          <div className='hero-logo'>
            <h1 className='font-weight-bold'>Cafe Loliat2</h1>
          </div>
          <h2 className='font-weight-bold'>Relax and Free Your Mind</h2>
          <div className='actions'>
            <a href='#hero' className='btn-get-started bg-warning'>
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
