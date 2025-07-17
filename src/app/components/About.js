'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { Code, TrendingUp, Brain, Lightbulb } from "lucide-react";
import { useTheme } from '@/app/context/ThemeContext';
import { useEffect, useState, useRef } from "react"; // Import useRef
import { useInView } from "react-intersection-observer";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Use a dedicated ref for detecting when the section is in view
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  // Use a separate useRef for useScroll's target element
  const sectionRef = useRef(null);

  // Scroll-based background animation
  const { scrollYProgress } = useScroll({
    target: sectionRef, // Target the specific useRef for scroll tracking
    offset: ["start end", "end start"] // Animate from when section starts entering to when it leaves
  });
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]); // Fade in and out
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]); // Scale slightly

  const qualities = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Modern Tech Stack",
      desc: "Expert in React, Next.js, Node.js, MongoDB, and crafting dynamic, interactive UIs.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Solutions",
      desc: "Building performance-optimized applications that scale seamlessly with user growth.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Problem Solver",
      desc: "Turning complex challenges into intuitive, user-centric digital experiences.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Continuous Learner",
      desc: "Embracing the latest tech trends to stay at the forefront of innovation and deliver cutting-edge solutions.",
    },
  ];

  // Animation variants for text
  const textRevealVariants = {
    hidden: { opacity: 0, y: 30, skewY: 2 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom easing for a smooth feel
      }
    }
  };

  // Animation variants for quality cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    hover: {
      scale: 1.05,
      y: -5, // Slight lift
      // Ensure these colors are defined or fall back to acceptable Tailwind defaults
      boxShadow: isDark ? '0 15px 30px rgba(255,165,0,0.2), 0 0 0 2px rgba(255,165,0,0.5)' : '0 15px 30px rgba(0,119,182,0.15), 0 0 0 2px rgba(0,119,182,0.3)',
      rotateX: 5, // Subtle 3D tilt
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const iconWrapperVariants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      id="about"
      // Use a callback ref to assign both `useInView` ref and `useRef` to the same DOM node
      ref={(node) => {
        inViewRef(node); // For useInView
        sectionRef.current = node; // For useScroll
      }}
      className={`relative py-28 overflow-hidden transition-colors duration-700
       `}
    >
      {/* Animated Background Blobs */}
      <motion.div
        style={{ opacity: backgroundOpacity, scale: backgroundScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ x: [0, '30%', '0%'], y: [0, '20%', '0%'], rotate: [0, 10, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className={`absolute top-1/4 left-1/4 w-80 h-80 rounded-full mix-blend-multiply blur-3xl
            ${isDark ? 'bg-orange-600/20' : 'bg-blue-400/15'}`}
        ></motion.div>
        <motion.div
          animate={{ x: [0, '-25%', '0%'], y: [0, '-15%', '0%'], rotate: [0, -15, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear', delay: 5 }}
          className={`absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full mix-blend-multiply blur-3xl
            ${isDark ? 'bg-indigo-600/20' : 'bg-purple-400/15'}`}
        ></motion.div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textRevealVariants}
          custom={0} // Stagger index
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-center"
        >
          <span className="relative inline-block">
            About Me
            <motion.span
              className={`absolute -bottom-2 left-0 w-full h-2 ${isDark ? 'bg-orange-500/60' : 'bg-blue-500/50'} rounded-full`}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            ></motion.span>
          </span>
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={textRevealVariants}
  custom={1}
  className={`text-lg md:text-xl text-center max-w-4xl mx-auto mb-20 leading-relaxed
    ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
>
  I&apos;m a <span className={`font-semibold ${isDark ? 'text-orange-400' : 'text-blue-600'}`}>results-driven</span> full-stack developer passionate about transforming complex challenges into sleek, high-performance web experiences. My focus is on building <span className={`font-semibold ${isDark ? 'text-orange-400' : 'text-blue-600'}`}>impactful digital products</span> that resonate with users.
</motion.p>

        {/* Qualities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((q, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={index} // Stagger index for each card
              whileHover="hover"
              className={`rounded-2xl p-8 border transition-all duration-300 relative overflow-hidden
                ${isDark
                  ? 'bg-gray-800/70 border-gray-700/60 hover:bg-gray-700/80 text-gray-100'
                  : 'bg-white/80 border-gray-200 hover:bg-white text-gray-800'
                }`}
            >
              {/* Dynamic Border on Hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl border-2 ${isDark ? 'border-orange-500/0' : 'border-blue-500/0'}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              <motion.div
                className={`p-4 rounded-full inline-flex items-center justify-center mb-5
                  ${isDark ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/10 text-blue-600'}`}
                variants={iconWrapperVariants}
                whileHover="hover"
              >
                {q.icon}
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold mt-4 mb-3">{q.title}</h3>
              <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {q.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}