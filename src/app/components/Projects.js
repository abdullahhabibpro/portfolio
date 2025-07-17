'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';
import { useInView } from 'react-intersection-observer';
import { SiGithub } from 'react-icons/si';
import { useState } from 'react';
import kahf from '../../../public/kahf.svg';
import echo from '../../../public/echo.svg';
import clipit from '../../../public/clipit.svg';

export default function Projects() {
  const projects = [
    {
      title: 'ClipIt – Video Sharing Platform',
      description: 'A TikTok-inspired responsive video platform with secure authentication, optimized media delivery using Cloudinary, and scalable architecture.',
      tech: ['Next.js', 'MongoDB', 'Mongoose', 'NextAuth', 'Cloudinary', 'Tailwind CSS'],
      image: clipit, // Use high-quality placeholders or your actual images
      link: '#', // Replace with actual project URL
      github: '#', // Replace with actual GitHub URL
      features: ['Video upload & processing', 'User authentication', 'Responsive design', 'Optimized performance', 'Scalable architecture']
    },
    {
      title: 'Echo – Social Media Application',
      description: 'Real-time social platform with messaging, user profiles, and engagement features, designed with mobile-first principles.',
      tech: ['React.js', 'Redux', 'Appwrite', 'Tailwind CSS', 'WebSockets'],
      image: echo,
      link: '#',
      github: '#',
      features: ['Real-time messaging', 'Dynamic user profiles', 'Mobile-first design', 'Efficient state management', 'Engagement analytics']
    },
    {
      title: 'Kahf – Quran Reading Application',
      description: 'An interactive Quran reading experience with audio recitation, verse bookmarking, and optimized performance using local data storage.',
      tech: ['React.js', 'Tailwind CSS', 'Quran Cloud API', 'IndexedDB'],
      image: kahf,
      link: '#',
      github: '#',
      features: ['Audio recitation sync', 'Verse bookmarking & notes', 'Dynamic dark mode', 'Seamless offline support', 'Intuitive UI/UX']
    },
    
  ];

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // State to track which project card is currently hovered (for desktop hover effect)
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const cardVariants = {
    hidden: { y: 80, opacity: 0, rotateX: -5 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: {
      scale: 1.03,
      rotateY: 3,
      boxShadow: isDark ? "0 20px 40px rgba(0,0,0,0.5), 0 0 0 2px rgba(255,165,0,0.3)" : "0 20px 40px rgba(0,0,0,0.2), 0 0 0 2px rgba(0,119,182,0.2)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const techPillVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'backOut'
      }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px -5px rgba(0,0,0,0.3)',
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section
      id="projects"
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
            y: [0, 50, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20
            ${isDark ? 'bg-blue-500/30' : 'bg-green-400/20'}`}
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
            delay: 4
          }}
          className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20
            ${isDark ? 'bg-purple-500/30' : 'bg-red-400/20'}`}
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
              Featured <span className={isDark ? 'text-orange-400' : 'text-blue-600'}>Projects</span>
              <motion.span
                className={`absolute -bottom-2 left-0 w-full h-2 ${isDark ? 'bg-orange-500/60' : 'bg-blue-500/50'} rounded-full`}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              ></motion.span>
            </span>
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Each project showcases a unique blend of creativity and technical expertise, tackling real-world challenges with innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
              className={`relative rounded-3xl group cursor-pointer perspective-1000 ${
                isDark ? 'bg-gray-800/60' : 'bg-white/80 shadow-xl'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative h-full rounded-3xl overflow-hidden
                ${isDark ? 'border border-gray-700/60' : 'border border-gray-200'}
                transition-all duration-300 ease-out preserve-3d`}>

                {/* Project image with subtle hover effect and DESKTOP-ONLY overlay */}
                <motion.div
                  className="h-52 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    priority={index < 3}
                  />
                  {/* Gradient Overlay for better text readability */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/70 to-transparent' : 'from-gray-900/50 to-transparent'}`}></div>
                  {/* DESKTOP-ONLY OVERLAY: Hidden on small screens, shown on hover for medium+ screens */}
                  <div className={`absolute inset-0 ${isDark ? 'bg-black/40' : 'bg-gray-900/10'} transition-opacity duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center`}>
                    <div className="flex gap-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-200"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`View ${project.title} GitHub repository`}
                        >
                          <SiGithub className="w-6 h-6" />
                        </motion.a>
                      )}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-200"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`View ${project.title} live project`}
                        >
                          <ExternalLink className="w-6 h-6" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>

                  <div className="p-7 flex flex-col justify-between h-[calc(100%-13rem)]">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3">{project.title}</h3>

                      <p className={`mb-5 text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.description}
                      </p>

                      {/* Features list */}
                      <ul className="mb-6 space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className={`inline-block mt-0.5 mr-2 w-4 h-4 flex-shrink-0 ${isDark ? 'text-orange-400' : 'text-blue-500'}`} />
                            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* MOBILE-ONLY LINKS: Visible on small screens, hidden on medium+ screens */}
                    <div className="flex justify-end gap-3 mt-4 md:hidden">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-full ${isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-all duration-200`}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`View ${project.title} GitHub repository`}
                        >
                          <SiGithub className="w-5 h-5" />
                        </motion.a>
                      )}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-all duration-200`}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`View ${project.title} live project`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          custom={i}
                          initial="initial"
                          animate={inView ? "animate" : "initial"}
                          variants={techPillVariants}
                          className={`text-xs px-3 py-1.5 rounded-full font-medium
                            ${isDark
                              ? 'bg-gray-700/50 text-gray-300 border border-gray-600'
                              : 'bg-gray-100 text-gray-700 border border-gray-200'
                            } transition-colors`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all projects link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: projects.length * 0.12 + 0.5, duration: 0.8 }}
            className="text-center mt-20"
          >
            <motion.div
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-block"
            >
              <Link
                href="#"
                className={`inline-flex items-center gap-3 px-10 py-4 rounded-full border-2 text-lg font-semibold
                  ${isDark
                    ? 'border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:border-orange-500 hover:text-orange-400'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-blue-500 hover:text-blue-600'
                  } transition-all duration-300`}
              >
                Explore More Projects <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }
