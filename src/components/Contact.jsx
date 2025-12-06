import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! This is a demo form.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-600' },
    { icon: Mail, label: 'Email', href: 'mailto:vinay@example.com', color: 'hover:text-pastel-teal' },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pastel-teal to-pastel-lavender mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-pastel-lavender dark:focus:border-pastel-teal focus:outline-none transition-colors text-gray-900 dark:text-gray-100"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-pastel-lavender dark:focus:border-pastel-teal focus:outline-none transition-colors text-gray-900 dark:text-gray-100"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-pastel-lavender dark:focus:border-pastel-teal focus:outline-none transition-colors text-gray-900 dark:text-gray-100 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-pastel-teal to-pastel-lavender text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Connect With Me</h3>
              <div className="space-y-4">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:shadow-md ${social.color} group`}
                    >
                      <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{social.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-pastel-teal/10 via-pastel-lavender/10 to-pastel-peach/10 dark:from-pastel-teal/20 dark:via-pastel-lavender/20 dark:to-pastel-peach/20 rounded-2xl p-8 border border-pastel-lavender/20 dark:border-pastel-teal/20">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">Let's Build Something Amazing</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Whether you have a project in mind or just want to chat about technology, I'd love to hear from you!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
