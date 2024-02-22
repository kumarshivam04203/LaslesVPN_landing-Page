import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Help from "./components/Help";
import Footer from "./components/Footer";
import './App.css'


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <div id="about">
            <About />
          </div>

          <div id="features">
            <Features />
          </div>

          <div id="pricing">
            <Pricing />
          </div>

          <div id="testimonials">
            <Testimonials />
          </div>

          <div id="help">
            <Help />
          </div>
        </main>

        <Footer/>
      </div>
    </Router>
  );
};

export default App;
