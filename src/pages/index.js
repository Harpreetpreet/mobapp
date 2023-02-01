import React from 'react';
import Banner from '../Components/Banner';
import Highlight from '../Components/Highlight';
import Footer from '../Components/Footer';
import Feature from '../Components/Feature';
import Appdiscover from '../Components/Appdiscover';
import Tags from '../Components/Tags';
import Applaunch from '../Components/Applaunch';
import Createaccount from '../Components/Createaccount';
import Testimonials from '../Components/Testimonials';
import Gallery from '../Components/Gallery';
import Pricing from '../Components/Pricing';
import FAQSection from '../Components/FAQSection';
import Download from '../Components/Download';

const index = () => {
  return (
    <div>
      <Banner />
      <Tags />
      <Highlight />
      <Appdiscover />
      <Feature />
      <Applaunch />
      <Createaccount />
      <Testimonials />
      <Gallery />
      <Pricing />
      <FAQSection />
      <Download />
      <Footer />
    </div>
  );
};

export default index;
