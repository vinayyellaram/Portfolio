import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Layers,
  Database,
  Cloud,
  Workflow,
  Puzzle,
} from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["PHP", "JavaScript", "HTML5", "CSS3", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: ["Laravel", "React.js", "Inertia.js", "Tailwind CSS", "Node.js"],
    },
    {
      title: "Platforms",
      icon: Workflow,
      skills: ["Magento 2", "OroCommerce"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["GitHub", "Docker", "Jenkins", "AWS EC2", "CI/CD"],
    },
    {
      title: "Integrations",
      icon: Puzzle,
      skills: ["Google Analytics", "GTM", "HubSpot CRM", "PIM", "DAM"],
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Subtle glowing gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-cyan-800/5 to-green-900/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:scale-[1.02] transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-4 shadow-md shadow-cyan-400/20 group-hover:shadow-cyan-400/30 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-background" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {category.title}
                </h3>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted text-foreground/80 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-cyan-400/20 hover:to-green-400/20 hover:text-foreground transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
