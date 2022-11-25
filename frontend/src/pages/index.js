import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import ContactUs from '../components/ContactUs';

const Home = () => {
  return (
    <div id='home'>
      <Hero />
      <About />
      <Projects />
      <Technologies />
      {/* <Testimonials /> */}
      <ContactUs />
      <Contact />
    </div>
  );
};

export default Home;