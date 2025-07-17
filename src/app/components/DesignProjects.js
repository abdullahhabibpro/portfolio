// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Figma, ExternalLink, ArrowRight, Palette, Layers, LayoutGrid } from 'lucide-react'; // Specific icons for design projects
// import { useTheme } from '@/app/context/ThemeContext';
// import { useState } from 'react';
// import { useInView } from 'react-intersection-observer';

// const designProjects = [
//   {
//     title: 'Portfolio Website UI/UX',
//     description: 'The comprehensive UI/UX design for this very portfolio website, focusing on modern aesthetics, intuitive navigation, and responsive layouts.',
//     tools: ['Figma', 'Prototyping', 'User Flows', 'Wireframing', 'Design Systems'],
//     image: '', // Placeholder for your portfolio's Figma preview
//     figmaLink: 'https://www.figma.com/design/Nf5daik93SKT42S5HgpjQD/Untitled?node-id=60-73&t=HaZVTd9abHhxrb6A-1', // Your provided Figma link
//     liveLink: '#', // If you have a live prototype link
//     features: ['Responsive Design', 'Interactive Prototype', 'Dark Mode Integration', 'Component Library']
//   },
//   {
//     title: 'E-commerce Mobile App Concept',
//     description: 'A sleek and user-friendly mobile application design for an e-commerce platform, emphasizing product discovery and seamless checkout experience.',
//     tools: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
//     image: '',
//     figmaLink: '#',
//     liveLink: '#',
//     features: ['Intuitive Navigation', 'Personalized Recommendations', 'Streamlined Checkout', 'Visual Hierarchy']
//   },
//   {
//     title: 'Dashboard Redesign for Analytics',
//     description: 'A modern and clean redesign of an analytics dashboard, improving data visualization, readability, and user interaction for better insights.',
//     tools: ['Figma', 'Data Visualization', 'Information Architecture', 'Component Library', 'Accessibility'],
//     image: '',
//     figmaLink: '#',
//     liveLink: '#',
//     features: ['Clear Data Display', 'Interactive Charts', 'Customizable Widgets', 'User-Centric Layout']
//   },
//   {
//     title: 'Learning Platform UI Kit',
//     description: 'A comprehensive UI kit for an online learning platform, including various components for courses, lessons, quizzes, and user profiles.',
//     tools: ['Figma', 'Design Systems', 'Atomic Design', 'Typography', 'Color Palettes'],
//     image: '',
//     figmaLink: '#',
//     liveLink: '#',
//     features: ['Modular Components', 'Consistent Branding', 'Scalable Design', 'Accessibility Guidelines']
//   },
// ];

// export default function DesignProjects() {
//   const { theme } = useTheme();
//   const isDark = theme === 'dark';
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const sectionTitleVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1]
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { y: 80, opacity: 0, rotateX: -5 },
//     visible: (i) => ({
//       y: 0,
//       opacity: 1,
//       rotateX: 0,
//       transition: {
//         delay: i * 0.12,
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1]
//       }
//     }),
//     hover: {
//       scale: 1.03,
//       rotateY: 3,
//       boxShadow: isDark ? "0 20px 40px rgba(0,0,0,0.5), 0 0 0 2px rgba(156,39,176,0.3)" : "0 20px 40px rgba(0,0,0,0.2), 0 0 0 2px rgba(0,119,182,0.2)", // Figma-inspired accent
//       transition: { type: "spring", stiffness: 300, damping: 20 }
//     }
//   };

//   const toolPillVariants = {
//     initial: { scale: 0.8, opacity: 0 },
//     animate: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: 'backOut'
//       }
//     }
//   };

//   const buttonHoverVariants = {
//     hover: {
//       scale: 1.05,
//       boxShadow: '0 10px 20px -5px rgba(0,0,0,0.3)',
//       transition: { duration: 0.3 }
//     },
//     tap: { scale: 0.95 }
//   };

