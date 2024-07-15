import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Calisma from './pages/CalismaAlanlari';
import Ticaret from './pages/TicaretHukuku';
import Aile from './pages/AileHukuku';
import Ceza from './pages/CezaHukuku';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calisma" element={<Calisma />} />
          <Route path="/ticaret" element={<Ticaret />} />
          <Route path="/aile" element={<Aile />} />
          <Route path="/ceza" element={<Ceza />} />



       


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
