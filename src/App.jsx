import  './App.css'
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Trading from './components/Trading';
import Testimonials from './components/Testimonials';
import FAQpage from './components/FAQpage';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Header />
      
      <Features />
      <Trading />
      <div className="bg-black text-white">
      <Testimonials />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-2">
        <FAQpage />
        <CallToAction />
        <Footer />
      </div>
      <footer className="text-center ml-250 text-gray-400">
      </footer>

     

     
    </div>
    </div>
  );
};

export default App;