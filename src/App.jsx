import { ThemeProvider } from "./components/theme-provider";
import CustomCursor from "@components/CustomCursor";
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import About from "@components/About";
import Projects from "@components/Projects";
import Skills from "@components/Skills";
import Services from "@components/Services";
import Logbook from "@components/Logbook";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        {/* <Logbook /> */}
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
