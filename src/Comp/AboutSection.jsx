import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    // Variants for staggered animation within the section
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delay between child animations
            },
        },
    };

    // Variants for individual elements within the section
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
            id="about"
            className="py-16 px-4 bg-white/90 backdrop-blur-sm shadow-inner relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2 className="text-4xl font-bold text-gray-800" variants={itemVariants}>
                    About Me
                </motion.h2>
                <motion.p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed" variants={itemVariants}>
                    I'm a Computer Science student specializing in AI & ML at KIET Group of Institutions. Proficient in Java, Spring Boot, ReactJS, and MySQL, I enjoy building user-friendly applications and tackling coding challenges on LeetCode, CodeChef, and HackerRank. My goal is to create impactful software solutions and secure a role as a Java Developer.
                </motion.p>
            </div>
        </motion.section>
    );
};

export default AboutSection;