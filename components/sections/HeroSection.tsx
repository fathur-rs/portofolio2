"use client"

import type React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button" // Assuming this path is correct
import { Mail, Github, Linkedin } from "lucide-react"
import type { ResumeData } from "@/app/data/resumeData" // Adjust path

interface HeroSectionProps {
  resumeData: Pick<ResumeData, "name" | "title" | "summary">; // Use Pick for relevant props
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ resumeData, scrollToSection }) => {
  // Parallax effect for hero background
  const { scrollYProgress } = useScroll() // This will apply to the whole scrollable container
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]) // Adjusted range for hero
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]) // Fade out faster

  return (
    <motion.section
      id="about"
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center px-6 pt-20" // pt-20 to account for fixed navbar
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {resumeData.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-teal-400 font-light mb-8">{resumeData.title}</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          {resumeData.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 px-8 py-3 text-lg font-medium transition-all duration-300"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-6 pt-8"
        >
          <a
            href="https://github.com/fathur-rs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-teal-500 transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/fathurrahman-syarief/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-teal-500 transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HeroSection