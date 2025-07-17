// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { Download, ArrowRight, Mouse } from 'lucide-react';
// import { useTheme } from '@/app/context/ThemeContext';
// import { useEffect, useState } from 'react';
// import { useInView } from 'react-intersection-observer';
// import Particles from './Particles'; // Assuming this component is in the same directory

// // Enhanced text variants for a more dynamic reveal
// const textVariants = {
//   hidden: { opacity: 0, y: 50, skewY: 5 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     skewY: 0,
//     transition: {
//       delay: i * 0.1, // Slightly reduced delay for quicker reveal
//       duration: 0.9,
//       ease: [0.22, 1, 0.36, 1], // Custom easing for a more natural feel
//     }
//   })
// };

// const floatingAnimation = {
//   float: {
//     y: [0, -20, 0], // More pronounced vertical float
//     rotate: [0, 3, -3, 0], // Subtle rotation
//     scale: [1, 1.01, 1], // Minor scaling for depth
//     transition: {
//       duration: 8, // Longer duration for smoother effect
//       ease: "easeInOut",
//       repeat: Infinity
//     }
//   }
// };

// const buttonHover = {
//   hover: {
//     scale: 1.08, // Increased scale on hover
//     boxShadow: '0 15px 30px -8px rgba(0, 0, 0, 0.3)', // Stronger shadow for depth
//     transition: { duration: 0.3, ease: 'easeOut' }
//   },
//   tap: { scale: 0.92 }
// };

// export default function Hero() {
//   const { theme } = useTheme();
//   const [isMounted, setIsMounted] = useState(false);
//   const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true }); // Increased threshold

//   const isDark = theme === 'dark';

//   useEffect(() => {
//     setIsMounted(true); // Ensures particles only render client-side
//   }, []);

//   return (
//     <section
//       id="home"
//       ref={ref}
//       className={`
//         relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-0
//         transition-colors duration-700
//         ${isDark
//           ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-50'
//           : 'bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900'
//         }
//       `}
//     >
//       {/* Animated background elements */}
//       {isMounted && (
//         <>
//           <Particles
//             quantity={80} // Increased particle quantity
//             color={isDark ? 'rgba(255,165,0,0.4)' : 'rgba(0,119,182,0.3)'} // Adjusted particle color
//           />

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.25 }} // Slightly more visible
//             transition={{ duration: 2.5 }}
//             className="absolute inset-0 overflow-hidden pointer-events-none"
//           >
//             <motion.div
//               animate={{
//                 x: [0, '20%', '0%'], // More dynamic movement
//                 y: [0, '15%', '0%'],
//                 rotate: [0, 8, 0],
//                 scale: [1, 1.1, 1] // Subtle scaling
//               }}
//               transition={{
//                 duration: 25, // Slower for grander effect
//                 repeat: Infinity,
//                 ease: 'linear'
//               }}
//               className={`
//                 absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply blur-3xl
//                 ${isDark ? 'bg-orange-600/30' : 'bg-orange-400/20'}
//               `}
//             />
//             <motion.div
//               animate={{
//                 x: [0, '-25%', '0%'],
//                 y: [0, '-18%', '0%'],
//                 rotate: [0, -10, 0],
//                 scale: [1, 1.15, 1]
//               }}
//               transition={{
//                 duration: 30,
//                 repeat: Infinity,
//                 ease: 'linear'
//               }}
//               className={`
//                 absolute bottom-1/3 right-1/4 w-xl h-xl rounded-full mix-blend-multiply blur-3xl
//                 ${isDark ? 'bg-indigo-600/30' : 'bg-blue-500/20'}
//               `}
//             />
//           </motion.div>
//         </>
//       )}

//       <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between py-24 md:py-32 gap-16 lg:gap-12 relative z-10">
//         <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
//           <AnimatePresence>
//             {inView && (
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 className="space-y-8"
//               >
//                 <motion.h1
//                   custom={0}
//                   variants={textVariants}
//                   className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight"
//                 >
//                   Hi, I'm{' '}
//                   <span className="relative inline-block">
//                     <span className="relative z-10">Abdullah</span>
//                     <motion.span
//                       className={`
//                         absolute bottom-2 left-0 w-full h-4 -skew-x-12 rounded-lg
//                         ${isDark ? 'bg-orange-500/60' : 'bg-orange-400/50'}
//                       `}
//                       initial={{ scaleX: 0 }}
//                       animate={{ scaleX: 1 }}
//                       transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
//                     />
//                   </span>{' '}
//                   Habib
//                 </motion.h1>

