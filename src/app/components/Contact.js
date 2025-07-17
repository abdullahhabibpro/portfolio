'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '@/app/context/ThemeContext';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', type: '' }); // type: 'pending', 'success', 'error'

  const [ref, inView] = useInView({ // useInView for section visibility
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: 'Sending your message...', type: 'pending' });

    try {
      const res = await fetch('https://formsubmit.co/ajax/abdullahhabibpro@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === 'true') {
        setStatus({ message: 'Message sent successfully!', type: 'success' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        // FormSubmit returns data.success as a string 'false' or a custom error message on failure
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ message: 'Oops! Something went wrong. Please try again.', type: 'error' });
    }

    setTimeout(() => {
      setStatus({ message: '', type: '' });
    }, 5000); // Clear status after 5 seconds for success/error
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const contactItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: {
      y: -8,
      boxShadow: isDark ? "0 15px 30px rgba(0,0,0,0.4)" : "0 15px 30px rgba(0,0,0,0.15)",
      transition: { duration: 0.25, ease: 'easeOut' }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2, // Delay slightly after contact items
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      id="contact"
      ref={ref} // Attach ref for useInView
      className={`relative py-28 overflow-hidden transition-colors duration-500 ${
        isDark
          ? 'bg-gray-950 text-gray-50'
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900'
      }`}
    >
      {/* Animated background elements (consistent with other sections) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 25,
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
            duration: 30,
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
    Let&apos;s <span className={isDark ? 'text-orange-400' : 'text-blue-600'}>Connect</span>
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
            Whether you have a project in mind, a question, or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                title: 'Email',
                value: 'abdullahhabibpro@gmail.com',
                href: 'mailto:abdullahhabibpro@gmail.com',
                isExternal: false
              },
              {
                icon: Phone,
                title: 'Phone',
                value: '+92 320 3131380',
                href: 'tel:+923203131380',
                isExternal: false
              },
              {
                icon: Github,
                title: 'GitHub',
                value: 'github.com/abdullahhabibpro',
                href: 'https://github.com/abdullahhabibpro',
                isExternal: true
              },
              {
                icon: Linkedin,
                title: 'LinkedIn',
                value: 'linkedin.com/in/abdullahhabibullah',
                href: 'https://linkedin.com/in/abdullahhabibullah',
                isExternal: true
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                variants={contactItemVariants}
                className={`p-7 rounded-2xl border transition-all duration-300 cursor-pointer
                  ${isDark
                    ? 'bg-gray-800/60 border-gray-700/60 hover:bg-gray-700/70'
                    : 'bg-white/80 border-gray-200 hover:bg-white shadow-lg'
                  }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full flex-shrink-0
                    ${isDark ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/10 text-blue-600'}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                </div>
                <a
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : ""}
                  className={`block text-lg font-medium hover:text-accent transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {item.value}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={formVariants}
            onSubmit={handleSubmit}
            className={`p-8 rounded-2xl border shadow-xl flex flex-col justify-between
              ${isDark
                ? 'bg-gray-800/60 border-gray-700/60'
                : 'bg-white/80 border-gray-200'
              }`}
          >
            <div className="space-y-6 flex-grow">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-base font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-lg border-2 ${
                    isDark
                      ? 'bg-gray-700/50 border-gray-700 text-gray-50 focus:border-orange-500'
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:ring-2 ${isDark ? 'focus:ring-orange-500/30' : 'focus:ring-blue-500/30'} outline-none transition-all duration-200`}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-base font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-lg border-2 ${
                    isDark
                      ? 'bg-gray-700/50 border-gray-700 text-gray-50 focus:border-orange-500'
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:ring-2 ${isDark ? 'focus:ring-orange-500/30' : 'focus:ring-blue-500/30'} outline-none transition-all duration-200`}
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-base font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-lg border-2 ${
                    isDark
                      ? 'bg-gray-700/50 border-gray-700 text-gray-50 focus:border-orange-500'
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:ring-2 ${isDark ? 'focus:ring-orange-500/30' : 'focus:ring-blue-500/30'} outline-none transition-all duration-200 resize-y`}
                  rows="5"
                  placeholder="Hi Abdullah, I'd like to discuss..."
                  required
                ></textarea>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <motion.button
                type="submit"
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg
                  ${isDark
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                  } transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed`}
                disabled={status.type === 'pending'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {status.type === 'pending' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              <AnimatePresence mode="wait">
                {status.message && (
                  <motion.div
                    key={status.type}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-2 text-base font-medium ${
                      status.type === 'success'
                        ? 'text-green-500'
                        : status.type === 'error'
                        ? 'text-red-500'
                        : (isDark ? 'text-orange-400' : 'text-blue-500') // For pending state
                    }`}
                  >
                    {status.type === 'success' && <CheckCircle2 className="w-5 h-5" />}
                    {status.type === 'error' && <XCircle className="w-5 h-5" />}
                    {status.type === 'pending' && <Loader2 className="w-5 h-5 animate-spin" />}
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}