import React from 'react';
import { BiLogoAws, BiLogoPostgresql } from 'react-icons/bi';
import { DiJava } from 'react-icons/di';
import { SiJavascript, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const SkillsSection = () => {
    const skills = [
        { Icon: RiReactjsLine, color: 'text-cyan-400' },
        { Icon: SiMongodb, color: 'text-green-500' },
        {
            Icon: () => (
                <svg
                    className="w-20 h-18"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0cff0c"
                    viewBox="0 0 24 24"
                    transform="scale(-1,1) rotate(270)"
                >
                    <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424l-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21m.042-13.28a9.2 9.2 0 0 1-1.065 1.89 9.98 9.98 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.98 9.98 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292.274-2.539-.476-5.763-1.752-9.596" />
                </svg>
            ),
            color: '',
        },
        { Icon: BiLogoAws, color: 'text-yellow-600' },
        { Icon: BiLogoPostgresql, color: 'text-sky-700' },
        { Icon: SiMysql, color: 'text-blue-600' },
        { Icon: DiJava, color: 'text-orange-600' },
        { Icon: SiTailwindcss, color: 'text-sky-400' }, // Fixed line
        { Icon: SiJavascript, color: 'text-yellow-400' },
    ];

    // Animation variants for better control
    const iconVariants = {
        initial: { y: 0 },
        animate: {
            y: [0, -10, 0], // Up and down motion
            transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
            },
        },
        hover: {
            scale: 1.2, // Scale up on hover
            rotate: 10, // Slight rotation on hover
            transition: {
                duration: 0.3, // Fast hover transition
                ease: 'easeOut',
            },
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
        className="mb-15 text-center text-4xl lg:text-4xl"
        variants={headerVariants}
        initial="initial"
        whileHover="hover"
      >
        Techno<span className="tracking-tighter text-neutral-500">logies</span>
      </motion.h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {skills.map(({ Icon, color }, index) => (
                    <motion.div
                        key={index}
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        style={{ pointerEvents: 'auto' }} // Ensure pointer events are enabled
                        transition={{
                            duration: 1.5, // Duration for up-down animation
                            repeat: Infinity,
                            repeatType: 'reverse',
                            delay: index * 0.1, // Staggered delay for snake effect
                            ease: 'easeInOut',
                            whileHover: {
                                duration: 0.3, // Faster transition for hover
                                ease: 'easeOut',
                            },
                        }}
                    >
                        <Icon className={`text-7xl ${color}`} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;