//   return (
//     <section
//       id="design-projects"
//       ref={ref}
//       className={`relative py-28 overflow-hidden transition-colors duration-500
//         ${isDark
//           ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-50'
//           : 'bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900'
//         }`}
//     >
//       {/* Animated background elements (unique for design section) */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{
//             x: [0, 120, 0],
//             y: [0, 60, 0],
//             rotate: [0, 15, 0]
//           }}
//           transition={{
//             duration: 28,
//             repeat: Infinity,
//             ease: 'linear'
//           }}
//           className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20
//             ${isDark ? 'bg-pink-500/30' : 'bg-purple-400/20'}`}
//         ></motion.div>
//         <motion.div
//           animate={{
//             x: [0, -110, 0],
//             y: [0, -70, 0]
//           }}
//           transition={{
//             duration: 33,
//             repeat: Infinity,
//             ease: 'linear',
//             delay: 5
//           }}
//           className={`absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20
//             ${isDark ? 'bg-teal-500/30' : 'bg-orange-400/20'}`}
//         ></motion.div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           variants={sectionTitleVariants}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
//             <span className="relative inline-block">
//               My Design <span className={isDark ? 'text-purple-400' : 'text-indigo-600'}>Showcase</span>
//               <motion.span
//                 className={`absolute -bottom-2 left-0 w-full h-2 ${isDark ? 'bg-purple-500/60' : 'bg-indigo-500/50'} rounded-full`}
//                 initial={{ scaleX: 0 }}
//                 animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//               ></motion.span>
//             </span>
//           </h2>
//           <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
//             A collection of my UI/UX and product design work, demonstrating my creative vision and user-centric approach.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {designProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               whileHover="hover"
//               variants={cardVariants}
//               className={`relative rounded-3xl group cursor-pointer perspective-1000
//                 ${isDark ? 'bg-gray-800/60' : 'bg-white/80 shadow-xl'}`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div className={`relative h-full rounded-3xl overflow-hidden
//                 ${isDark ? 'border border-gray-700/60' : 'border border-gray-200'}
//                 transition-all duration-300 ease-out preserve-3d`}>

//                 {/* Project image with subtle hover effect and overlay */}
//                 <motion.div
//                   className="h-52 relative overflow-hidden"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover object-center"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     quality={80}
//                     priority={index < 3}
//                     onError={(e) => e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Error'} // Fallback image
//                   />
//                   {/* Gradient Overlay for better text readability */}
//                   <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/70 to-transparent' : 'from-gray-900/50 to-transparent'}`}></div>
//                   <div className={`absolute inset-0 ${isDark ? 'bg-black/40' : 'bg-gray-900/10'} transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center`}>
//                     <div className="flex gap-4">
//                       {project.figmaLink && (
//                         <motion.a
//                           href={project.figmaLink}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-200"
//                           whileHover={{ scale: 1.1, rotate: 5 }}
//                           whileTap={{ scale: 0.9 }}
//                           aria-label={`View ${project.title} Figma file`}
//                         >
//                           <Figma className="w-6 h-6" />
//                         </motion.a>
//                       )}
//                       {project.liveLink && (
//                         <motion.a
//                           href={project.liveLink}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-200"
//                           whileHover={{ scale: 1.1, rotate: -5 }}
//                           whileTap={{ scale: 0.9 }}
//                           aria-label={`View ${project.title} live prototype`}
//                         >
//                           <ExternalLink className="w-6 h-6" />
//                         </motion.a>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>

//                 <div className="p-7 flex flex-col justify-between h-[calc(100%-13rem)]">
//                   <div>
//                     <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3">{project.title}</h3>

//                     <p className={`mb-5 text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
//                       {project.description}
//                     </p>

