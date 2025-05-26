"use client"

import type React from "react"
import { motion } from "framer-motion"
import ParallaxSection from "@/components/shared/ParallaxSection" // Adjust path
import InteractiveSkillCard from "@/components/shared/InteractiveSkillCard" // Adjust path
import type { SkillItem } from "@/app/data/resumeData" // Adjust path

interface SkillsSectionProps {
  skills: SkillItem[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <ParallaxSection className="relative z-10 py-20 px-6">
      <div id="skills" className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <InteractiveSkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}

export default SkillsSection