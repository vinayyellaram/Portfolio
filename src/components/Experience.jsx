import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      role: 'Software Engineer 2',
      company: 'E-Commerce Solutions',
      period: '2023 - Present',
      achievements: [
        'Led development of multiple Magento 2 projects with custom integrations',
        'Implemented PIM and DAM systems for enterprise clients',
        'Optimized application performance, reducing load times by 40%',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      role: 'Software Engineer 1',
      company: 'Apexon',
      period: '2022 - 2023',
      achievements: [
        'Developed headless CRM system using Laravel and React.js',
        'Integrated third-party APIs including HubSpot and Google Analytics',
        'Implemented automated testing and CI/CD pipelines',
        'Managed cloud infrastructure on AWS EC2'
      ]
    },
    // {
    //   role: 'Full Stack Developer',
    //   company: 'Tech Startup',
    //   period: '2021 - 2022',
    //   achievements: [
    //     'Built RESTful APIs and backend services with Laravel',
    //     'Created responsive frontends using React.js and Tailwind CSS',
    //     'Implemented queue management and background job processing',
    //     'Collaborated with cross-functional teams in Agile environment'
    //   ]
    // },
  ]

  return (
    <section ref={ref} className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pastel-teal to-pastel-lavender mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-pastel-teal via-pastel-lavender to-pastel-peach" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 flex flex-col md:flex-row items-start gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div className="flex-1" />

              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pastel-teal to-pastel-lavender shadow-lg" />
                <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-pastel-teal/20 to-pastel-lavender/20 animate-ping" />
              </div>

              <div className="flex-1">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-pastel-lavender dark:text-pastel-teal mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-800 dark:text-gray-100">{exp.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pastel-teal to-pastel-lavender flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
