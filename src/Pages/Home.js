import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Category from '../components/Category/Category';
import Product from '../components/Product/Product';
import Chef from '../components/Chef/Chef';
import Subscribe from '../components/Subscribe/Subscribe';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Product />
      <Chef />
      <Subscribe />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
