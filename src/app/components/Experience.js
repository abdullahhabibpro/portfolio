'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/app/context/ThemeContext';
import { Briefcase, Dot } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: 'Self-Employed',
    role: 'Full-Stack Developer',
    period: '2024 - Present',
    achievements: [
      'Developed and deployed scalable full-stack web applications, from concept to production.',
      'Engineered responsive and accessible user interfaces using React and Next.js.',
      'Implemented robust backend APIs with Node.js and Express.js, integrating MongoDB databases.',
      'Managed secure user authentication, optimized media delivery, and deployed to cloud platforms.',
      'Translated complex business requirements into intuitive and efficient software solutions.'
    ],
    icon: <Briefcase className="w-6 h-6" />,
    skills: ['Next.js', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'Framer Motion', 'NextAuth.js', 'Cloudinary']
  },
  // Add more experience entries as needed
  // {
  //   company: 'Example Company',
  //   role: 'Junior Developer',
  //   period: '2022 - 2023',
  //   achievements: [
  //     'Assisted in developing and maintaining web applications.',
  //     'Learned best practices for code quality and testing.',
  //     'Collaborated with senior developers on various projects.',
  //   ],
  //   icon: <Code2 className="w-6 h-6" />,
  //   skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Jira']
  // },
];

export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionTitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const timelineCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const achievementItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  const skillPillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <section
      id="experience"
      ref={ref}
      className={`relative py-28 overflow-hidden transition-colors duration-500
        ${isDark
          ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-50'
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900'
        }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className={`absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20
            ${isDark ? 'bg-purple-500/30' : 'bg-blue-400/20'}`}
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
            delay: 3
          }}
          className={`absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20
            ${isDark ? 'bg-indigo-600/30' : 'bg-red-400/20'}`}
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionTitleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="relative inline-block">
              Professional <span className={isDark ? 'text-orange-400' : 'text-blue-600'}>Journey</span>
              <motion.span
                className={`absolute -bottom-2 left-0 w-full h-2 ${isDark ? 'bg-orange-500/60' : 'bg-blue-500/50'} rounded-full`}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              ></motion.span>
            </span>
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            My path through the tech landscape, highlighting key experiences and growth.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className={`absolute left-6 md:left-0.5 top-0 h-full w-1 ${
            isDark ? 'bg-gray-700' : 'bg-gray-200'
          } transform -translate-x-1/2 rounded-full`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={timelineCardVariants}
                className="relative pl-16 md:pl-0 md:flex md:items-start md:gap-8"
              >
                {/* Timeline Dot & Icon */}
                <div
                  className={`absolute left-0 top-1 md:relative md:left-auto md:top-auto
                    w-12 h-12 rounded-full flex items-center justify-center
                    transform md:-translate-x-1/2 md:flex-shrink-0
                    z-10
                    ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-md`}
                >
                  <div className={`p-2 rounded-full ${
                    isDark ? 'bg-gray-700/50 text-orange-400' : 'bg-gray-100 text-blue-600'
                  }`}>
                    {exp.icon}
                  </div>
                </div>

                {/* Experience Card */}
                <div
                  className={`flex-grow rounded-2xl p-8 ${
                    isDark
                      ? 'bg-gray-800/50 border border-gray-700/50'
                      : 'bg-white border border-gray-200 shadow-lg'
                  } hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className={`text-xl font-medium ${
                        isDark ? 'text-orange-400' : 'text-blue-600'
                      }`}>{exp.company}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-full flex-shrink-0 ${
                      isDark ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      <p className="font-medium">{exp.period}</p>
                    </div>
                  </div>

                  <h4 className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>KEY ACHIEVEMENTS</h4>
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={achievementItemVariants}
                        transition={{ delay: index * 0.15 + 0.3 + (i * 0.08) }}
                        className="flex items-start"
                      >
                        <Dot className={`inline-block mt-0.5 mr-3 w-6 h-6 flex-shrink-0 ${isDark ? 'text-orange-400' : 'text-blue-500'}`} />
                        <span className={`text-base ${
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
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          variants={skillPillVariants}
                          transition={{ delay: index * 0.15 + 0.5 + (i * 0.03) }}
                          className={`text-xs px-3 py-1.5 rounded-full font-medium
                            ${isDark
                              ? 'bg-gray-700/50 text-gray-300 border border-gray-600'
                              : 'bg-gray-100 text-gray-700 border border-gray-200'
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