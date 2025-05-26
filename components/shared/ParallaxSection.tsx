"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, className = "" }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Adjust the parallax effect strength here if needed, e.g., [0, -100] for more movement
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

export default ParallaxSection