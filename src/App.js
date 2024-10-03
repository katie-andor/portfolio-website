import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'; // Import your home component
import About from './About'; // Example of another component
import NotFound from './NotFound'; // Example for a 404 page

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Home page */}
      <Route path="/about" element={<About />} /> {/* Example route */}
      <Route path="*" element={<NotFound />} /> {/* 404 page */}
    </Routes>
  );
};

export default App;
