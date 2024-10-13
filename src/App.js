import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
