import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./layout/Footer";  // Assuming you have a Footer component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

