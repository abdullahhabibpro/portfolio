'use client';
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { useInView } from "react-intersection-observer"; // Import useInView

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const currentYear = new Date().getFullYear();

  const [ref, inView] = useInView({ // useInView for section visibility
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <motion.footer
      ref={ref} // Attach ref for useInView
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
      }}
      className={`py-12 transition-colors duration-500 ${isDark ? "bg-gray-950 text-gray-400" : "bg-gray-100 text-gray-700"}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-6">
          <motion.a
            href="https://github.com/abdullahhabibpro"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-700/50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200'}`}
            aria-label="View Abdullah Habib's GitHub profile"
          >
            <Github className="w-7 h-7" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/abdullahhabibullah"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-700/50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200'}`}
            aria-label="View Abdullah Habib's LinkedIn profile"
          >
            <Linkedin className="w-7 h-7" />
          </motion.a>
        </div>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.2 } }
          }}
          className="text-sm md:text-base font-medium text-center"
        >
          &copy; {currentYear} Abdullah Habib. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}