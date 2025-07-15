"use client"; // This directive MUST be at the very top

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';
import { useState } from 'react';

const projects = [
  {
    title: 'ClipIt – Video Sharing Platform',
    description: 'A TikTok-inspired responsive video platform with secure authentication, optimized media delivery using Cloudinary, and scalable architecture.',
    tech: ['Next.js', 'MongoDB', 'Mongoose', 'NextAuth', 'Cloudinary', 'Tailwind CSS'],
    // Use dummy images from a placeholder service or your public directory
    image: 'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=ClipIt+Project', 
    link: '#', // Replace with actual project URL
    github: '#', // Replace with actual GitHub URL
    features: ['Video upload & processing', 'User authentication', 'Responsive design', 'Optimized performance']
  },
  {
    title: 'Echo – Social Media Application',
    description: 'Real-time social platform with messaging, user profiles, and engagement features, designed with mobile-first principles.',
    tech: ['React.js', 'Redux', 'Appwrite', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/600x400/33A2FF/FFFFFF?text=Echo+Project',
    link: '#',
    github: '#',
    features: ['Real-time messaging', 'User profiles', 'Mobile-first design', 'State management']
  },
  {
    title: 'Kahf – Quran Reading Application',
    description: 'Interactive Quran reading experience with audio recitation and optimized performance using local data storage.',
    tech: ['React.js', 'Tailwind CSS', 'Quran Cloud API'],
    image: 'https://via.placeholder.com/600x400/33FF8D/FFFFFF?text=Kahf+Project',
    link: '#',
    github: '#',
    features: ['Audio recitation', 'Verse bookmarking', 'Dark mode', 'Offline support']
  },
];

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }),
    hover: {
      y: -10,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const techPillVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3 + (i * 0.05),
        duration: 0.5,
        ease: 'backOut'
      }
    })
  };

  return (
    <section 
      id="projects" 
      className={`relative py-28 overflow-hidden transition-colors duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-50' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900'
      }`}
    >
      {/* Animated background elements */}
      {isDark ? (
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div 
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl" // Changed color for visual distinction
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
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl" // Changed color for visual distinction
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="relative inline-block">
              Featured <span className="text-accent">Projects</span>
              <span className={`absolute -bottom-2 left-0 w-full h-1 ${
                isDark ? 'bg-accent/70' : 'bg-accent/50' // Slightly bolder accent
              } rounded-full`}></span>
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700' // Slightly darker text for light mode
          }`}>
            Each project showcases a unique blend of creativity and technical expertise, tackling real-world challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="relative rounded-2xl group" // Added group for hover effects on child elements
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative h-full rounded-2xl ${
                isDark 
                  ? 'bg-gray-800/60 border border-gray-700/60' 
                  : 'bg-white border border-gray-200'
              } shadow-xl overflow-hidden transition-all duration-300 transform group-hover:scale-[1.02]`}> {/* Added transform and group-hover */}
                {/* Project image with subtle hover effect */}
                <motion.div 
                  className="h-48 relative overflow-hidden"
                  whileHover={{ scale: 1.03 }} // Reduced scale slightly for a subtler effect
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center" // Ensure image covers and is centered
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75} // Optimize image quality
                  />
                  <div className={`absolute inset-0 ${
                    isDark ? 'bg-black/40' : 'bg-gray-900/10' // Darker overlay for dark mode
                  } transition-opacity duration-300 group-hover:opacity-0`}></div> {/* Overlay hides on hover */}
                </motion.div>

                <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]"> {/* Adjusted height calculation */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl md:text-2xl font-bold leading-tight">{project.title}</h3> {/* Larger and tighter heading */}
                      <div className="flex gap-2 text-gray-500"> {/* Default icon color */}
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-full ${
                              isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                            } transition-colors`}
                            aria-label={`View ${project.title} GitHub repository`}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        <a 
                          href={project.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-full ${
                            isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                          } transition-colors`}
                          aria-label={`View ${project.title} live project`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <p className={`mb-4 text-base ${ // Increased font size slightly
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>

                    {/* Features list */}
                    <ul className="mb-5 space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`inline-block mt-1 mr-2 w-2.5 h-2.5 rounded-full ${ // Slightly larger bullet
                            isDark ? 'bg-accent' : 'bg-accent/80' // Slightly bolder accent for light mode
                          }`}></span>
                          <span className={`text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600' // Slightly darker for light mode
                          }`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mt-auto"> {/* mt-auto pushes to bottom */}
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={techPillVariants}
                        className={`text-xs px-3 py-1 rounded-full ${
                          isDark 
                            ? 'bg-gray-700/50 text-gray-300 border border-gray-600' // Added border
                            : 'bg-gray-100 text-gray-700 border border-gray-200' // Added border
                        } transition-colors`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 flex items-center justify-center rounded-2xl ${ // Rounded overlay
                        isDark ? 'bg-black/70' : 'bg-white/90'
                      }`}
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Link
                          href={project.link}
                          target="_blank"
                          className={`flex items-center gap-2 px-7 py-3.5 rounded-full font-medium ${ // Slightly larger button
                            isDark 
                              ? 'bg-accent hover:bg-accent/90 text-white shadow-lg' 
                              : 'bg-accent hover:bg-accent/80 text-white shadow-lg'
                          } transition-all duration-300 hover:shadow-xl`}
                        >
                          View Project <ArrowRight className="w-5 h-5" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="#"
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 ${ // Thicker border
              isDark 
                ? 'border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:border-accent' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-accent'
            } transition-all duration-300 font-medium`}
          >
            Explore More Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}