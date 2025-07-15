"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/app/context/ThemeContext';
import { Briefcase, Rocket, Code2, Cpu } from 'lucide-react';

const experiences = [
  {
    company: 'Self-Employed',
    role: 'Full-Stack Developer',
    period: '2023 - Present',
    achievements: [
      'Developed scalable web applications including video-sharing and social media platforms',
      'Implemented secure authentication systems and optimized media delivery',
      'Designed responsive, user-focused interfaces with modern frameworks',
    ],
    icon: <Briefcase className="w-6 h-6" />,
    skills: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS', 'Framer Motion']
  },
];

export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const timelineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section 
      id="experience" 
      className={`relative py-28 overflow-hidden transition-colors duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-light' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-dark'
      }`}
    >
      {/* Animated background elements */}
      {isDark ? (
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div 
            animate={{
              x: [0, 100, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"
          ></motion.div>
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <motion.div 
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-400/15 blur-3xl"
          ></motion.div>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative inline-block">
              Professional Journey
              <span className={`absolute -bottom-2 left-0 w-full h-1 ${
                isDark ? 'bg-accent/50' : 'bg-accent/30'
              } rounded-full`}></span>
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My path through the tech landscape, highlighting key experiences and growth
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className={`absolute left-6 top-0 h-full w-0.5 ${
            isDark ? 'bg-gray-700' : 'bg-gray-200'
          }`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={timelineVariants}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-1 w-12 h-12 rounded-full flex items-center justify-center ${
                  isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                } shadow-md`}>
                  <div className={`p-2 rounded-full ${
                    isDark ? 'bg-gray-700/50' : 'bg-gray-100'
                  }`}>
                    {exp.icon}
                  </div>
                </div>

                <div className={`rounded-xl p-8 ${
                  isDark 
                    ? 'bg-gray-800/50 border border-gray-700/50' 
                    : 'bg-white border border-gray-200'
                } shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className={`text-xl ${
                        isDark ? 'text-accent' : 'text-accent-dark'
                      }`}>{exp.company}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-full ${
                      isDark ? 'bg-gray-700/50' : 'bg-gray-100'
                    }`}>
                      <p className="font-medium">{exp.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="flex items-start"
                      >
                        <span className={`inline-block mt-1 mr-3 w-2 h-2 rounded-full ${
                          isDark ? 'bg-accent' : 'bg-accent/70'
                        }`}></span>
                        <span className={`${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Skills used */}
                  <div className="mt-6">
                    <h4 className={`text-sm font-semibold mb-3 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>TECH STACK USED</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + (i * 0.05) }}
                          className={`text-xs px-3 py-1 rounded-full ${
                            isDark 
                              ? 'bg-gray-700/50 text-gray-300' 
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}