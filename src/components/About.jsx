import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Server, Cloud, Zap } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: 'Backend Development', level: 95, icon: Server },
    { name: 'Frontend Development', level: 90, icon: Code },
    { name: 'Cloud & DevOps', level: 85, icon: Cloud },
    { name: 'Performance Optimization', level: 90, icon: Zap },
  ]

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pastel-teal to-pastel-lavender mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I’m a <span className="font-semibold text-pastel-lavender dark:text-pastel-teal">Full Stack Developer</span> who loves turning ideas into fast, scalable, and user-focused digital experiences. I work across <span className="font-semibold text-pastel-lavender dark:text-pastel-teal">Laravel, MERN Stack, and Magento 2</span>, building everything from APIs to full e-commerce ecosystems.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My passion lies in crafting clean, maintainable code and optimizing performance at every layer — from backend logic to frontend design. I enjoy solving real-world problems with tools like <span className="font-semibold text-pastel-lavender dark:text-pastel-teal">AWS, Docker, and Jenkins</span>, and integrating platforms such as <span className="font-semibold text-pastel-lavender dark:text-pastel-teal">Google Analytics, GTM, HubSpot CRM, PIM, and DAM</span> to enhance business efficiency.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Every project I build reflects one goal — to create products that perform well, look great, and make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={skill.name}>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-pastel-lavender dark:text-pastel-teal" />
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-pastel-teal to-pastel-lavender rounded-full"
                    />
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
