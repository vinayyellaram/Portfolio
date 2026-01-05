import React, { useState, useEffect, Suspense } from "react";
import Hero from "./components/Hero";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "@components/Footer";
import About from "@components/About";
import Navbar from "@components/Navbar";
import Experience from "@components/Experience";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Loader from "@components/Loader";
import Contact from "@components/Contact";


export default function App() {
  const [loading, setLoading] = useState(true);

  // Simulate load delay OR wait for assets
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
        <Footer />
      </>
    </ThemeProvider>
  );
}
