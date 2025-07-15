"use client";



import { motion, AnimatePresence } from 'framer-motion'; // <--- Add AnimatePresence here
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '@/app/context/ThemeContext';

// ... rest of your component code ...

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', type: '' }); // type: 'pending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: 'Sending your message...', type: 'pending' });

    // In a real application, you would send this to an API endpoint
    // Example:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setStatus({ message: 'Message sent successfully!', type: 'success' });
    //     setFormData({ name: '', email: '', message: '' });
    //   } else {
    //     const errorData = await response.json();
    //     setStatus({ message: errorData.message || 'Failed to send message.', type: 'error' });
    //   }
    // } catch (error) {
    //   setStatus({ message: 'An error occurred. Please try again later.', type: 'error' });
    // } finally {
    //   setTimeout(() => {
    //     setStatus({ message: '', type: '' });
    //   }, 5000); // Clear status after 5 seconds
    // }

    // --- Simulated submission for now ---
    setTimeout(() => {
      const success = Math.random() > 0.1; // Simulate 90% success rate
      if (success) {
        setStatus({ message: 'Message sent successfully!', type: 'success' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ message: 'Oops! Something went wrong. Please try again.', type: 'error' });
      }

      setTimeout(() => {
        setStatus({ message: '', type: '' });
      }, 5000); // Clear status after 5 seconds for success/error
    }, 2000); // Increased simulation time
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        ease: [0.22, 1, 0.36, 1] // More expressive ease
      }
    }),
    hover: {
      y: -8, // Lift more on hover
      boxShadow: isDark ? "0 15px 30px rgba(0,0,0,0.4)" : "0 15px 30px rgba(0,0,0,0.15)", // Dynamic shadow
      transition: { duration: 0.25, ease: 'easeOut' }
    }
  };

  return (
    <section
      id="contact"
      className={`relative py-28 overflow-hidden transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-50'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900'
      }`}
    >
      {/* Animated background elements (consistent with other sections) */}
      {isDark ? (
        <div className="absolute inset-0 overflow-hidden opacity-10">
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
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"
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
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4"> {/* Increased font weight */}
            <span className="relative inline-block">
              Let's <span className="text-accent">Connect</span>
              <span className={`absolute -bottom-2 left-0 w-full h-1.5 ${ // Thicker underline
                isDark ? 'bg-accent/70' : 'bg-accent/50'
              } rounded-full`}></span>
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700' // Consistent text color
          }`}>
            Whether you have a project in mind, a question, or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> {/* Increased gap for more breathing room */}
          {/* Contact Information */}
          <div className="space-y-6"> {/* Removed motion.div from parent to apply to children */}
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
                icon: Github, // Using Lucide Github
                title: 'GitHub',
                value: 'github.com/abdullahhabibpro',
                href: 'https://github.com/abdullahhabibpro',
                isExternal: true
              },
              {
                icon: Linkedin, // Using Lucide Linkedin
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
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.5 }} // Trigger earlier
                variants={contactItemVariants}
                className={`p-7 rounded-xl border transition-all duration-300 cursor-pointer ${ // Increased padding, rounded-xl, border
                  isDark
                    ? 'bg-gray-800/60 border-gray-700/60 hover:bg-gray-700/70'
                    : 'bg-white/80 border-gray-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full ${ // Consistent icon background
                    isDark ? 'bg-accent/20 text-accent' : 'bg-accent/10 text-accent'
                  }`}>
                    <item.icon className="w-7 h-7" /> {/* Larger icons */}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3> {/* Larger title */}
                </div>
                <a
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : ""}
                  className={`block text-lg font-medium hover:text-accent transition-colors duration-300 ${ // Larger font, block for full clickable area
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
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className={`p-8 rounded-xl border shadow-xl flex flex-col justify-between ${ // Added flex-col justify-between for sticky button
              isDark
                ? 'bg-gray-800/60 border-gray-700/60'
                : 'bg-white/80 border-gray-200'
            }`}
          >
            <div className="space-y-6 flex-grow"> {/* flex-grow to push button down */}
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
                  className={`w-full p-4 rounded-lg border-2 ${ // Thicker border
                    isDark
                      ? 'bg-gray-700/50 border-gray-700 text-light focus:border-accent'
                      : 'bg-gray-50 border-gray-300 text-dark focus:border-accent'
                  } focus:ring-2 focus:ring-accent/30 outline-none transition-all duration-200`} // Smooth transition
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
                  className={`w-full p-4 rounded-lg border-2 ${ // Thicker border
                    isDark
                      ? 'bg-gray-700/50 border-gray-700 text-light focus:border-accent'
                      : 'bg-gray-50 border-gray-300 text-dark focus:border-accent'
                  } focus:ring-2 focus:ring-accent/30 outline-none transition-all duration-200`}
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
                  className={`w-full p-4 rounded-lg border-2 ${ // Thicker border
                    isDark
                      ? 'bg-gray-700/50 border-gray-700 text-light focus:border-accent'
                      : 'bg-gray-50 border-gray-300 text-dark focus:border-accent'
                  } focus:ring-2 focus:ring-accent/30 outline-none transition-all duration-200 resize-y`} // Allow vertical resize
                  rows="5"
                  placeholder="Hi Abdullah, I'd like to discuss..."
                  required
                ></textarea>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4"> {/* Adjusted margin-top */}
              <button
                type="submit"
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg ${ // Larger button, larger font
                  isDark
                    ? 'bg-accent hover:bg-accent/90 text-white'
                    : 'bg-accent hover:bg-accent/90 text-white'
                } transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed`}
                disabled={status.type === 'pending'} // Disable button when sending
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
              </button>

              <AnimatePresence mode="wait"> {/* Use AnimatePresence for smooth status transitions */}
                {status.message && (
                  <motion.div
                    key={status.type} // Key changes to re-animate on type change
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-2 text-base font-medium ${
                      status.type === 'success'
                        ? 'text-green-500'
                        : status.type === 'error'
                        ? 'text-red-500'
                        : 'text-accent' // For pending state
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