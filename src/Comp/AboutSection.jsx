import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';

const AboutSection = () => {
  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.75, ease: 'easeOut' }
    },
    hover: {
      scale: 1.035,
      boxShadow: '0 16px 48px rgba(168,85,247,0.22), 0 2px 8px 0 rgba(0,0,0,0.15)',
      transition: { duration: 0.3, ease: 'easeOut' }
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.25, ease: 'easeOut' }
    },
    hover: {
      y: -5,
      color: '#fff',
      transition: { duration: 0.3, ease: 'easeOut' }
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 px-4 lg:py-32 bg-gradient-to-b from-black via-zinc-900 to-zinc-950 border-b border-zinc-800"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Image Side */}
        <motion.div
          className="w-full max-w-lg lg:max-w-xl mx-auto lg:mx-0 rounded-3xl bg-gradient-to-tr from-fuchsia-800/40 via-primary/30 to-zinc-900/50 shadow-2xl overflow-hidden flex-shrink-0"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <motion.img
            src={aboutImage}
            alt="About"
            className="w-full h-[390px] object-cover rounded-3xl shadow-xl transition-shadow duration-500"
            whileHover={{
              scale: 1.04,
              boxShadow: '0 20px 60px 0 rgba(236,72,153,0.18), 0 3px 12px 0 rgba(0,0,0,0.07)',
              border: '2px solid #a21caf33'
            }}
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          className="w-full max-w-2xl mx-auto lg:mx-0"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.4 }}
          variants={textVariants}
        >
          <div className="mb-7">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-left leading-tight relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              viewport={{ once: true }}
            >
              About <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
              {/* Gradient underline */}
              <span className="block absolute left-0 -bottom-3 h-[5px] w-24 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 rounded-full opacity-80" />
            </motion.h2>
            <p className="text-lg text-zinc-300 leading-relaxed mt-2 whitespace-pre-line">
              {ABOUT_TEXT}
            </p>
          </div>

          {/* Optionally, add highlights or stats here */}
          <div className="flex flex-wrap justify-evenly mt-6">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-fuchsia-400">1+</span>
              <span className="text-sm text-zinc-400">Years Project Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-fuchsia-400">10+</span>
              <span className="text-sm text-zinc-400">Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-fuchsia-400">8+</span>
              <span className="text-sm text-zinc-400">Technologies</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;