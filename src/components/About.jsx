import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Cloud, Zap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Backend Development", level: 95, icon: Server },
    { name: "Frontend Development", level: 90, icon: Code },
    { name: "Cloud & DevOps", level: 85, icon: Cloud },
    { name: "Performance Optimization", level: 90, icon: Zap },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Subtle gradient overlay background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-cyan-800/5 to-green-900/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
        </motion.div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I’m a <span className="font-semibold text-foreground">Full Stack Developer</span> who loves turning ideas into fast, scalable, and user-focused digital experiences. I work across{" "}
              <span className="font-semibold text-foreground">Laravel, MERN Stack, and Magento 2</span>, building everything from APIs to full e-commerce ecosystems.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My passion lies in crafting clean, maintainable code and optimizing performance at every layer — from backend logic to frontend design. I enjoy solving real-world problems with tools like{" "}
              <span className="font-semibold text-foreground">AWS, Docker, and Jenkins</span>, and integrating platforms such as{" "}
              <span className="font-semibold text-foreground">Google Analytics, GTM, HubSpot CRM, PIM, and DAM</span> to enhance business efficiency.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project I build reflects one goal — to create products that perform well, look great, and make a difference.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-br from-blue-500 via-cyan-400 to-green-400 rounded-md shadow-md shadow-cyan-400/20">
                      <Icon className="w-5 h-5 text-background" />
                    </div>
                    <span className="font-semibold text-foreground">
                      {skill.name}
                    </span>
                    <span className="ml-auto text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
