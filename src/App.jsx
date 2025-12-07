import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import Hero from './components/Hero'
import About from './components/About'
import ImageGallery from './components/ImageGallery'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-pastel-lavender/20 dark:bg-pastel-teal/20 hover:bg-pastel-lavender/30 dark:hover:bg-pastel-teal/30 transition-all duration-300 shadow-lg"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-indigo-600" />
        )}
      </button> */}

      <Hero />
      <About />
      {/* <ImageGallery /> */}
      {/* <Projects /> */}
      <Skills />
      {/* <Experience />
      <Achievements /> */}
      <Contact />

      <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>© 2024 Vinay Yellaram. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
