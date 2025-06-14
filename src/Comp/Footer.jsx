import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            className="py-6 px-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white text-center shadow-inner relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
            <p className="text-lg">© 2025 Shaan Yadav. All rights reserved.</p>
        </motion.footer>
    );
};

export default Footer;
