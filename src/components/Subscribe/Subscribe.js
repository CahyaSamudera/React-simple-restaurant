import React from 'react';
import './Subscribe.css';
import background from '../../images/food-1.jpg';

const Subscribe = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)',
  };
  return (
    <>
      <div id='subscribe' className='py-5' style={backgroundStyle}>
        <div className='container'>
          <div className='row align-items-center my-5'>
            <div className='col-sm-10 mx-auto-text-center mb-5'>
              <h4 className='display-3 mb-5 text-uppercase text-white text-center'>
                {/* Subscribe Untuk Update Terbaru */}
              </h4>
              {/* <form
                action=''
                className='form-inline d-flex justify-content-center'
              >
                <input
                  type='text'
                  className='form-control w-35'
                  placeholder='Email'
                />
                <button className='btn form-btn m-1'>Subscribe</button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
