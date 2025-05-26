"use client"

import type React from "react"
import { useState, useEffect } from "react" // Added useEffect for scroll listener

// Data
import { resumeData } from "@/app/data/resumeData" // Adjust path

// Layout Components
import Navbar from "@/components/layout/Navbar" // Adjust path
import Footer from "@/components/layout/Footer" // Adjust path

// Section Components
import HeroSection from "@/components/sections/HeroSection" // Adjust path
import ExperienceSection from "@/components/sections/ExperienceSection" // Adjust path
import SkillsSection from "@/components/sections/SkillsSection" // Adjust path
import ProjectsSection from "@/components/sections/ProjectsSection" // Adjust path
import ContactSection from "@/components/sections/ContactSection" // Adjust path

export default function ModernResumePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

// In page.tsx
  // In your page.tsx - Replace your scrollToSection function with this:

  const scrollToSection = (sectionId: string) => {
    console.log(`[Scroll Attempt] Targeting section: ${sectionId}`);
    
    // Close mobile menu immediately
    setIsMenuOpen(false);
    
    // Prevent any default scroll-to-top behavior
    const element = document.getElementById(sectionId);
    
    if (element) {
      console.log(`[Scroll Found] Element:`, element);
      
      // Get current scroll position to prevent jump to top
      const currentScrollY = window.scrollY;
      console.log(`[Current Scroll] Position: ${currentScrollY}`);
      
      // Calculate target position
      const navbarHeight = 80; // Adjust based on your navbar
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      const targetScrollY = Math.max(0, absoluteElementTop - navbarHeight);
      
      console.log(`[Target Scroll] Position: ${targetScrollY}`);
      
      // Use a small delay to ensure menu closes smoothly
      setTimeout(() => {
        // Smooth scroll to target
        window.scrollTo({
          top: targetScrollY,
          behavior: 'smooth'
        });
      }, 100);
      
    } else {
      console.error(`[Scroll Error] Element with ID NOT FOUND: ${sectionId}`);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null, // relative to document viewport
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of the viewport
      threshold: 0, // Visible amount of item shown in relation to root
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = navItems.map(item => document.getElementById(item.id)).filter(el => el);
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems]);


  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Background Styling */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]" />
      </div>

      <Navbar
        navItems={navItems}
        resumeName={resumeData.name}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <main>
        <HeroSection
            resumeData={{ name: resumeData.name, title: resumeData.title, summary: resumeData.summary}}
            scrollToSection={scrollToSection}
        />
        <ExperienceSection experiences={resumeData.experiences}/>
        <ProjectsSection projects={resumeData.projects} />
        <SkillsSection skills={resumeData.skills} />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}