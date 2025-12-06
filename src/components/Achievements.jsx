import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Lightbulb, TrendingUp } from 'lucide-react'

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Led cross-functional teams in delivering complex projects on time and within budget',
      color: 'from-pastel-teal to-cyan-400'
    },
    {
      icon: Award,
      title: 'PIM Integration Excellence',
      description: 'Successfully integrated enterprise PIM system, improving product data management by 60%',
      color: 'from-pastel-lavender to-purple-400'
    },
    {
      icon: Lightbulb,
      title: 'Proactive Problem Solving',
      description: 'Identified and resolved critical performance bottlenecks before they impacted production',
      color: 'from-pastel-peach to-orange-400'
    },
    {
      icon: TrendingUp,
      title: 'Technical Excellence',
      description: 'Consistently delivered high-quality code with 95%+ test coverage and zero critical bugs',
      color: 'from-cyan-400 to-blue-400'
    },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Key Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pastel-teal to-pastel-lavender mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
