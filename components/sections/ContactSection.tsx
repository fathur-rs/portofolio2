"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button" // Assuming path
import { Mail } from "lucide-react"
import ParallaxSection from "@/components/shared/ParallaxSection"

const ContactSection: React.FC = () => {
  // Dummy action for now, replace with actual logic
  const handleOpenLinkedIn = () => {
    // Replace 'YOUR_LINKEDIN_PROFILE_URL' with your actual LinkedIn profile URL
    window.location.href = "https://www.linkedin.com/in/fathurrahman-syarief/";
  };

  // const handleDownloadResume = () => {
  //   // Replace with the actual path to your resume PDF
  //   // For example, if your resume is in the public folder:
  //   // window.open('/resume.pdf', '_blank');
  //   alert("Download resume functionality to be implemented.");
  // };

  return (
    <ParallaxSection className="relative z-10 py-20 px-6 bg-gray-800/30">
      <div id="contact" className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Ready to bring data-driven solutions to your next project? Let's connect and explore opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleOpenLinkedIn} // Use the updated handler
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              {/* Replace with your actual LinkedIn icon component if available */}
              {/* <LinkedInIcon className="w-5 h-5 mr-2" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.25 1.25 0 0013 14.19a1 1 0 000 .25V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.1 1.12 3.1 3.3z"></path>
              </svg>
              Message me on LinkedIn
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadResume}
              className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 px-8 py-3 text-lg font-medium transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button> */}
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  )
}

export default ContactSection