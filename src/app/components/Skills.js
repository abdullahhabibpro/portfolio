"use client";

import { motion } from 'framer-motion';
import { useTheme } from '@/app/context/ThemeContext';
import {
  Code, // For Frontend
  Server, // For Backend & Database
  ShieldCheck, // For Authentication & Cloud
  Wrench, // Changed from Toolbox to Wrench (or try Settings, Tools)
  Zap // Generic icon for animated background
} from 'lucide-react'; // Using Lucide React for modern icons

const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Framer Motion'], // Added TypeScript
    icon: Code, // Lucide icon component
    description: 'Crafting engaging and responsive user interfaces with modern web technologies.'
  },
  {
    category: 'Backend & Database',
    items: ['MongoDB', 'Mongoose', 'Appwrite', 'Node.js', 'Express.js', 'RESTful APIs'], // Removed "Learning" & added RESTful APIs
    icon: Server, // Lucide icon component
    description: 'Building robust server-side logic and managing data with scalable database solutions.'
  },
  {
    category: 'Authentication & Cloud',
    items: ['NextAuth.js', 'OAuth', 'JWT', 'Cloudinary', 'Vercel Deployment'], // Added OAuth, Vercel
    icon: ShieldCheck, // Lucide icon component
    description: 'Securing applications and deploying them efficiently using cloud platforms.'
  },
  {
    category: 'Tools & Workflow',
    items: ['Git & GitHub', 'Figma', 'VS Code', 'Webpack/Vite', 'Jira', 'AI-Assisted Dev'],
    icon: Wrench, // Make sure this matches the imported name (Wrench)
    description: 'Streamlining development processes and collaborating effectively with modern tools.'
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: i * 0.15, // Stagger cards more noticeably
        ease: [0.22, 1, 0.36, 1] // More expressive ease
      }
    }),
    hover: {
      y: -8, // Lift more on hover
      boxShadow: isDark ? "0 15px 30px rgba(0,0,0,0.4)" : "0 15px 30px rgba(0,0,0,0.15)", // Dynamic shadow
      transition: { duration: 0.25, ease: 'easeOut' }
    }
  };

  const listItemVariants = {
    initial: { opacity: 0, x: -15 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <section
      id="skills"
      className={`relative py-28 overflow-hidden transition-colors duration-500 ${ // Added relative and overflow-hidden
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-50'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900'
      }`}
    >
      {/* Animated background elements - similar to Projects section */}
      {isDark ? (
        <div className="absolute inset-0 overflow-hidden opacity-5"> {/* Reduced opacity slightly */}
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
            className="absolute top-1/4 left-1/3 w-60 h-60 rounded-full bg-accent/30 blur-3xl"
          ></motion.div>
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden opacity-8"> {/* Reduced opacity slightly */}
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, -40, 0]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-accent/20 blur-3xl"
          ></motion.div>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10"> {/* z-10 to keep content above background */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center" // Larger, bolder heading
        >
          <span className="relative inline-block">
            My <span className="text-accent">Expertise</span>
            <span className={`absolute -bottom-2 left-0 w-full h-1.5 ${isDark ? 'bg-accent/70' : 'bg-accent/50'} rounded-full`}></span> {/* Thicker underline */}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Increased gap */}
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className={`p-7 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col h-full ${ // Added flex-col h-full
                isDark
                  ? 'bg-gray-800/60 border-gray-700/60 hover:bg-gray-700/70'
                  : 'bg-white/80 border-gray-200 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-4 mb-4"> {/* Increased gap */}
                <div className={`p-3 rounded-full ${isDark ? 'bg-accent/20 text-accent' : 'bg-accent/10 text-accent'}`}>
                  {/* Render Lucide icon component */}
                  <skill.icon className="w-7 h-7" /> {/* Larger icon */}
                </div>
                <h3 className="text-xl md:text-2xl font-bold leading-tight">{skill.category}</h3> {/* Larger, bolder heading */}
              </div>
              <p className={`text-sm mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}> {/* Added description */}
                {skill.description}
              </p>
              <ul className="space-y-2 mt-auto"> {/* mt-auto pushes items to bottom */}
                {skill.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={listItemVariants} // Apply listItemVariants here
                    className={`flex items-center gap-3 text-base ${ // Increased gap
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    <Zap className={`w-4 h-4 ${isDark ? 'text-accent/80' : 'text-accent/60'}`} /> {/* Replaced bullet with a small icon */}
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