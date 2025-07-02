import React from 'react';
import { BiLogoAws, BiLogoPostgresql } from 'react-icons/bi';
import { DiJava } from 'react-icons/di';
import {
    SiJavascript, SiMongodb, SiMysql, SiTailwindcss, SiSpringboot,
    SiReact, SiNextdotjs, SiVite, SiHtml5, SiCss3, SiOpenai, SiGithub, SiGit, SiVercel, SiNetlify, SiRender, SiRailway, SiRedux, SiTypescript
} from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { FaNode, FaPython, FaDocker, FaLinux } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SkillsSection = () => {
    const skills = [
        { Icon: SiReact, color: 'text-cyan-400', label: 'React.js' },
        { Icon: SiRedux, color: 'text-purple-500', label: 'Redux' },
        { Icon: SiJavascript, color: 'text-yellow-400', label: 'JavaScript' },
        { Icon: SiHtml5, color: 'text-orange-500', label: 'HTML5' },
        { Icon: SiCss3, color: 'text-blue-500', label: 'CSS3' },
        { Icon: SiTailwindcss, color: 'text-sky-400', label: 'TailwindCSS' },
        { Icon: SiMongodb, color: 'text-green-500', label: 'MongoDB' },
        { Icon: SiMysql, color: 'text-blue-600', label: 'MySQL' },
        { Icon: BiLogoPostgresql, color: 'text-sky-700', label: 'PostgreSQL' },
        { Icon: SiSpringboot, color: 'text-green-600', label: 'Spring Boot' },
        { Icon: DiJava, color: 'text-orange-600', label: 'Java' },
        { Icon: FaPython, color: 'text-blue-300', label: 'Python' },
        
        { Icon: SiVercel, color: 'text-white', label: 'Vercel' },
        { Icon: SiNetlify, color: 'text-teal-300', label: 'Netlify' },
        { Icon: SiRender, color: 'text-blue-400', label: 'Render' },
        { Icon: SiRailway, color: 'text-yellow-400', label: 'Railway' },
        { Icon: SiOpenai, color: 'text-green-400', label: 'OpenAI API' },
        { Icon: SiGithub, color: 'text-white', label: 'GitHub' },
        { Icon: SiGit, color: 'text-orange-400', label: 'Git' },
        { Icon: FaDocker, color: 'text-blue-400', label: 'Docker' },
        { Icon: FaLinux, color: 'text-yellow-100', label: 'Linux' },
        // Custom SVG for shadcn/ui
        {
            Icon: () => (
                <svg
                    className="w-12 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#a21caf"
                    viewBox="0 0 24 24"
                >
                    <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424l-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21m.042-13.28a9.2 9.2 0 0 1-1.065 1.89 9.98 9.98 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.98 9.98 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292.274-2.539-.476-5.763-1.752-9.596" />
                </svg>
            ),
            color: '',
            label: 'shadcn/ui'
        },
    ];

    // Animation variants
    const iconVariants = {
        initial: { y: 0 },
        animate: {
            y: [0, -12, 0],
            transition: {
                duration: 1.4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
            },
        },
        hover: {
            scale: 1.17,
            rotate: 9,
            boxShadow: '0 4px 32px 0 rgba(168,85,247,0.18)',
            transition: { duration: 0.27, ease: 'easeOut' },
        },
    };

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
                className="relative group mb-20 text-center text-4xl lg:text-4xl"
                variants={headerVariants}
                initial="initial"
                whileHover="hover"
            >
                Techno
                <span className="tracking-tighter text-neutral-500">logies</span>
                {/* Animated gradient underline */}
                <span className="absolute left-1/2 -bottom-2 h-[4px] w-20 group-hover:w-56 transition-all duration-800 ease-in-out -translate-x-1/2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full" />
            </motion.h2>
            <div className="flex flex-wrap items-center justify-center gap-6">
                {skills.map(({ Icon, color, label }, index) => (
                    <motion.div
                        key={label || index}
                        className="rounded-2xl border-4 border-neutral-800 p-4 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black hover:from-purple-900/70 hover:to-zinc-900/40 shadow-md group flex flex-col items-center transition-all"
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        style={{ pointerEvents: 'auto' }}
                        transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            delay: index * 0.07,
                            ease: 'easeInOut',
                            whileHover: {
                                duration: 0.27,
                                ease: 'easeOut',
                            },
                        }}
                    >
                        <Icon className={`text-6xl md:text-7xl ${color} transition-colors duration-300`} />
                        <span className="mt-4 text-xs md:text-sm font-semibold tracking-wide text-neutral-300 group-hover:text-fuchsia-400 transition-all duration-300">
                            {label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;