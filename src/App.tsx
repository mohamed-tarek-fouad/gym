import React from 'react';
import './App.css';
import Hero from './components/Hero/hero';
import Programms from './components/programms/programms';
import Reasons from './components/reasons/reasons';
import Plans from './components/plans/plans';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programms />
      <Reasons />
      <Plans />
    </div>
  );
}

export default App;
