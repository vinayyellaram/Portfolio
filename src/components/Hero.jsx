"use client"

import { Helmet } from "react-helmet"
import GlbModelRoom from "./3dModels/GlbModelRoom"
import { motion } from "framer-motion"
import GlbModel from "./3dModels/GlbModel"

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden place-items-center" id="home">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Vinay Yellaram | Full Stack Developer</title>
        <meta
          name="description"
          content="Building fast, scalable, no-nonsense web apps using Laravel, React, and modern tech."
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

      {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent dark:from-black/70 dark:via-black/40 dark:to-transparent pointer-events-none z-[5]" /> */}

      {/* ===== 3D Model Background ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="inset-0 h-full w-full"
      >
        <GlbModelRoom />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 z-10 flex flex-col items-start text-left px-6 py-20 pointer-events-none"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-2xl md:text-3xl text-accent-foreground mb-3"
          >
            Hi, my name is{" "}
            <span className="font-semibold bg-clip-text">
              Vinay Yellaram
            </span>
          </motion.span>

          {/* Main Heading */}
          <motion.h2
            className="text-2xl sm:text-2xl md:text-5xl lg:text-7xl font-extrabold mb-4 max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            Building Fast, Scalable, No-Nonsense Web Apps.
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-xl leading-relaxed lg:mx-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            I turn complex ideas into clean, high-performance systems. From{" "}
            <span className="font-semibold">
              Laravel APIs
            </span>{" "}
            to{" "}
            <span className="font-semibold">
              React frontends
            </span>{" "}
            and e-commerce integrations, I care about efficiency, clean code, and
            results that actually matter.
          </motion.p>

          <button
            className="text-xl scroll-down-button pixel-button mt-10 pointer-events-auto"
            onClick={() => {
              window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <span className="arrow">Learn More</span>
          </button>


        </motion.div>
      </motion.div>
    </section >
  )
}
