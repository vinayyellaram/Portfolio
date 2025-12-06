import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Layers, Database, Cloud, Workflow, Puzzle } from 'lucide-react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
      color: 'from-pastel-teal to-cyan-400'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: ['Laravel', 'React.js', 'Inertia.js', 'Tailwind CSS', 'Node.js'],
      color: 'from-pastel-lavender to-purple-400'
    },
    {
      title: 'Platforms',
      icon: Workflow,
      skills: ['Magento 2', 'OroCommerce', 'WordPress', 'Shopify'],
      color: 'from-pastel-peach to-orange-400'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      color: 'from-cyan-400 to-blue-400'
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: ['GitHub', 'Docker', 'Jenkins', 'AWS EC2', 'CI/CD'],
      color: 'from-pink-400 to-rose-400'
    },
    {
      title: 'Integrations',
      icon: Puzzle,
      skills: ['Google Analytics', 'GTM', 'HubSpot CRM', 'PIM', 'DAM'],
      color: 'from-violet-400 to-indigo-400'
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pastel-teal to-pastel-lavender mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-pastel-teal/20 hover:to-pastel-lavender/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
