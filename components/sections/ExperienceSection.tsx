"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card" // Assuming path
import { Badge } from "@/components/ui/badge" // Assuming path
import ParallaxSection from "@/components/shared/ParallaxSection" // Adjust path
import type { ExperienceItem } from "@/app/data/resumeData" // Adjust path

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <ParallaxSection className="relative z-10 py-20 px-6">
      <div id="experience" className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-teal-400/50 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                      <p className="text-teal-400 font-medium text-lg">{exp.title}</p>
                    </div>
                    <Badge variant="outline" className="border-teal-400 text-teal-400 mt-2 md:mt-0 w-fit">
                      {exp.date}
                    </Badge>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-gray-300 leading-relaxed flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}

export default ExperienceSection