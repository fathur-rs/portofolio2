"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

interface NavItem {
  id: string;
  label: string;
}

interface NavbarProps {
  navItems: NavItem[];
  resumeName: string;
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  navItems,
  resumeName,
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
  
  // Fixed mobile menu button handler
  const handleMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  // Fixed navigation click handler
  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToSection(sectionId);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {resumeName}
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm font-medium transition-colors hover:text-teal-400 ${
                  activeSection === item.id ? "text-teal-400" : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Fixed mobile menu toggle button */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden p-2 text-gray-300 hover:text-teal-400 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            type="button" // Explicitly set button type
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Fixed mobile menu with proper animation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? "auto" : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block w-full text-left transition-colors py-3 px-2 rounded-md ${
                  activeSection === item.id 
                    ? "text-teal-400 bg-teal-400/10" 
                    : "text-gray-300 hover:text-teal-400 hover:bg-gray-800/50"
                }`}
                type="button" // Explicitly set button type
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