//                 <motion.h2
//                   custom={1}
//                   variants={textVariants}
//                   className={`
//                     text-2xl sm:text-3xl md:text-4xl font-semibold
//                     ${isDark ? 'text-orange-400' : 'text-blue-600'}
//                   `}
//                 >
//                   <span className="inline-flex items-center gap-3">
//                     Full-Stack Developer
//                     <motion.span
//                       animate={{ x: [0, 8, 0] }} // More noticeable arrow animation
//                       transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
//                     >
//                       <ArrowRight className="w-6 h-6" />
//                     </motion.span>
//                   </span>
//                 </motion.h2>

//                 <motion.p
//                   custom={2}
//                   variants={textVariants}
//                   className="text-lg md:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0"
//                 >
//                   I craft <span className="font-bold text-orange-500">scalable</span>,{' '}
//                   <span className="font-bold text-blue-500">user-focused</span> web applications with cutting-edge
//                   technologies. Specializing in <span className="text-orange-500">React</span> and{' '}
//                   <span className="text-blue-500">Next.js</span> ecosystems.
//                 </motion.p>

//                 <motion.div
//                   custom={3}
//                   variants={textVariants}
//                   className="flex flex-wrap justify-center lg:justify-start gap-5 pt-4"
//                 >
//                   <motion.a
//                     href="/app/resume.pdf" // Ensure this path is correct
//                     download
//                     variants={buttonHover}
//                     whileHover="hover"
//                     whileTap="tap"
//                     className={`
//                       inline-flex items-center gap-2 px-8 py-4 rounded-full shadow-lg
//                       bg-orange-600 text-white font-semibold text-lg
//                       hover:bg-orange-700 transition-colors duration-300
//                     `}
//                   >
//                     <Download className="w-6 h-6" />
//                     Download Resume
//                   </motion.a>
//                   <motion.a
//                     href="#contact"
//                     variants={buttonHover}
//                     whileHover="hover"
//                     whileTap="tap"
//                     className={`
//                       inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg
//                       border-2 border-orange-600 ${isDark ? 'text-orange-400 hover:bg-orange-600/10' : 'text-blue-600 hover:bg-blue-100'}
//                       transition-colors duration-300
//                     `}
//                   >
//                     <span>Let's Connect</span>
//                     <ArrowRight className="w-5 h-5" />
//                   </motion.a>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
//           animate={inView ? {
//             opacity: 1,
//             scale: 1,
//             rotate: 0
//           } : {}}
//           transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
//           className="lg:w-1/2 flex justify-center relative pt-12 lg:pt-0"
//         >
//           <motion.div
//             variants={floatingAnimation}
//             animate="float"
//             className={`
//               w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative
//               rounded-full border-8 shadow-2xl overflow-hidden
//               ${isDark ? 'border-gray-700/50 ring-4 ring-orange-500/40' : 'border-gray-200/50 ring-4 ring-blue-400/30'}
//               transition-all duration-500
//             `}
//           >
//             <Image
//               src="/app/images/profile.jpg" // Ensure this path is correct and accessible
//               alt="Profile of Abdullah Habib"
//               fill
//               className="object-cover object-center"
//               sizes="(max-width: 768px) 100vw, 50vw"
//               priority
//             />
//             <motion.div
//               className={`
//                 absolute inset-0 rounded-full
//                 ${isDark ? 'bg-orange-500/20' : 'bg-blue-400/10'} backdrop-filter backdrop-blur-sm
//               `}
//               animate={{ opacity: [0.1, 0.3, 0.1] }}
//               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//             />
//           </motion.div>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ delay: 2.5, duration: 1, ease: 'easeOut' }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500"
//       >
//         <motion.div
//           animate={{ y: [0, 15, 0] }} // More pronounced scroll indicator animation
//           transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Mouse className="w-7 h-7 text-gray-400" />
//         </motion.div>
//         <span className="text-sm mt-2 font-medium">Scroll to explore</span>
//       </motion.div>
//     </section>
//   );
// }
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight, Mouse } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Particles from './Particles';

