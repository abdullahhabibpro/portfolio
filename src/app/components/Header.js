"use client";

import Link from 'next/link';
import { Sun, Moon, Github, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/app/context/ThemeContext';
import { useState, useEffect } from 'react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['about', 'skills', 'projects', 'experience', 'contact'];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg px-6 py-3 transition-all duration-500 ${
        scrolled 
          ? isDark 
            ? 'bg-dark/90 shadow-xl' 
            : 'bg-light/90 shadow-md' 
          : 'bg-transparent shadow-none'
      } ${isDark ? 'text-light' : 'text-dark'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold hover:text-accent transition-colors relative group"
        >
          <span className="relative">
            Abdullah Habib
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className="font-medium text-base hover:text-accent transition-colors relative group"
            >
              <span className="relative">
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          ))}

          <div className="flex items-center gap-4 pl-2 border-l border-gray-400/30">
            <a
              href="https://github.com/abdullahhabibpro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/abdullahhabibullah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200/50'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`md:hidden overflow-hidden ${isDark ? 'bg-dark/95' : 'bg-light/95'} mt-2 rounded-lg`}
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col p-4 space-y-4"
            >
              {navItems.map((id) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="py-2 px-3 rounded-lg hover:bg-gray-400/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              ))}

              <div className="flex items-center justify-between pt-2 border-t border-gray-400/20">
                <div className="flex gap-4">
                  <a
                    href="https://github.com/abdullahhabibpro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-accent transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/abdullahhabibullah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-accent transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full ${
                    isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200/50'
                  }`}
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}






// "use client";

// import Link from 'next/link';
// import { Sun, Moon, Github, Linkedin, Menu, X } from 'lucide-react'; // Ensured Github and Linkedin are imported from lucide-react
// import { motion, AnimatePresence } from 'framer-motion';
// import { useTheme } from '@/app/context/ThemeContext';
// import { useState, useEffect } from 'react';

// export default function Header() {
//   const { theme, toggleTheme } = useTheme();
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSectionId, setActiveSectionId] = useState(''); // State for active section
//   const isDark = theme === 'dark';

//   // Define your navigation items. Make sure these match your section IDs in other components.
//   const navItems = ['about', 'skills', 'projects', 'contact'];

//   // Effect to handle header background change on scroll and active section highlighting
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50); // Header changes appearance after 50px scroll
//     };
//     window.addEventListener('scroll', handleScroll);

//     // Intersection Observer for detecting the active section in view
//     const observerOptions = {
//       root: null, // Use the viewport as the container
//       rootMargin: '-50% 0px -50% 0px', // A section is active when its center passes the viewport's center
//       threshold: 0, // Trigger callback whenever intersection percentage changes
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSectionId(entry.target.id); // Set the ID of the intersecting section
//         }
//       });
//     }, observerOptions);

//     // Observe each navigation section
//     navItems.forEach(id => {
//       const section = document.getElementById(id);
//       if (section) {
//         observer.observe(section);
//       }
//     });

//     // Cleanup: Remove event listener and stop observing when component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       navItems.forEach(id => {
//         const section = document.getElementById(id);
//         if (section) {
//           observer.unobserve(section);
//         }
//       });
//     };
//   }, [navItems]); // Dependency array: Re-run effect if navItems array reference changes

//   // Variants for mobile navigation menu animation
//   const mobileNavVariants = {
//     hidden: { opacity: 0, height: 0 },
//     visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
//     exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeOut' } },
//   };

//   // Variants for individual items within the mobile navigation menu
//   const mobileItemVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
//   };

//   return (
//     <motion.header
//       initial={{ y: -100, opacity: 0 }} // Start the header higher up and transparent
//       animate={{ y: 0, opacity: 1 }} // Animate to its final position
//       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} // Custom ease for a smoother animation
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ // Fixed position, high z-index, smooth transitions
//         scrolled // Conditional styling based on scroll position
//           ? isDark
//             ? 'bg-gray-900/80 shadow-xl' // Dark mode scrolled: semi-transparent dark background, strong shadow
//             : 'bg-white/80 shadow-lg' // Light mode scrolled: semi-transparent white background, strong shadow
//           : 'bg-transparent shadow-none' // Not scrolled: transparent background, no shadow
//       } ${isDark ? 'text-gray-50' : 'text-gray-900'} backdrop-blur-md`} // Text color based on theme, medium blur effect
//     >
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo / Name Link */}
//         <Link
//           href="/"
//           onClick={() => setIsOpen(false)} // Close mobile menu if open when clicking logo
//           className="text-2xl md:text-3xl font-extrabold hover:text-accent transition-colors relative group"
//         >
//           <span className="relative">
//             Abdullah <span className="text-accent">Habib</span> {/* Highlight "Habib" with accent color */}
//             <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDark ? 'bg-accent/70' : 'bg-accent/60'} transition-all duration-300 group-hover:w-full`}></span>
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-6 lg:gap-8">
//           {navItems.map((id) => {
//             const isActive = activeSectionId === id; // Check if the current section is active
//             return (
//               <Link
//                 key={id}
//                 href={`#${id}`}
//                 className={`font-medium text-base relative group transition-colors duration-200 ${
//                   isActive
//                     ? 'text-accent font-semibold' // Styling for the active link
//                     : isDark ? 'text-gray-300 hover:text-accent' : 'text-gray-700 hover:text-accent' // Default/hover styling
//                 }`}
//               >
//                 <span className="relative">
//                   {id.charAt(0).toUpperCase() + id.slice(1)} {/* Capitalize first letter */}
//                   <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
//                     isActive ? 'w-full bg-accent' : isDark ? 'bg-accent/70' : 'bg-accent/60'
//                   } transition-all duration-300 group-hover:w-full`}></span>
//                 </span>
//               </Link>
//             );
//           })}

