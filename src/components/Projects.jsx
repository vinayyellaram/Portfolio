import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, X, Image as ImageIcon } from 'lucide-react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const projects = [
    {
      title: 'Tomduffy',
      platform: 'Magento 2',
      description: 'E-commerce platform with advanced SEO optimization and analytics integration',
      highlights: [
        'SEO optimization implementation',
        'Google Analytics & GTM integration',
        'Brandfolder DAM integration for digital asset management',
        'Performance optimization and conversion tracking'
      ],
      tech: ['Magento 2', 'PHP', 'MySQL', 'GA', 'GTM', 'DAM'],
      color: 'from-pastel-teal to-cyan-400',
      imagePlaceholder: 'Add project screenshot here'
    },
    {
      title: 'Harmonbio',
      platform: 'Laravel & React.js',
      description: 'Modern headless CRM system with optimized backend and frontend',
      highlights: [
        'Built headless UI with React.js for better performance',
        'Optimized CRM backend with Laravel',
        'Implemented cron jobs and queue management for background tasks',
        'Created RESTful APIs for seamless data flow'
      ],
      tech: ['Laravel', 'React.js', 'MySQL', 'Queue Management', 'REST API'],
      color: 'from-pastel-lavender to-purple-400',
      imagePlaceholder: 'Add project screenshot here'
    },
    {
      title: 'Winoa',
      platform: 'Magento 2',
      description: 'Enterprise e-commerce platform with PIM integration and cloud deployment',
      highlights: [
        'PIM (Product Information Management) integration',
        'AWS EC2 deployment using Docker',
        'Jenkins CI/CD pipeline setup',
        'Automated deployment and testing workflows'
      ],
      tech: ['Magento 2', 'AWS EC2', 'Docker', 'Jenkins', 'PIM'],
      color: 'from-pastel-peach to-orange-400',
      imagePlaceholder: 'Add project screenshot here'
    },
    {
      title: 'OroCommerce',
      platform: 'Custom Development',
      description: 'Led team in building custom modules with modern technologies',
      highlights: [
        'Team leadership and project coordination',
        'Custom module development with PHP',
        'PostgreSQL database design and optimization',
        'Twig template implementation for dynamic content'
      ],
      tech: ['PHP', 'PostgreSQL', 'Twig', 'OroCommerce', 'Team Leadership'],
      color: 'from-cyan-400 to-blue-400',
      imagePlaceholder: 'Add project screenshot here'
    },
  ]

  return (
    <>
      <section id="projects" ref={ref} className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Key Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pastel-teal to-pastel-lavender mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-200 dark:border-gray-700 group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image placeholder section */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-pastel-teal/20 via-pastel-lavender/20 to-pastel-peach/20"
                    style={{ y }}
                  />
                  <div className="relative z-10 text-center p-6">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      <ImageIcon className="w-12 h-12 mx-auto mb-2 text-pastel-lavender dark:text-pastel-teal opacity-50" />
                    </motion.div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      {project.imagePlaceholder}
                    </p>
                  </div>
                  {/* Overlay gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>
                
                {/* Content section */}
                <div className="p-6">
                  <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${project.color} mb-4`} />
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
                  <p className="text-sm font-semibold text-pastel-lavender dark:text-pastel-teal mb-3">{project.platform}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 flex items-center gap-2 text-pastel-lavender dark:text-pastel-teal font-semibold hover:gap-3 transition-all">
                    View Details <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className={`h-3 w-32 rounded-full bg-gradient-to-r ${selectedProject.color} mb-6`} />
            <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">{selectedProject.title}</h3>
            <p className="text-lg font-semibold text-pastel-lavender dark:text-pastel-teal mb-4">{selectedProject.platform}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProject.description}</p>
            
            <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Key Highlights</h4>
            <ul className="space-y-3 mb-6">
              {selectedProject.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-pastel-teal to-pastel-lavender flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
            
            <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-pastel-teal/10 to-pastel-lavender/10 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-pastel-lavender/20 dark:border-pastel-teal/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
