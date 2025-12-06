import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Download, Code, Sparkles, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import Scene3D from './Scene3D'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
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

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const floatingShapes = [
    { size: 'w-64 h-64', color: 'bg-pastel-teal/10', position: 'top-20 -left-20', delay: 0 },
    { size: 'w-96 h-96', color: 'bg-pastel-lavender/10', position: 'top-40 right-10', delay: 0.5 },
    { size: 'w-72 h-72', color: 'bg-pastel-peach/10', position: 'bottom-20 left-40', delay: 1 },
    { size: 'w-48 h-48', color: 'bg-pastel-teal/20', position: 'bottom-40 right-20', delay: 1.5 },
  ]

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }))

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* 3D Background */}
      <Scene3D />

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pastel-lavender/5 to-pastel-teal/10 dark:from-gray-900 dark:via-pastel-lavender/10 dark:to-pastel-teal/20" />

      {/* Floating geometric shapes with parallax */}
      {floatingShapes.map((shape, index) => (
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
            ease: "easeInOut"
          }}
          style={{
            x: mousePosition.x * (index + 1) * 0.5,
            y: mousePosition.y * (index + 1) * 0.5,
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-pastel-teal/30 to-pastel-lavender/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <motion.div
        style={{ opacity, scale }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Floating icons around the avatar */}
        <div className="relative inline-block mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-pastel-teal via-pastel-lavender to-pastel-peach flex items-center justify-center text-6xl font-bold text-white shadow-2xl relative overflow-hidden"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            <span className="relative z-10">VY</span>

            {/* Orbiting icons */}
            {[Code, Sparkles, Zap].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  top: '50%',
                  left: '50%',
                  marginLeft: '-12px',
                  marginTop: '-12px',
                }}
              >
                <motion.div
                  style={{
                    transform: `translateX(${80 + i * 10}px)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  <Icon className="w-6 h-6 text-pastel-lavender dark:text-pastel-teal" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 gradient-text relative inline-block"
            style={{
              y: y2
            }}
          >
            Vinay Yellaram
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-xl opacity-60"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
        >
          Full Stack Developer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {['MERN Stack', 'Laravel', 'Magento 2', 'React.js'].map((tech, i) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-gradient-to-r from-pastel-teal/20 to-pastel-lavender/20 dark:from-pastel-teal/30 dark:to-pastel-lavender/30 rounded-full text-sm font-semibold border border-pastel-lavender/30 dark:border-pastel-teal/30"
              whileHover={{ scale: 1.1, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Crafting innovative web solutions with <span className="font-bold text-pastel-lavender dark:text-pastel-teal">3.5 years</span> of expertise in building scalable e-commerce platforms and modern applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ y: y1 }}
        >
          <motion.button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-pastel-teal to-pastel-lavender text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transform transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pastel-lavender to-pastel-peach opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          {/* <motion.button
            className="px-8 py-4 border-2 border-pastel-lavender dark:border-pastel-teal text-gray-800 dark:text-gray-200 rounded-full font-semibold hover:bg-pastel-lavender/10 dark:hover:bg-pastel-teal/10 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button> */}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, y: { repeat: Infinity, duration: 2 } }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-8 h-8 text-pastel-lavender dark:text-pastel-teal" />
        </motion.div> */}
      </motion.div>
    </section>
  )
}
