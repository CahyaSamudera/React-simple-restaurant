import React from 'react';
import './Category.css';
import Food1 from '../../images/food-1.jpg';
import Food2 from '../../images/food-3.jpg';

const Category = () => {
  return (
    <>
      <div id='variety' className='variety pt-4'>
        <div className='container'>
          <div className='section-title'>
            <h2 className='text-center font-weight-bold'>Kategori</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              neque dolor consequatur ab eius soluta vero voluptas fugiat veniam
              nemo.
            </p>
          </div>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-stretch'>
              <div className='card'>
                <div className='card-img'>
                  <img src={Food1} alt='food-1' />
                </div>
                <div className='card-body'>
                  <h5 className='card-title'>
                    <a href='#hero' className=''>
                      Salad
                    </a>
                  </h5>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    voluptates in minima mollitia a aliquid repudiandae suscipit
                    commodi omnis distinctio?
                  </p>
                  <div className='read-more'>
                    <a href='#hero'>
                      <i className='fas fa-arrow-circle-right'></i>
                      Baca
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6 d-flex align-items-stretch'>
              <div className='card'>
                <div className='card-img'>
                  <img src={Food2} alt='food-2' />
                </div>
                <div className='card-body'>
                  <h5 className='card-title'>
                    <a href='#hero' className=''>
                      Menu Utama
                    </a>
                  </h5>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    voluptates in minima mollitia a aliquid repudiandae suscipit
                    commodi omnis distinctio?
                  </p>
                  <div className='read-more'>
                    <a href='#hero'>
                      <i className='fas fa-arrow-circle-right'></i>
                      Baca
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6 d-flex align-items-stretch'>
              <div className='card'>
                <div className='card-img'>
                  <img src={Food1} alt='food-1' />
                </div>
                <div className='card-body'>
                  <h5 className='card-title'>
                    <a href='#hero' className=''>
                      Menu Spesial
                    </a>
                  </h5>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    voluptates in minima mollitia a aliquid repudiandae suscipit
                    commodi omnis distinctio?
                  </p>
                  <div className='read-more'>
                    <a href='#hero'>
                      <i className='fas fa-arrow-circle-right'></i>
                      Baca
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6 d-flex align-items-stretch'>
              <div className='card'>
                <div className='card-img'>
                  <img src={Food2} alt='food-2' />
                </div>
                <div className='card-body'>
                  <h5 className='card-title'>
                    <a href='#hero' className=''>
                      Menu Penutup
                    </a>
                  </h5>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    voluptates in minima mollitia a aliquid repudiandae suscipit
                    commodi omnis distinctio?
                  </p>
                  <div className='read-more'>
                    <a href='#hero'>
                      <i className='fas fa-arrow-circle-right'></i>
                      Baca
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
