import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    // Variants for staggered animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between child animations
            },
        },
    };

    // Variants for individual elements
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <motion.section
            className="relative pt-28 pb-16 px-4 text-center z-10 min-h-screen flex flex-col justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h2
                className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700"
                variants={itemVariants}
            >
                Hi, I'm Shaan Yadav
            </motion.h2>
            <motion.p
                className="text-xl md:text-2xl text-gray-700 mt-4 font-medium max-w-3xl"
                variants={itemVariants}
            >
                Passionate Application Developer | Java, ReactJS, AI & ML
            </motion.p>
            <motion.p
                className="text-base md:text-lg text-gray-600 mt-3 max-w-2xl mx-auto px-4"
                variants={itemVariants}
            >
                2nd-year BTech student at KIET Group of Institutions, building innovative solutions and solving problems with code.
            </motion.p>
            <motion.a
                href="#projects"
                className="mt-8 inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
            >
                View My Work
            </motion.a>
        </motion.section>
    );
};

export default HeroSection;