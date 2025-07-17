'use client';

import Link from 'next/link';
import { Sun, Moon, Github, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/app/context/ThemeContext';
import { useState, useEffect } from 'react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['about', 'skills', 'projects', 'experience', 'contact'];

  // Animation variants
  const navLinkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: { scale: 1.05, color: 'var(--color-accent)' }, // Using CSS variables for theme-dependent colors
  };

  const socialIconVariants = {
    hover: { y: -3, scale: 1.1, color: 'var(--color-accent)' },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -50, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, y: -50, height: 0, transition: { duration: 0.3, ease: [0.45, 0.05, 0.55, 0.95] } },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-10
        ${scrolled
          ? isDark
            ? 'bg-gradient-to-r from-gray-950/90 to-gray-800/90 shadow-2xl backdrop-blur-xl border-b border-gray-700/50'
            : 'bg-white/90 shadow-lg backdrop-blur-xl border-b border-gray-200/50'
          : 'bg-transparent'
        }
        ${isDark ? 'text-gray-100' : 'text-gray-800'}
        `}
      style={{
        '--color-accent': isDark ? '#F97316' : '#FF5722', // Example accent color
        '--color-primary-dark': '#1A202C',
        '--color-primary-light': '#F7FAFC',
        '--color-secondary-dark': '#2D3748',
        '--color-secondary-light': '#EDF2F7',
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-extrabold relative group overflow-hidden"
        >
          <motion.span
            initial={{ y: 0 }}
            whileHover={{ y: -5 }} // Slightly lift on hover
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="block relative z-10"
          >
            Abdullah Habib
          </motion.span>
          <motion.span
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
            className={`absolute bottom-0 left-0 h-1 rounded-full ${isDark ? 'bg-accent' : 'bg-orange-500'} origin-left`}
          ></motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((id, index) => (
            <motion.div
              key={id}
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link
                href={`#${id}`}
                className="font-semibold text-lg relative group overflow-hidden py-1"
              >
                <span className="relative z-10">
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </span>
                <motion.span
                  className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${isDark ? 'bg-accent' : 'bg-orange-500'}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </Link>
            </motion.div>
          ))}

          <div className="flex items-center gap-6 pl-6 border-l border-gray-400/30">
            <motion.a
              href="https://github.com/abdullahhabibpro"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <Github className="w-6 h-6 group-hover:drop-shadow-md transition-all duration-200" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/abdullahhabibullah"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <Linkedin className="w-6 h-6 group-hover:drop-shadow-md transition-all duration-200" />
            </motion.a>

            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 transform ${
                isDark ? 'hover:bg-gray-700/60' : 'hover:bg-gray-200/60'
              }`}
              whileHover={{ scale: 1.15, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6 text-blue-700" />
              )}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="x-icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="menu-icon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className={`md:hidden overflow-hidden ${isDark ? 'bg-gray-900/98' : 'bg-white/98'} mt-4 rounded-xl shadow-xl border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, staggerChildren: 0.08 }}
              className="flex flex-col p-6 space-y-4"
            >
              {navItems.map((id) => (
                <motion.div key={id} variants={navLinkVariants}>
                  <Link
                    href={`#${id}`}
                    className="py-3 px-4 rounded-lg font-medium text-lg block
                      hover:bg-accent/10 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Link>
                </motion.div>
              ))}

              <div className="flex items-center justify-between pt-5 border-t border-gray-400/20 mt-4">
                <div className="flex gap-6">
                  <motion.a
                    href="https://github.com/abdullahhabibpro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-accent transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/abdullahhabibullah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-accent transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                </div>

                <motion.button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-all duration-300 transform ${
                    isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200/50'
                  }`}
                  whileHover={{ scale: 1.15, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-blue-700" />}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}