//                     {/* Features list */}
//                     <ul className="mb-6 space-y-2">
//                       {project.features.map((feature, i) => (
//                         <li key={i} className="flex items-start">
//                           <LayoutGrid className={`inline-block mt-0.5 mr-2 w-4 h-4 flex-shrink-0 ${isDark ? 'text-purple-400' : 'text-indigo-500'}`} />
//                           <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Design Tools pills */}
//                   <div className="flex flex-wrap gap-2 mt-auto">
//                     {project.tools.map((tool, i) => (
//                       <motion.span
//                         key={i}
//                         custom={i}
//                         initial="initial"
//                         animate={inView ? "animate" : "initial"}
//                         variants={toolPillVariants}
//                         className={`text-xs px-3 py-1.5 rounded-full font-medium
//                           ${isDark
//                             ? 'bg-gray-700/50 text-gray-300 border border-gray-600'
//                             : 'bg-gray-100 text-gray-700 border border-gray-200'
//                           } transition-colors`}
//                       >
//                         {tool}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View all design projects link */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: designProjects.length * 0.12 + 0.5, duration: 0.8 }}
//           className="text-center mt-20"
//         >
//           <Link
//             href="#" // Link to a dedicated design projects page if you have one
//             className={`inline-flex items-center gap-3 px-10 py-4 rounded-full border-2 text-lg font-semibold
//               ${isDark
//                 ? 'border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:border-purple-500 hover:text-purple-400'
//                 : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-indigo-500 hover:text-indigo-600'
//               } transition-all duration-300`}
//             variants={buttonHoverVariants}
//             whileHover="hover"
//             whileTap="tap"
//           >
//             Explore More Designs <ArrowRight className="w-5 h-5" />
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import { Figma, Palette, LayoutGrid } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';
import { useInView } from 'react-intersection-observer';

const project = {
  title: 'ISLAMIC SOICALMEDIA UI/UX',
  description:
    'A UI UX layout in Figma that incorporates components, a cohesive style, and a color system to create an engaging social media platform tailored for Islamic users. Ensure the design is responsive for both mobile and desktop devices.',
  tools: ['Figma', 'Prototyping', 'Wireframing', 'Design Systems'],
  figmaLink:
    'https://www.figma.com/design/Nf5daik93SKT42S5HgpjQD/Untitled?node-id=60-73&t=HaZVTd9abHhxrb6A-1',
  features: [
    'Responsive Design',
    'Dark Mode Integration',
    'Component Library',
    'Interactive Prototype',
  ],
};

export default function DesignShowcase() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="design"
      ref={ref}
      className={`relative py-28 transition-colors duration-500 `}
    >
      {/* Background glows */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className={`absolute top-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-pink-500/30' : 'bg-indigo-400/20'
        }`}
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center"
        >
          <span className="relative inline-block">
            My <span className={isDark ? 'text-purple-400' : 'text-indigo-600'}>Design</span> Highlight
            <motion.span
              className={`absolute -bottom-2 left-0 w-full h-2 ${
                isDark ? 'bg-purple-500/60' : 'bg-indigo-500/50'
              } rounded-full`}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </span>
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          whileHover={{
            scale: 1.02,
            rotateX: 3,
            boxShadow: isDark
              ? '0 20px 40px rgba(0,0,0,0.5)'
              : '0 20px 40px rgba(0,0,0,0.1)',
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`rounded-3xl border px-8 py-10 max-w-4xl mx-auto text-center
            ${isDark
              ? 'bg-gray-800/60 border-gray-700/60'
              : 'bg-white/80 border-gray-200 shadow-lg'}`}
        >
          {/* Top: icon and title */}
          <div className="flex flex-col items-center gap-3 mb-5">
            <Palette className="w-10 h-10 text-purple-400" />
            <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
          </div>

          {/* Description */}
          <p
            className={`mb-6 max-w-2xl mx-auto text-base md:text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {project.description}
          </p>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {project.features.map((feat, i) => (
              <li
                key={i}
                className="flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <LayoutGrid
                  className={`w-4 h-4 ${
                    isDark ? 'text-purple-400' : 'text-indigo-500'
                  }`}
                />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  {feat}
                </span>
              </li>
            ))}
          </ul>

          {/* Tool tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className={`text-xs px-3 py-1.5 rounded-full font-medium border
                  ${
                    isDark
                      ? 'bg-gray-700/50 text-gray-300 border-gray-600'
                      : 'bg-gray-100 text-gray-700 border-gray-200'
                  }`}
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Figma link */}
          <motion.a
            href={project.figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all text-sm
              ${
                isDark
                  ? 'bg-purple-600 text-white hover:bg-purple-500'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View in Figma <Figma className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
