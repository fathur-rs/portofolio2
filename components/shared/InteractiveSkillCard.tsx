"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { SkillItem } from "@/app/data/resumeData" // Adjust path as needed

interface InteractiveSkillCardProps {
  skill: SkillItem;
  index: number;
}

const InteractiveSkillCard: React.FC<InteractiveSkillCardProps> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full overflow-hidden hover:border-teal-400/50 transition-all duration-300"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <Icon className="w-8 h-8 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
            <div>
              <h4 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
                {skill.category}
              </h4>
              <motion.div
                className="h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 mt-1"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {skill.items.map((item: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="group/item"
              >
                <div className="relative bg-gray-700/50 rounded-lg p-3 border border-gray-600/50 hover:border-teal-400/50 transition-all duration-300 hover:bg-gray-700/70">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-2 h-2 bg-teal-400 rounded-full"
                      animate={
                        isHovered
                          ? {
                              scale: [1, 1.3, 1],
                              opacity: [0.7, 1, 0.7],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                    <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default InteractiveSkillCard