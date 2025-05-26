"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card" // Assuming path
import { Badge } from "@/components/ui/badge" // Assuming path
import { ExternalLink } from "lucide-react"
import ParallaxSection from "@/components/shared/ParallaxSection" // Adjust path
import type { ProjectItem } from "@/app/data/resumeData" // Adjust path

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <ParallaxSection className="relative z-10 py-20 px-6">
      <div id="projects" className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-teal-400/50 transition-all duration-300 backdrop-blur-sm h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      {project.name}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 rounded-lg hover:bg-teal-500 transition-all duration-300 transform group-hover:scale-110"
                      aria-label={`View project ${project.name} on GitHub`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:border-teal-400 hover:text-teal-400 transition-colors text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}

export default ProjectsSection