//           {/* Social Links and Theme Toggle (Desktop) */}
//           <div className="flex items-center gap-4 pl-4 border-l border-gray-400/30">
//             <a
//               href="https://github.com/abdullahhabibpro"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`p-2 rounded-full transition-all duration-300 ${
//                 isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200/50'
//               } hover:text-accent hover:-translate-y-0.5`}
//               aria-label="GitHub profile"
//             >
//               <Github className="w-5 h-5" /> {/* Lucide GitHub icon */}
//             </a>
//             <a
//               href="https://linkedin.com/in/abdullahhabibullah"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`p-2 rounded-full transition-all duration-300 ${
//                 isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200/50'
//               } hover:text-accent hover:-translate-y-0.5`}
//               aria-label="LinkedIn profile"
//             >
//               <Linkedin className="w-5 h-5" /> {/* Lucide LinkedIn icon */}
//             </a>

//             <button
//               onClick={toggleTheme}
//               className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
//                 isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200/50'
//               }`}
//               aria-label="Toggle theme"
//             >
//               {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//             </button>
//           </div>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${
//             isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200/50'
//           }`}
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle mobile menu"
//         >
//           {isOpen ? (
//             <X className="w-7 h-7" /> // Close icon when menu is open
//           ) : (
//             <Menu className="w-7 h-7" /> // Hamburger icon when menu is closed
//           )}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={mobileNavVariants} // Apply main mobile menu animation variants
//             className={`md:hidden overflow-hidden ${isDark ? 'bg-gray-800/95' : 'bg-white/95'} py-4 px-6 mt-2 rounded-lg shadow-lg`}
//           >
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               transition={{ staggerChildren: 0.07 }} // Stagger children for sequential animation
//               className="flex flex-col space-y-4" // Use flexbox for vertical spacing
//             >
//               {navItems.map((id) => {
//                 const isActive = activeSectionId === id;
//                 return (
//                   <motion.div variants={mobileItemVariants} key={id}> {/* Each nav item animates individually */}
//                     <Link
//                       href={`#${id}`}
//                       className={`block py-3 px-4 rounded-lg transition-colors duration-200 text-lg font-medium ${
//                         isActive
//                           ? 'bg-accent/20 text-accent font-semibold' // Active mobile link styling
//                           : isDark ? 'hover:bg-gray-700/20' : 'hover:bg-gray-100' // Default/hover styling
//                       }`}
//                       onClick={() => setIsOpen(false)} // Close menu on item click
//                     >
//                       {id.charAt(0).toUpperCase() + id.slice(1)}
//                     </Link>
//                   </motion.div>
//                 );
//               })}

//               {/* Social Links and Theme Toggle (Mobile) */}
//               <motion.div
//                 variants={mobileItemVariants} // Apply item variant to this container
//                 className="flex items-center justify-center pt-6 border-t border-gray-400/20 gap-6"
//               >
//                 <a
//                   href="https://github.com/abdullahhabibpro"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`p-3 rounded-full transition-colors duration-300 ${
//                     isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200/50'
//                   } hover:text-accent`}
//                   aria-label="GitHub profile"
//                 >
//                   <Github className="w-6 h-6" /> {/* Lucide GitHub icon */}
//                 </a>
//                 <a
//                   href="https://linkedin.com/in/abdullahhabibullah"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`p-3 rounded-full transition-colors duration-300 ${
//                     isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200/50'
//                   } hover:text-accent`}
//                   aria-label="LinkedIn profile"
//                 >
//                   <Linkedin className="w-6 h-6" /> {/* Lucide LinkedIn icon */}
//                 </a>
//                 <button
//                   onClick={toggleTheme}
//                   className={`p-3 rounded-full transition-all duration-300 ${
//                     isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200/50'
//                   }`}
//                   aria-label="Toggle theme"
//                 >
//                   {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
//                 </button>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }