"use client"

import type React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Fathurrahman Syarief</p> {/* Dynamic year and name */}
      </div>
    </footer>
  )
}

export default Footer