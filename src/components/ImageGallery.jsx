import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Image as ImageIcon, Camera } from 'lucide-react'

export default function ImageGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  // Placeholder images - replace these URLs with your actual images
  const images = [
    {
      id: 1,
      title: "Your Profile Photo",
      description: "Add your professional headshot here",
      placeholder: true
    },
    {
      id: 2,
      title: "Team Collaboration",
      description: "Photo of you working with your team",
      placeholder: true
    },
    {
      id: 3,
      title: "Project Screenshot",
      description: "Screenshots of your best work",
      placeholder: true
    },
    {
      id: 4,
      title: "Workspace Setup",
      description: "Your development environment",
      placeholder: true
    },
    {
      id: 5,
      title: "Conference/Event",
      description: "Speaking or attending tech events",
      placeholder: true
    },
    {
      id: 6,
      title: "Achievement Moment",
      description: "Celebrating project launches",
      placeholder: true
    }
  ]

  return (
    <section ref={ref} className="py-20 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-pastel-lavender/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-pastel-teal/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Camera className="w-16 h-16 text-pastel-lavender dark:text-pastel-teal mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Visual Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A glimpse into my professional journey, workspace, and achievements
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pastel-teal to-pastel-lavender mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                  className="mb-4 p-4 bg-white/50 dark:bg-gray-900/50 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <ImageIcon className="w-12 h-12 text-pastel-lavender dark:text-pastel-teal" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {image.description}
                </p>

                {/* Instructions overlay */}
                <div className="mt-4 px-4 py-2 bg-pastel-lavender/20 dark:bg-pastel-teal/20 rounded-lg backdrop-blur-sm border border-pastel-lavender/30 dark:border-pastel-teal/30">
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                    Replace with your image
                  </p>
                </div>
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-pastel-lavender/50 dark:group-hover:border-pastel-teal/50 rounded-2xl transition-all duration-300" />

              {/* Parallax overlay effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pastel-teal/20 via-pastel-lavender/20 to-pastel-peach/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  y: useTransform(scrollYProgress, [0, 1], [20, -20])
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
