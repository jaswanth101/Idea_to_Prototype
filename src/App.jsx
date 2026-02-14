import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturesHuman from './components/FeaturesHuman';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#fffbf4] min-h-screen text-[#181229] font-inter">
      <Navbar />
      <Hero />
      <Features />
      <FeaturesHuman />
      <HowItWorks />
      <Gallery />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
