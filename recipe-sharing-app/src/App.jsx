import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import   
 ContactPage from './ContactPage';
import ServicesPage from './ServicesPage';
import AboutPage from './AboutPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route 
 path="/about" element={<AboutPage />} />
      </Routes> 

    </Router>
  );
}

export default App;