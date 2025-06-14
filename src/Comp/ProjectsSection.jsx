import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
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

    const projects = [
        {
            name: 'MediPlan',
            desc: 'A medical website with appointment booking and health tips, built with ReactJS, Spring Boot, and MySQL.',
            link: 'https://github.com/Shaanworkspace/MediPlan-Backend',
        },
        {
            name: 'Employee Management System',
            desc: 'A system for managing employee records using Java, Spring Boot, and MySQL.',
            link: 'https://github.com/Shaanworkspace/Employee-Management',
        },
        {
            name: 'Journal Entry',
            desc: 'A note-taking app with Markdown support, built with Flutter and Dart.',
            link: 'https://github.com/Shaanworkspace/Journal-Entry',
        },
    ];

    return (
        <motion.section
            id="projects"
            className="py-16 px-4 bg-gradient-to-b from-purple-50 to-indigo-50 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2 className="text-4xl font-bold text-gray-800 text-center" variants={itemVariants}>
                    Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {projects.map((project) => (
                        <motion.div
                            key={project.name}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>
                            <p className="text-gray-600 mt-3 leading-relaxed">{project.desc}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 mt-4 inline-block font-medium hover:text-indigo-800 transition-colors duration-300 hover:underline"
                            >
                                View on GitHub
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;
