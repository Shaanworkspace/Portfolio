import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
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

    const skills = ['Java', 'Spring Boot', 'ReactJS', 'MySQL', 'C', 'C++', 'Python', 'Flutter', 'Dart', 'HTML', 'CSS', 'Git'];

    return (
        <motion.section
            id="skills"
            className="py-16 px-4 bg-white/90 backdrop-blur-sm shadow-inner relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2 className="text-4xl font-bold text-gray-800 text-center" variants={itemVariants}>
                    Skills
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                    {skills.map(
                        (skill) => (
                            <motion.div
                                key={skill}
                                className="bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-800 text-center py-4 rounded-xl shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-indigo-200 hover:to-purple-200 transition-all duration-300 transform"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-lg font-medium">{skill}</span>
                            </motion.div>
                        )
                    )}
                </div>
            </div>
        </motion.section>
    );
};

export default SkillsSection;
