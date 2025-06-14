import React, { useState } from 'react';
import {
    motion,
    AnimatePresence
} from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for hamburger and close

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['About', 'Projects', 'Skills', 'Contact'];

    const menuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 20, staggerChildren: 0.1 } },
        exit: { opacity: 0, x: "100%", transition: { ease: "easeOut" } }
    };

    const menuItemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.header
            className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow-lg z-20"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo/Name */}
                <motion.h1
                    className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Shaan Yadav
                </motion.h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 items-center">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300 relative group"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </motion.a>
                    ))}
                    <motion.a
                        href="https://shaanresume.tiiny.site/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Resume
                    </motion.a>
                </nav>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 text-2xl"
                        aria-label="Toggle Navigation"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white/90 backdrop-blur-lg py-4 absolute top-full left-0 w-full shadow-lg"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <nav className="flex flex-col items-center space-y-4">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-800 text-lg font-medium hover:text-indigo-600 transition-colors duration-300 w-full text-center py-2"
                                    variants={menuItemVariants}
                                    onClick={() => setIsMenuOpen(false)} // Close menu on item click
                                >
                                    {item}
                                </motion.a>
                            ))}
                            <motion.a
                                href="https://shaanresume.tiiny.site/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg mt-4"
                                variants={menuItemVariants}
                                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Resume
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;