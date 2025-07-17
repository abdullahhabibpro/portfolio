// src/app/components/AnimatedWrapper.js
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/app/context/ThemeContext'; // Import useTheme

export default function AnimatedWrapper({ children }) {
  const { theme } = useTheme(); // Get theme from context

  return (
    // Apply theme classes dynamically based on context
    <div className={`${theme === 'dark' ? 'dark' : 'light'} bg-primary text-primary transition-colors duration-500`}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} // Smoother transition
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
