'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function AnimatedWrapper({ children }) {
  return (
    <div className="bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
