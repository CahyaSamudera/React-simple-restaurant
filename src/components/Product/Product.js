import React from 'react';
import './Product.css';
import background1 from '../../images/food-5.jpg';
import background2 from '../../images/food-6.jpg';
import background3 from '../../images/food-7.jpg';
import background4 from '../../images/food-1.jpg';
import background5 from '../../images/food-2.jpg';
import background6 from '../../images/food-3.jpg';
import background7 from '../../images/food-4.jpg';

const Product = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  const backgroundStyle2 = {
    backgroundImage: `url(${background2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  const backgroundStyle3 = {
    backgroundImage: `url(${background3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  const backgroundStyle4 = {
    backgroundImage: `url(${background4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  const backgroundStyle5 = {
    backgroundImage: `url(${background5})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  const backgroundStyle6 = {
    backgroundImage: `url(${background6})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  const backgroundStyle7 = {
    backgroundImage: `url(${background7})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <>
      <div className='product-section bg-img py-3' id='product'>
        <div className='container'>
          <div className='row justify-content-center pb-5'>
            <div className='col-md-7 heading-section text-center'>
              <h2 className='font-weight-bold text-color glow'>U Resto</h2>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-3 d-flex'>
              <div className='product glow'>
                <div
                  className='img d-flex align-items-center justify-content-center'
                  style={backgroundStyle}
                >
                  <div className='icons'>
                    <p className='icon-block d-flex'>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-shopping-cart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-heart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-eye'></i>
                      </a>
                    </p>
                  </div>
                </div>
                <div className='text text-center'>
                  <span className='out'>Terfavorit</span>
                  <span className='category font-weight-bold'>lorem ipsum</span>
                  <h2 className='text-white'>Spesifikasi</h2>
                  <span className='price'>50k</span>
                </div>
              </div>
            </div>

            <div className='col-md-3 d-flex'>
              <div className='product glow'>
                <div
                  className='img d-flex align-items-center justify-content-center'
                  style={backgroundStyle2}
                >
                  <div className='icons'>
                    <p className='icon-block d-flex'>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-shopping-cart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-heart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-eye'></i>
                      </a>
                    </p>
                  </div>
                </div>
                <div className='text text-center'>
                  <span className='day'>Terlaris</span>
                  <span className='category font-weight-bold'>lorem ipsum</span>
                  <h2 className='text-white'>Spesifikasi</h2>
                  <span className='price'>45k</span>
                </div>
              </div>
            </div>

            <div className='col-md-3 d-flex'>
              <div className='product glow'>
                <div
                  className='img d-flex align-items-center justify-content-center'
                  style={backgroundStyle3}
                >
                  <div className='icons'>
                    <p className='icon-block d-flex'>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-shopping-cart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-heart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-eye'></i>
                      </a>
                    </p>
                  </div>
                </div>
                <div className='text text-center'>
                  <span className='week'>Terlaris</span>
                  <span className='category font-weight-bold'>lorem ipsum</span>
                  <h2 className='text-white'>Spesifikasi</h2>
                  <span className='price'>50k</span>
                </div>
              </div>
            </div>

            <div className='col-md-3 d-flex'>
              <div className='product glow'>
                <div
                  className='img d-flex align-items-center justify-content-center'
                  style={backgroundStyle4}
                >
                  <div className='icons'>
                    <p className='icon-block d-flex'>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-shopping-cart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-heart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-eye'></i>
                      </a>
                    </p>
                  </div>
                </div>
                <div className='text text-center'>
                  {/* <span className="out">Out of Kitchen</span> */}
                  <span className='category font-weight-bold'>lorem ipsum</span>
                  <h2 className='text-white'>Spesifikasi</h2>
                  <span className='price'>50k</span>
                </div>
              </div>
            </div>

            <div className='col-md-3 d-flex'>
              <div className='product glow'>
                <div
                  className='img d-flex align-items-center justify-content-center'
                  style={backgroundStyle5}
                >
                  <div className='icons'>
                    <p className='icon-block d-flex'>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-shopping-cart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-heart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-eye'></i>
                      </a>
                    </p>
                  </div>
                </div>
                <div className='text text-center'>
                  <span className='category font-weight-bold'>lorem ipsum</span>
                  <h2 className='text-white'>Spesifikasi</h2>
                  <span className='price'>55k</span>
                </div>
              </div>
            </div>

            <div className='col-md-3 d-flex'>
              <div className='product glow'>
                <div
                  className='img d-flex align-items-center justify-content-center'
                  style={backgroundStyle6}
                >
                  <div className='icons'>
                    <p className='icon-block d-flex'>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-shopping-cart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-heart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-eye'></i>
                      </a>
                    </p>
                  </div>
                </div>
                <div className='text text-center'>
                  <span className='category font-weight-bold'>lorem ipsum</span>
                  <h2 className='text-white'>Spesifikasi</h2>
                  <span className='price'>40k</span>
                </div>
              </div>
            </div>

            <div className='col-md-3 d-flex'>
              <div className='product glow'>
                <div
                  className='img d-flex align-items-center justify-content-center'
                  style={backgroundStyle7}
                >
                  <div className='icons'>
                    <p className='icon-block d-flex'>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-shopping-cart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-heart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-eye'></i>
                      </a>
                    </p>
                  </div>
                </div>
                <div className='text text-center'>
                  <span className='category font-weight-bold'>lorem ipsum</span>
                  <h2 className='text-white'>Spesifikasi</h2>
                  <span className='price'>38k</span>
                </div>
              </div>
            </div>

            <div className='col-md-3 d-flex'>
              <div className='product glow'>
                <div
                  className='img d-flex align-items-center justify-content-center'
                  style={backgroundStyle}
                >
                  <div className='icons'>
                    <p className='icon-block d-flex'>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-shopping-cart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-heart'></i>
                      </a>
                      <a
                        href='#hero'
                        className='d-flex align-items-center justify-content-center'
                      >
                        <i className='fas fa-eye'></i>
                      </a>
                    </p>
                  </div>
                </div>
                <div className='text text-center'>
                  <span className='category font-weight-bold'>lorem ipsum</span>
                  <h2 className='text-white'>Spesifikasi</h2>
                  <span className='price'>42k</span>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-4'>
              <a href='#hero' className='btn btn-prod d-block'>
                Lihat semua produk
                <i className='fas fa-carrot'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
