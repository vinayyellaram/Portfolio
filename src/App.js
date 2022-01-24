import React from "react";

import "./assets/Fonts/Poppins-Black.ttf";
import "./assets/Fonts/Poppins-Regular.ttf";
import "./assets/Fonts/Poppins-Bold.ttf";
import "./assets/Fonts/Poppins-SemiBold.ttf";
import "./assets/Fonts/Poppins-Medium.ttf";

import "./Styles/styles.css";
import "./App.css";
import "../src/Styles/Variables.css";
import "./Styles/styles.css";
import "./Styles/HeroSection.css";
import "./Styles/Contact.css";
import "./Styles/Footer.css";

import Hero from "./components/Hero";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
