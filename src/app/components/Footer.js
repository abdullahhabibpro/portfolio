// Footer.js - Next Gen with ThemeContext and motion
"use client";

import { Github, Linkedin } from "lucide-react"; // Changed from react-feather to lucide-react
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Added specific ease
      className={`py-10 transition-colors duration-500 ${ // Increased vertical padding
        isDark
          ? "bg-gray-950 text-gray-400" // Deeper dark background, slightly lighter text
          : "bg-gray-100 text-gray-700" // Lighter background, darker text
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-6"> {/* Increased bottom margin */}
          <motion.a
            href="https://github.com/abdullahhabibpro"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-all duration-300 ${ // Added padding, rounded, transition
              isDark
                ? 'text-gray-300 hover:text-accent hover:bg-gray-700/50' // Dark mode hover
                : 'text-gray-700 hover:text-accent hover:bg-gray-200' // Light mode hover
            }`}
            whileHover={{ scale: 1.1, y: -3 }} // Subtle lift and scale on hover
            aria-label="View Abdullah Habib's GitHub profile"
          >
            <Github className="w-7 h-7" /> {/* Slightly larger icons */}
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/abdullahhabibullah"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-all duration-300 ${ // Added padding, rounded, transition
              isDark
                ? 'text-gray-300 hover:text-accent hover:bg-gray-700/50' // Dark mode hover
                : 'text-gray-700 hover:text-accent hover:bg-gray-200' // Light mode hover
            }`}
            whileHover={{ scale: 1.1, y: -3 }} // Subtle lift and scale on hover
            aria-label="View Abdullah Habib's LinkedIn profile"
          >
            <Linkedin className="w-7 h-7" /> {/* Slightly larger icons */}
          </motion.a>
        </div>
        <p className="text-sm md:text-base font-medium"> {/* Slightly larger on md, added font-medium */}
          &copy; {currentYear} Abdullah Habib. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}