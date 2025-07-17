"use client";
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedWrapper from './components/AnimatedWrapper';
import DesignProjects from './components/DesignProjects';
import { useTheme } from '@/app/context/ThemeContext';
import { ArrowUpCircle } from 'lucide-react'; // Import the icon

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled down more than 300px, adjust as needed
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  return (
    <AnimatedWrapper>
      <div className={theme === 'dark' ? 'dark' : ''}>
        {/* This div was empty and might not be doing what you intend.
            The background gradient should apply to the outermost div or a specific section.
            I've moved the background definition to the body/main container for better control.
            If this empty div was for a specific purpose, please clarify. */}
        <div className={`${isDark
          ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-50 min-h-screen'
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900 min-h-screen'
        }`}>
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <DesignProjects />
            <Experience />
            <Contact />
          </main>
          <Footer />

          {/* Scroll to Top Button */}
          {showScrollToTop && (
            <button
              onClick={scrollToTop}
              className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out
                ${isDark
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                }
                focus:outline-none focus:ring-2 ${isDark ? 'focus:ring-orange-500/50' : 'focus:ring-blue-500/50'}
              `}
              aria-label="Scroll to top"
            >
              <ArrowUpCircle className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </AnimatedWrapper>
  );
}