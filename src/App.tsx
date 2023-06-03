import React from 'react';
import './App.css';
import Hero from './components/Hero/hero';
import Programms from './components/programms/programms';
import Reasons from './components/reasons/reasons';
import Plans from './components/plans/plans';
import Testimonials from './components/testimonials/testimonials';
import Join from './components/join/join';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programms />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
