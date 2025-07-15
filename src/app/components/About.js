"use client";

import { motion } from "framer-motion";
import { Code, TrendingUp, Brain, Lightbulb } from "lucide-react";
import { useTheme } from '@/app/context/ThemeContext';

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const qualities = [
    {
      icon: <Code className="w-6 h-6 text-accent" />,
      title: "Modern Tech Stack",
      desc: "Skilled in React, Next.js, MongoDB, and building highly interactive UIs."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-accent" />,
      title: "Scalable Solutions",
      desc: "Designed and deployed performance-optimized apps that grow with users."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-accent" />,
      title: "Creative Problem Solver",
      desc: "Transforming ideas into efficient, user-friendly experiences."
    },
    {
      icon: <Brain className="w-6 h-6 text-accent" />,
      title: "Continuous Learner",
      desc: "Staying ahead with the latest tech trends and tools."
    }
  ];

  return (
    <section 
      id="about" 
      className={`py-24 transition-colors duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900/95 via-gray-800 to-gray-900 text-light' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-dark'
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="relative inline-block">
            About Me
            <span className={`absolute -bottom-2 left-0 w-full h-1 ${isDark ? 'bg-accent/50' : 'bg-accent/30'} rounded-full`}></span>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-center max-w-4xl mx-auto mb-14 leading-relaxed"
        >
          I'm a <span className="font-semibold text-accent">results-driven</span> full-stack developer who loves turning complex problems into sleek, high-performance web experiences. From social platforms to educational apps, my focus is on building <span className="font-semibold">impactful digital products</span> that truly serve users.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualities.map((q, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`rounded-xl p-6 text-center transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800/50 hover:bg-gray-700/50 shadow-lg hover:shadow-xl'
                  : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${
                  isDark ? 'bg-gray-700/50' : 'bg-gray-100'
                }`}>
                  {q.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{q.title}</h3>
              <p className={`text-base leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {q.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}