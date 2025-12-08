import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import background from "../assets/Hero_img.jpeg"
import { Helmet } from "react-helmet"
// import Scene3D from './Scene3D' // uncomment when you have the 3D component

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const floatingShapes = [
    { size: 'w-64 h-64', color: 'bg-pastel-teal/10', position: 'top-20 -left-20', delay: 0 },
    { size: 'w-96 h-96', color: 'bg-pastel-lavender/10', position: 'top-40 right-10', delay: 0.5 },
    { size: 'w-72 h-72', color: 'bg-pastel-peach/10', position: 'bottom-20 left-40', delay: 1 },
    { size: 'w-48 h-48', color: 'bg-pastel-teal/20', position: 'bottom-40 right-20', delay: 1.5 },
  ]

  return (
    <section
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundBlendMode: "soft-light",
      }}
    >
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Vinay Yellaram | Full Stack Developer</title>
        <meta
          name="description"
          content="Building fast, scalable, no-nonsense web apps using Laravel, React, and modern tech. I craft high-performance systems that deliver real results."
        />
        <meta property="og:title" content="Vinay Yellaram | Full Stack Developer" />
        <meta
          property="og:description"
          content="Building fast, scalable, no-nonsense web apps using Laravel, MERN, and Magento 2."
        />
        <meta property="og:url" content="https://vinayyellaram.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vinayyellaram.in/og-image.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Background gradient */}
      <div className="absolute inset-0 from-white via-pastel-lavender/5 to-pastel-teal/10 dark:from-gray-900 dark:via-pastel-lavender/10 dark:to-pastel-teal/20" />

      {/* Floating geometric shapes */}
      {/* {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} ${shape.color} rounded-full blur-3xl ${shape.position}`}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
          style={{
            x: mousePosition.x * (index + 1) * 0.5,
            y: mousePosition.y * (index + 1) * 0.5,
          }}
        />
      ))} */}

      {/* ===== Left Section: 3D Asset Placeholder ===== */}


      {/* <Scene3D /> */}
      {/* <motion.div
        className="w-full lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0"
        style={{ opacity, scale }}
      >
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-tr from-pastel-lavender/10 to-pastel-teal/20 flex items-center justify-center">
          
          <span className="text-sm text-gray-400 italic">3D Asset Coming Soon</span>
        </div>
      </motion.div> */}

      {/* ===== Right Section: Hero Text ===== */}
      <motion.div
        // style={{ opacity, scale, y: y1 }}
        className="w-full lg:w-1/2 text-center lg:text-left relative z-10"
      >
        {/* Intro */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-3"
        >
          Hi, my name is{" "}
          <span className="font-semibold bg-gradient-to-r from-pastel-lavender to-pastel-teal bg-clip-text text-transparent">
            Vinay Yellaram
          </span>
        </motion.h2>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 drop-shadow-2xl text-glow"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          Building Fast, Scalable, No-Nonsense Web Apps.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          I turn complex ideas into clean, high-performance systems. From{" "}
          <span className="font-semibold text-pastel-lavender dark:text-pastel-teal">
            Laravel APIs
          </span>{" "}
          to{" "}
          <span className="font-semibold text-pastel-lavender dark:text-pastel-teal">
            React frontends
          </span>{" "}
          and e-commerce integrations, I care about efficiency, clean code, and
          results that actually matter.
        </motion.p>
      </motion.div>
    </section>
  )
}
