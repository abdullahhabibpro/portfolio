'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Download, ArrowRight, Mouse } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';
import { useEffect, useState } from 'react';

const textFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
};

export default function Hero() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-light'
          : 'bg-gradient-to-br from-accent/10 via-accent/5 to-white text-dark'
      }`}
    >
      {/* Animated background elements */}
      {isMounted && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 overflow-hidden"
          >
            <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl ${
              theme === 'dark' ? 'bg-accent/30' : 'bg-accent/20'
            }`}></div>
            <div className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl ${
              theme === 'dark' ? 'bg-purple-500/20' : 'bg-blue-400/15'
            }`}></div>
          </motion.div>
        </>
      )}

      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between pt-32 pb-20 gap-12 lg:gap-8 relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 md:space-y-8">
          <AnimatePresence>
            <motion.div
              initial="hidden"
              animate="visible"
              className="space-y-6 md:space-y-8"
            >
              <div className="overflow-hidden">
                <motion.h1
                  custom={0}
                  variants={textFadeIn}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
                >
                  Hi, I'm{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">Abdullah</span>
                    <span className={`absolute bottom-2 left-0 w-full h-3 ${
                      theme === 'dark' ? 'bg-accent/40' : 'bg-accent/30'
                    } z-0`}></span>
                  </span>{' '}
                  Habib
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h2
                  custom={1}
                  variants={textFadeIn}
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent"
                >
                  <span className="inline-flex items-center gap-2">
                    Full-Stack Developer
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                </motion.h2>
              </div>

              <div className="overflow-hidden">
                <motion.p
                  custom={2}
                  variants={textFadeIn}
                  className="text-base md:text-lg max-w-lg leading-relaxed"
                >
                  I craft <span className="font-medium">scalable</span>,{' '}
                  <span className="font-medium">user-focused</span> web applications with modern
                  technologies. Currently specializing in <span className="text-accent">React</span>{' '}
                  and <span className="text-accent">Next.js</span> ecosystems.
                </motion.p>
              </div>

              <div className="overflow-hidden">
                <motion.div
                  custom={3}
                  variants={textFadeIn}
                  className="flex flex-wrap gap-4"
                >
                  <a
                    href="/app/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300 group"
                  >
                    <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
                    Download Resume
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border rounded-full hover:bg-gray-400/10 transition-all duration-300 group"
                  >
                    <span>Let's Connect</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-1/2 flex justify-center relative"
        >
          <div className="relative">
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative rounded-full border-8 border-white/10 shadow-2xl overflow-hidden"
            >
              <Image
                src="/app/images/profile.jpg"
                alt="Profile of Abdullah Habib"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>
            {theme === 'dark' ? (
              <div className="absolute -z-10 inset-0 rounded-full bg-accent/20 blur-xl"></div>
            ) : (
              <div className="absolute -z-10 inset-0 rounded-full bg-accent/10 blur-xl"></div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <Mouse className="w-5 h-5 animate-bounce" />
        <span className="text-xs mt-2">Scroll down</span>
      </motion.div>
    </section>
  );
}