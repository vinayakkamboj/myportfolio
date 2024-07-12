import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import Navbar from './components/Navbar';
import VantaBackground from './components/VantaBackground';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Experience';

function App() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <VantaBackground />
      <Router>
        <Navbar />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
