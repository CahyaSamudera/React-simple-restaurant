import React from 'react';
import './Chef.css';
import chef1 from '../../images/chef.jpg';
import chef2 from '../../images/chef-2.jpg';

const Chef = () => {
  return (
    <>
      <div className='chef my-5' id='chef'>
        <div className='container'>
          <h2 className='text-center'>Chef Kami</h2>
          <div className='row'>
            <div className='col-sm-3 col-xs-6'>
              <div className='card card-block'>
                <a href='#hero'>
                  <img src={chef1} alt='chef' className='chef-img' />
                  <div className='card-title-wrap'>
                    <span className='card-title'> John Doe </span>
                    <span className='card-text'>Senior Chef</span>
                  </div>
                  <div className='chef-over'>
                    <h4 className='hidden-md-down'>Connect with me</h4>
                    <nav className='social-nav'>
                      <a href='#hero'>
                        <i className='fab fa-twitter'></i>
                      </a>
                      <a href='#hero'>
                        <i className='fab fa-instagram'></i>
                      </a>
                      <a href='#hero'>
                        <i className='fab fa-linkedin'></i>
                      </a>
                    </nav>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </a>
              </div>
            </div>

            <div className='col-sm-3 col-xs-6'>
              <div className='card card-block'>
                <a href='#hero'>
                  <img src={chef2} alt='chef' className='chef-img' />
                  <div className='card-title-wrap'>
                    <span className='card-title'> Jack Doe </span>
                    <span className='card-text'>Senior Chef</span>
                  </div>
                  <div className='chef-over'>
                    <h4 className='hidden-md-down'>Connect with me</h4>
                    <nav className='social-nav'>
                      <a href='#hero'>
                        <i className='fab fa-twitter'></i>
                      </a>
                      <a href='#hero'>
                        <i className='fab fa-instagram'></i>
                      </a>
                      <a href='#hero'>
                        <i className='fab fa-linkedin'></i>
                      </a>
                    </nav>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </a>
              </div>
            </div>

            <div className='col-sm-3 col-xs-6'>
              <div className='card card-block'>
                <a href='#hero'>
                  <img src={chef1} alt='chef' className='chef-img' />
                  <div className='card-title-wrap'>
                    <span className='card-title'> John Doe </span>
                    <span className='card-text'>Senior Chef</span>
                  </div>
                  <div className='chef-over'>
                    <h4 className='hidden-md-down'>Connect with me</h4>
                    <nav className='social-nav'>
                      <a href='#hero'>
                        <i className='fab fa-twitter'></i>
                      </a>
                      <a href='#hero'>
                        <i className='fab fa-instagram'></i>
                      </a>
                      <a href='#hero'>
                        <i className='fab fa-linkedin'></i>
                      </a>
                    </nav>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </a>
              </div>
            </div>

            <div className='col-sm-3 col-xs-6'>
              <div className='card card-block'>
                <a href='#hero'>
                  <img src={chef2} alt='chef' className='chef-img' />
                  <div className='card-title-wrap'>
                    <span className='card-title'> Jack Doe </span>
                    <span className='card-text'>Senior Chef</span>
                  </div>
                  <div className='chef-over'>
                    <h4 className='hidden-md-down'>Connect with me</h4>
                    <nav className='social-nav'>
                      <a href='#hero'>
                        <i className='fab fa-twitter'></i>
                      </a>
                      <a href='#hero'>
                        <i className='fab fa-instagram'></i>
                      </a>
                      <a href='#hero'>
                        <i className='fab fa-linkedin'></i>
                      </a>
                    </nav>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chef;
