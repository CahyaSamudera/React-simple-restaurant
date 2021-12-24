import React from 'react';
import './Blog.css';
import Image1 from '../../images/food-12.jpg';
import Image2 from '../../images/food-13.jpg';
import Image3 from '../../images/food-14.jpg';
import Image4 from '../../images/food-15.jpg';

const Blog = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Image1})`,
    backgroundSize: 'cover',
  };
  const backgroundStyle2 = {
    backgroundImage: `url(${Image2})`,
    backgroundSize: 'cover',
  };
  const backgroundStyle3 = {
    backgroundImage: `url(${Image3})`,
    backgroundSize: 'cover',
  };
  const backgroundStyle4 = {
    backgroundImage: `url(${Image4})`,
    backgroundSize: 'cover',
  };
  return (
    <>
      <div className='blog-section' id='blog'>
        <div className='container'>
          <div className='row justify-content-center mb-5'>
            <div className='col-md-7 blog-heading text-center'>
              <h2>Menu Terbaru</h2>
            </div>
          </div>
          <div className='row d-flex'>
            <div className='col-lg-6 d-flex align-items-stretch'>
              <div className='blog-start d-flex'>
                <a
                  href='#hero'
                  className='block-20 img'
                  style={backgroundStyle}
                >
                  <div></div>
                </a>
                <div className='text p-4 bg-light'>
                  {/* <div className='des'>
                    <p>
                      <i className='fa fa-calendar'></i> 24 Desember 2020
                    </p>
                  </div> */}
                  <h3 className='heading mb-3'>
                    <a href='#hero'>lorem ipsup</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis soluta quas modi vitae laudantium nobis beatae
                    nulla architecto dolor excepturi!
                  </p>
                  <a href='#hero' className='btn-custom'>
                    Detail
                    <i className='fa fa-long-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-6 d-flex align-items-stretch'>
              <div className='blog-start d-flex'>
                <a
                  href='#hero'
                  className='block-20 img'
                  style={backgroundStyle2}
                >
                  <div></div>
                </a>
                <div className='text p-4 bg-light'>
                  {/* <div className='des'>
                    <p>
                      <i className='fa fa-calendar'></i> 14 Oktober 2020
                    </p>
                  </div> */}
                  <h3 className='heading mb-3'>
                    <a href='#hero'>lorem ipsup</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis soluta quas modi vitae laudantium nobis beatae
                    nulla architecto dolor excepturi!
                  </p>
                  <a href='#hero' className='btn-custom'>
                    Detail
                    <i className='fa fa-long-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-6 d-flex align-items-stretch'>
              <div className='blog-start d-flex'>
                <a
                  href='#hero'
                  className='block-20 img'
                  style={backgroundStyle3}
                >
                  <div></div>
                </a>
                <div className='text p-4 bg-light'>
                  {/* <div className='des'>
                    <p>
                      <i className='fa fa-calendar'></i> 13 Agustus 2020
                    </p>
                  </div> */}
                  <h3 className='heading mb-3'>
                    <a href='#hero'>lorem ipsup</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis soluta quas modi vitae laudantium nobis beatae
                    nulla architecto dolor excepturi!
                  </p>
                  <a href='#hero' className='btn-custom'>
                    Detail
                    <i className='fa fa-long-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-6 d-flex align-items-stretch'>
              <div className='blog-start d-flex'>
                <a
                  href='#hero'
                  className='block-20 img'
                  style={backgroundStyle4}
                >
                  <div></div>
                </a>
                <div className='text p-4 bg-light'>
                  {/* <div className='des'>
                    <p>
                      <i className='fa fa-calendar'></i> 21 Juli 2020
                    </p>
                  </div> */}
                  <h3 className='heading mb-3'>
                    <a href='#hero'>lorem ipsup</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis soluta quas modi vitae laudantium nobis beatae
                    nulla architecto dolor excepturi!
                  </p>
                  <a href='#hero' className='btn-custom'>
                    Detail
                    <i className='fa fa-long-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
