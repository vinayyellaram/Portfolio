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
import { useProgress, useGLTF } from "@react-three/drei";

// === 🚀 Preload Heavy Assets ===
useGLTF.preload("./models/3d_computer.glb");
useGLTF.preload("./models/Empty_Room.glb");
// useGLTF.preload("./models/Room_v03.glb"); // Uncomment if actually used in the final scene

export default function App() {
  const [loading, setLoading] = useState(true);
  const { progress } = useProgress();

  useEffect(() => {
    // Wait until 100% loaded, then give a small buffer for smooth exit
    if (progress === 100) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (loading) return <Loader progress={progress} />;

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
