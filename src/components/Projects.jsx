import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, X } from 'lucide-react'

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
      title: 'ReportGenius',
      platform: 'MERN Stack Desktop Application',
      description: 'SEO analysis tool designed to simplify technical audits and automate website performance insights.',
      highlights: [
        'Real-time SEO score and issue detection',
        'Hreflang and meta tag validation',
        'Broken and unsafe link detection',
        'Exportable CSV reports for detailed analysis'
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Electron', 'Fast-CSV'],
      color: 'from-violet-500 to-indigo-400',
      image: '/projects/report-genius.png',
      url: 'https://report-genius.vinayyellaram.in'
    },
    {
      title: "Portfolio 3D Website",
      platform: "React.js • Three.js • Framer Motion",
      description:
        "An immersive 3D portfolio built with React Three Fiber, blending cinematic storytelling with modern web performance.",
      highlights: [
        "Dynamic 3D hero scene with camera controls and bloom effects",
        "Seamless transitions between sections using Framer Motion",
        "Lazy loading and Suspense-based asset management",
        "Deployed on GitHub Pages with CI/CD optimization",
      ],
      tech: ["React.js", "Three.js", "React Three Fiber", "Framer Motion", "GitHub Pages"],
      color: "from-pastel-teal to-pastel-lavender",
      image: "/projects/portfolio.png",
      url: "https://vinayyellaram.in",
      repo: "https://github.com/VinayYellaram/Portfolio_FE"
    }
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Projects</h2>
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
                {/* IMAGE SECTION */}
                <div className="relative h-56 overflow-hidden">
                  <picture>
                    <source srcSet={project.image} type="image/webp" />
                    <img
                      src="/projects/placeholder.png"
                      alt={project.title}
                      onError={(e) => {
                        if (e.currentTarget.src !== window.location.origin + "/projects/fallback.png") {
                          e.currentTarget.src = "/projects/fallback.png"; // final fallback
                        }
                      }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </picture>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-pastel-teal/10 via-pastel-lavender/10 to-pastel-peach/10"
                    style={{ y }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>

                {/* CONTENT SECTION */}
                <div className="p-6 relative z-10">
                  <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${project.color} mb-4`} />
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
                  <p className="text-lg font-semibold text-pastel-lavender dark:text-pastel-teal mb-3">{project.platform}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium"
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

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* IMAGE IN MODAL */}
            <div className="relative h-48 w-full overflow-hidden">
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/30  cursor-pointer">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </a>

              <picture>
                <source srcSet={selectedProject.image} type="image/webp" />
                <img
                  src="/projects/placeholder.png"
                  alt={selectedProject.title}
                  onError={(e) => {
                    if (e.currentTarget.src !== window.location.origin + "/projects/fallback.png") {
                      e.currentTarget.src = "/projects/fallback.png";
                    }
                  }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 breathe"
                />
              </picture>

              <div className={`absolute inset-0 bg-gradient-to-r ${selectedProject.color} opacity-30`} />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <button
                className="absolute top-4 left-4 p-2 bg-black/30 hover:bg-black/50 rounded-full transition-colors"
              >
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >

                  <ExternalLink className="w-8 h-8 text-white" />
                </a>
              </button>
            </div>

            {/* MODAL CONTENT */}
            <div className="p-8 overflow-y-auto">
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
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
