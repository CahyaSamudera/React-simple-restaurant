import React from 'react';
import './Navbar.css';
import logo from '../../images/logo-3.png';

const Navbar = () => {
  return (
    <>
      <div id='navbar-top'>
        <div className='cover'>
          <div className='container'>
            <div className='d-flex justify-content-between textblack'>
              <p className='mb-0 p-none pl-md-2'>
                <a href='#hero' className='mr-2'>
                  <i className='fas fa-phone mr-1'></i>
                  +6281281082447
                </a>
              </p>
              <p className='mb-0 p-none pl-md-2'>
                <a href='#hero'>
                  <i className='fas fa-envelope mr-1'></i>
                  cafeloliatliat@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <nav
          className='navbar navbar-expand-lg main-navbar bg-color main-navbar-color'
          id='main-navbar'
        >
          <div className='container'>
            <img src={logo} className='logo' alt='' />
            {/* <a href='#product' className='navbar-brand'>
              Cafe Loliat2
            </a> */}
            {/* <div className='order-lg-last btn-group'>
              <i className='fas fa-shopping-bag fa-2x'> </i>
            </div> */}
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#myNav'
              aria-controls='nav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <i className='fas fa-bars'></i>
            </button>
            <div className='collapse navbar-collapse' id='myNav'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <a href='#variety' className='nav-link'>
                    Kategori
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#product' className='nav-link'>
                    Menu
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#chef' className='nav-link'>
                    Chef
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#blog' className='nav-link'>
                    Menu Baru
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#contact' className='nav-link'>
                    Booking
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
