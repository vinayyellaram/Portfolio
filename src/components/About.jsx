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
              With <span className="font-semibold text-pastel-lavender dark:text-pastel-teal">3.5 years of experience</span> as a Full Stack Developer, I specialize in creating robust, scalable web applications and e-commerce solutions. My expertise spans across the MERN stack, Laravel, and Magento 2 platforms.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I excel in backend API development, frontend UI/UX implementation, SEO optimization, and cloud deployment using AWS EC2, Docker, and Jenkins CI/CD. My experience includes seamless integration of third-party tools like Google Analytics, GTM, HubSpot CRM, PIM, and DAM systems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about writing clean, maintainable code and delivering solutions that drive business value while providing excellent user experiences.
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
