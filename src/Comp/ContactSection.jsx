import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
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

    const socialLinks = [
        { name: 'GitHub', link: 'https://github.com/Shaanworkspace' },
        { name: 'LinkedIn', link: 'https://linkedin.com/in/your-linkedin' },
        { name: 'LeetCode', link: 'https://leetcode.com/your-leetcode' },
        { name: 'HackerRank', link: 'https://hackerrank.com/your-hackerrank' },
        { name: 'CodeChef', link: 'https://codechef.com/your-codechef' },
    ];

    return (
        <motion.section
            id="contact"
            className="py-16 px-4 bg-gradient-to-b from-indigo-50 to-purple-50 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2 className="text-4xl font-bold text-gray-800" variants={itemVariants}>
                    Get in Touch
                </motion.h2>
                <motion.p className="text-gray-600 mt-4 text-lg" variants={itemVariants}>
                    Interested in collaborating or hiring me? Reach out!
                </motion.p>
                <motion.p className="text-gray-600 mt-3 text-lg" variants={itemVariants}>
                    Email: <a href="mailto:shaanyworkspace@gmail.com" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 hover:underline">shaanyworkspace@gmail.com</a>
                </motion.p>
                <div className="flex justify-center space-x-6 mt-8">
                    {socialLinks.map((platform) => (
                        <motion.a
                            key={platform.name}
                            href={platform.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300 relative group"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {platform.name}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ContactSection;
