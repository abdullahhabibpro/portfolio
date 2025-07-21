'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/app/context/ThemeContext';
import {
  Code,
  Server,
  ShieldCheck,
  Wrench,
  Zap
} from 'lucide-react';
import { useEffect, useState } from 'react'; // Import useEffect and useState

const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'Bootstrap', 'Tailwind CSS'],
    icon: Code,
    description: 'Crafting engaging and responsive user interfaces with modern web technologies, ensuring pixel-perfect designs.'
  },
  {
    category: 'Backend & Database',
    items: ['MongoDB', 'Mongoose', 'Appwrite', 'Node.js', 'Express.js', 'Firebase'],
    icon: Server,
    description: 'Building robust server-side logic and managing data with scalable database solutions for reliable applications.'
  },
  {
    category: 'Authentication & Cloud',
    items: ['NextAuth.js', 'OAuth', 'JWT', 'Cloudinary', 'Vercel Deployment'],
    icon: ShieldCheck,
    description: 'Implementing secure user authentication and deploying applications efficiently on leading cloud platforms.'
  },
  {
    category: 'Tools & Workflow',
    items: ['Git & GitHub', 'Figma', 'VS Code', 'Webpack/Vite', 'Jira', 'AI-Assisted Dev'],
    icon: Wrench,
    description: 'Streamlining development processes and fostering effective collaboration with a suite of modern development tools.'
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // State to track if the component has mounted
  const [hasMounted, setHasMounted] = useState(false);

  // Set hasMounted to true after the initial render on the client side
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Always call useInView to follow the Rules of Hooks
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: {
      y: -10,
      rotateX: 3,
      boxShadow: isDark ? "0 18px 40px rgba(0,0,0,0.5)" : "0 18px 40px rgba(0,0,0,0.2)",
      transition: { duration: 0.25, ease: 'easeOut' }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  // If component hasn't mounted, render a minimal fallback to avoid errors
  // If component hasn't mounted, render nothing to avoid hydration errors
  if (!hasMounted) {
    return null;
  }

  return (
    <section
      id="skills"
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
            x: [0, 80, 0],
            y: [0, 40, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className={`absolute top-1/4 left-1/3 w-60 h-60 rounded-full blur-3xl opacity-20
            ${isDark ? 'bg-orange-600/30' : 'bg-blue-400/20'}`}
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
            delay: 3
          }}
          className={`absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-20
            ${isDark ? 'bg-indigo-600/30' : 'bg-purple-400/20'}`}
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionTitleVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-center"
        >
          <span className="relative inline-block">
            My <span className={isDark ? 'text-orange-400' : 'text-blue-600'}>Expertise</span>
            <motion.span
              className={`absolute -bottom-2 left-0 w-full h-2 ${isDark ? 'bg-orange-500/60' : 'bg-blue-500/50'} rounded-full`}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            ></motion.span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
              className={`p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col h-full
                ${isDark
                  ? 'bg-gray-800/60 border-gray-700/60 hover:bg-gray-700/70'
                  : 'bg-white/80 border-gray-200 hover:bg-white shadow-lg'
                }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full flex-shrink-0
                  ${isDark ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/10 text-blue-600'}`}>
                  <skill.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold leading-tight">{skill.category}</h3>
              </div>
              <p className={`text-sm mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {skill.description}
              </p>
              <ul className="space-y-3 mt-auto">
                {skill.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={listItemVariants}
                    transition={{ delay: index * 0.15 + i * 0.05 }}
                    className={`flex items-center gap-3 text-base font-medium
                      ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    <Zap className={`w-4 h-4 ${isDark ? 'text-orange-400' : 'text-blue-500'}`} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}