"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@components/components/ui/card";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Software Engineer 2",
      company: "Apexon",
      period: "2024 - Present",
      achievements: [
        "Led development of multiple Magento 2 projects with custom integrations",
        "Implemented PIM and DAM systems for enterprise clients",
        "Optimized application performance, reducing load times by 40%",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      role: "Software Engineer 1",
      company: "Apexon",
      period: "2022 - 2024",
      achievements: [
        "Developed headless CRM system using Laravel and React.js",
        "Integrated third-party APIs including HubSpot and Google Analytics",
        "Implemented automated testing and CI/CD pipelines",
        "Managed cloud infrastructure on AWS EC2",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-background relative overflow-hidden"
    >
      {/* subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-cyan-800/5 to-green-900/10 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
            Experience
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative ">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-green-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 flex flex-col md:flex-row items-start gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="flex-1" />

              {/* Timeline node */}
              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-green-400/20 animate-ping" />
              </div>

              {/* Experience Card using shadcn */}
              <div className="flex-1 mx-10">
                <Card className="shadow-lg border border-border transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:scale-[1.02] duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-cyan-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold">{exp.period}</span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {exp.role}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 flex-shrink-0 shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
                        {achievement}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
