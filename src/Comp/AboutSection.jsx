import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';

const AboutSection = () => {

    // Animation variants for the image
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: 'easeOut' }
        },
        hover: {
            scale: 1.05, // Subtle scale on hover
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)', // Professional shadow
            transition: { duration: 0.3, ease: 'easeOut' },
        },
    };

    // Animation variants for the text
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' }
        },
        hover: {
            y: -5, // Slight lift on hover
            color: '#ffffff', // Brighten text (adjust based on your theme)
            transition: { duration: 0.3, ease: 'easeOut' },
        },
    };
    // Animation variants for header
    const headerVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.1,
            fontWeight: 700,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
    };
    return (
        <div className="border-b border-neutral-900 pb-2 lg:mb-32">
            <motion.h2
                className="mb-5 text-center text-4xl lg:text-4xl"
                variants={headerVariants}
                initial="initial"
                whileHover="hover"
            >
                About <span className="tracking-tighter text-neutral-500">Me</span>
            </motion.h2>
            <div className="flex flex-wrap lg:mt-10">
                <motion.div
                    className="w-full lg:w-1/2 lg:p-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }} // Removed once: true
                    whileHover="hover"
                    variants={imageVariants}
                    style={{ pointerEvents: 'auto' }} // Ensure hover events work
                >
                    <div className="flex items-center justify-center">
                        <motion.img
                            src={aboutImage}
                            alt="About Image"
                            className="rounded-2xl 
             shadow-[0_0_30px_rgba(147,51,234,0.4)] 
             hover:shadow-[0_0_40px_rgba(236,72,153,0.5)]
             transition-shadow duration-500 h-90 w-100 lg:h-110 lg:w-120"
                            whileHover={{
                                border: '4px solid rgba(255, 255, 255, 0.2)', // Subtle border glow
                                transition: { duration: 0.3 }
                            }}
                        />
                    </div>
                </motion.div>
                <motion.div
                    className="w-full lg:w-1/2 lg:p-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }} // Removed once: true
                    whileHover="hover"
                    variants={textVariants}
                    style={{ pointerEvents: 'auto' }} // Ensure hover events work
                >
                    <div className="flex items-center justify-center lg:justify-start">
                        <p className="my-2 max-w-xl">{ABOUT_TEXT.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                <br /><br />
                            </span>
                        ))}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutSection;