import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='text-center'>
          <h6 className='text-white'>Jl Tarumanegara No.88</h6>
          <h6 className='text-white pb-4'>
            Cirendeu Raya Ciputat Timur Tangerang Selatan
          </h6>
          <h4 className='font-weight-bold'>Follow Us</h4>
          <div className='d-flex flex-row justify-content-center'>
            <span>
              <i className='fab fa-facebook fa-2x'></i>
            </span>
            <span>
              <i className='fab fa-twitter fa-2x'></i>
            </span>
            <span>
              <i className='fab fa-instagram fa-2x'></i>
            </span>
            <span>
              <i className='fab fa-pinterest fa-2x'></i>
            </span>
          </div>
          <p>&copy; Copyright 2021 | Cafe Loliatliat</p>
          <div class='top'>
            <a href='#hero'>
              <i class='fas fa-arrow-circle-up fa-2x'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
