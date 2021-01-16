import React from 'react';
import './Contact.css';
import Image1 from '../../images/restaurant.jpg';

const Contact = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Image1})`,
    backgroundSize: 'cover',
  };
  return (
    <>
      <div id='contact' className='book-section img' style={backgroundStyle}>
        <div className='container'>
          <div className='row d-flex'>
            <div className='col-md-7 reservation p-4 px-md-5 pb-md-5'>
              <div className='heading-section mb-5 text-center'>
                <h2 className='mb-4'>Reservasi Tempat</h2>
              </div>
              <form>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label for=''>Nama</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Nama'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label for=''>Email</label>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Email'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label for=''>Telepon</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='No Telepon'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label for=''>Tanggal</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Tanggal'
                        id='book-date'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label for=''>Waktu</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Waktu'
                        id='book-time'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label for=''>Orang</label>
                      <div className='select-wrap one-third'>
                        <select name='' id='' className='form-control'>
                          <option value=''>Orang</option>
                          <option value=''>1</option>
                          <option value=''>2</option>
                          <option value=''>3</option>
                          <option value=''>4</option>
                          <option value=''>5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12 mt-3'>
                    <div className='form-group text-center'>
                      <input
                        type='submit'
                        className='btn btn-book py-3 px-5'
                        value='Reservasi'
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
