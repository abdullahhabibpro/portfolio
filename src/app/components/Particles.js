// src/app/components/Particles.js
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@/app/context/ThemeContext';


const Particle = ({ color, initialPosition, animationProps }) => {
  return (
    <motion.div
      initial={{
        x: `${initialPosition.x}vw`,
        y: `${initialPosition.y}vh`,
        opacity: 0,
        scale: 0
      }}
      animate={{
        x: `${initialPosition.x + animationProps.x}vw`,
        y: `${initialPosition.y + animationProps.y}vh`,
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0.5]
      }}
      transition={{
        duration: animationProps.duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: Math.random() * 5
      }}
      className="absolute rounded-full pointer-events-none"
      style={{
        width: `${initialPosition.size}px`,
        height: `${initialPosition.size}px`,
        backgroundColor: color,
        filter: 'blur(1px)'
      }}
    />
  );
};

export default function Particles({ quantity = 80 }) { // Default quantity increased
  const [particles, setParticles] = useState([]);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Determine particle color based on theme
  const particleColor = isDark ? 'rgba(255,165,0,0.4)' : 'rgba(0,119,182,0.3)';

  useEffect(() => {
    const newParticles = Array.from({ length: quantity }).map(() => ({
      initialPosition: {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2
      },
      animationProps: {
        x: Math.random() * 150 - 75,
        y: Math.random() * 150 - 75,
        duration: Math.random() * 25 + 15
      }
    }));
    setParticles(newParticles);
  }, [quantity]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <Particle
          key={i}
          color={particleColor} // Pass the theme-dependent color
          initialPosition={p.initialPosition}
          animationProps={p.animationProps}
        />
      ))}
    </div>
  );
}