const textVariants = {
  hidden: { opacity: 0, y: 50, skewY: 5 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const buttonHover = {
  hover: {
    scale: 1.08,
    boxShadow: '0 15px 30px -8px rgba(0, 0, 0, 0.3)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  tap: { scale: 0.92 },
};

export default function Hero() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const isDark = theme === 'dark';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className={`
        relative min-h-screen flex items-center justify-center overflow-hidden px-4
        transition-colors duration-700
        
      `}
    >
      {isMounted && (
        <>
          <Particles
            quantity={80}
            color={isDark ? 'rgba(255,165,0,0.4)' : 'rgba(0,119,182,0.3)'}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 2.5 }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            <motion.div
              animate={{
                x: [0, '20%', '0%'],
                y: [0, '15%', '0%'],
                rotate: [0, 8, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className={`
                absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply blur-3xl
                ${isDark ? 'bg-orange-600/30' : 'bg-orange-400/20'}
              `}
            />
            <motion.div
              animate={{
                x: [0, '-25%', '0%'],
                y: [0, '-18%', '0%'],
                rotate: [0, -10, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className={`
                absolute bottom-1/3 right-1/4 w-xl h-xl rounded-full mix-blend-multiply blur-3xl
                ${isDark ? 'bg-indigo-600/30' : 'bg-blue-500/20'}
              `}
            />
          </motion.div>
        </>
      )}

      <div className="container mx-auto px-6 flex flex-col items-center justify-center py-24 md:py-32 gap-16 relative z-10">
        <div className="w-full max-w-4xl space-y-8 text-center">
          <AnimatePresence>
            {inView && (
              <motion.div initial="hidden" animate="visible" className="space-y-8">
                <motion.h1
                  custom={0}
                  variants={textVariants}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight"
                >
                  Hi, I&apos;m{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">Abdullah</span>
                    <motion.span
                      className={`
                        absolute bottom-2 left-0 w-full h-4 -skew-x-12 rounded-lg
                        ${isDark ? 'bg-orange-500/60' : 'bg-orange-400/50'}
                      `}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>{' '}
                  Habib
                </motion.h1>

                <motion.h2
                  custom={1}
                  variants={textVariants}
                  className={`
                    text-2xl sm:text-3xl md:text-4xl font-semibold
                    ${isDark ? 'text-orange-400' : 'text-blue-600'}
                  `}
                >
                  <span className="inline-flex items-center gap-3">
                    Full-Stack Developer
                    <motion.span
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.span>
                  </span>
                </motion.h2>

                <motion.p
                  custom={2}
                  variants={textVariants}
                  className="text-lg md:text-xl max-w-2xl leading-relaxed mx-auto"
                >
                  I craft <span className="font-bold text-orange-500">scalable</span>,{' '}
                  <span className="font-bold text-blue-500">user&ndash;focused</span> web applications with cutting&ndash;edge
                  technologies. Specializing in <span className="text-orange-500">React</span> and{' '}
                  <span className="text-blue-500">Next.js</span> ecosystems.
                </motion.p>

                <motion.div
                  custom={3}
                  variants={textVariants}
                  className="flex flex-wrap justify-center gap-5 pt-4"
                >
                  <motion.a
                    href="/app/resume.pdf"
                    download
                    variants={buttonHover}
                    whileHover="hover"
                    whileTap="tap"
                    className={`
                      inline-flex items-center gap-2 px-8 py-4 rounded-full shadow-lg
                      bg-orange-600 text-white font-semibold text-lg
                      hover:bg-orange-700 transition-colors duration-300
                    `}
                  >
                    <Download className="w-6 h-6" />
                    Download Resume
                  </motion.a>
                  <motion.a
                    href="#contact"
                    variants={buttonHover}
                    whileHover="hover"
                    whileTap="tap"
                    className={`
                      inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg
                      border-2 border-orange-600 ${isDark ? 'text-orange-400 hover:bg-orange-600/10' : 'text-blue-600 hover:bg-blue-100'}
                      transition-colors duration-300
                    `}
                  >
                    <span>Let&apos;s Connect</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2.5, duration: 1, ease: 'easeOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Mouse className="w-7 h-7 text-gray-400" />
        </motion.div>
        <span className="text-sm mt-2 font-medium">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
