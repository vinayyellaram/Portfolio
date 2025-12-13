import React, { useState } from "react";
import Sky from "./components/Sky";
import Hero from "./components/Hero";
import HeroCopy from "./components/HeroCopy";
import { ThemeProvider } from "./components/theme-provider";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import About from "@components/About";
import Navbar from "@components/Navbar";
import Experience from "@components/Experience";
import Skills from "@components/Skills";
import Projects from "@components/Projects";


export default function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>

        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    </ThemeProvider>
  );
}
