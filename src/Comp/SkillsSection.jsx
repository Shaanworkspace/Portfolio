import React from "react";
import { motion } from "framer-motion";

// Icons
import {
    BiLogoAws,
    BiLogoPostgresql,
    BiServer,
    BiCodeBlock,
    BiCloud,
    BiBrain,
} from "react-icons/bi";
import { DiJava } from "react-icons/di";
import {
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiSpringboot,
    SiReact,
    SiNextdotjs,
    SiHtml5,
    SiCss3,
    SiOpenai,
    SiGithub,
    SiGit,
    SiVercel,
    SiNetlify,
    SiRender,
    SiRailway,
    SiRedux,
    SiTypescript,
    SiPostman,
} from "react-icons/si";
import { FaNode, FaPython, FaDocker, FaLinux } from "react-icons/fa";

// --- Data ---
const SKILL_CATEGORIES = [
    {
        id: "backend",
        label: "01 // CORE_LOGIC",
        title: "Backend & Architecture",
        icon: BiServer,
        skills: [
            { Icon: DiJava, color: "#F89820", label: "Java" },
            { Icon: SiSpringboot, color: "#6DB33F", label: "Spring Boot" },
            { Icon: FaPython, color: "#3776AB", label: "Python" },
            { Icon: SiMysql, color: "#4479A1", label: "MySQL" },
            { Icon: BiLogoPostgresql, color: "#336791", label: "PostgreSQL" },
            { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
        ],
        // Bento Span Class (Full width on tablet, Half on Desktop)
        className: "md:col-span-2 lg:col-span-1",
    },
    {
        id: "frontend",
        label: "02 // UI_UX_DESIGN",
        title: "Frontend Ecosystem",
        icon: BiCodeBlock,
        skills: [
            { Icon: SiReact, color: "#61DAFB", label: "React.js" },
            { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind" },
            { Icon: SiRedux, color: "#764ABC", label: "Redux" },
            { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
            { Icon: SiHtml5, color: "#E34F26", label: "HTML5" },
            { Icon: SiCss3, color: "#1572B6", label: "CSS3" },
        ],
        className: "md:col-span-2 lg:col-span-1",
    },
    {
        id: "devops",
        label: "03 // INFRASTRUCTURE",
        title: "DevOps & Cloud",
        icon: BiCloud,
        skills: [
            { Icon: FaDocker, color: "#2496ED", label: "Docker" },
            { Icon: BiLogoAws, color: "#FF9900", label: "AWS" },
            { Icon: FaLinux, color: "#FCC624", label: "Linux" },
            { Icon: SiGit, color: "#F05032", label: "Git" },
            { Icon: SiPostman, color: "#FF6C37", label: "Postman" },
            { Icon: SiVercel, color: "#ffffff", label: "Vercel" },
            { Icon: SiRender, color: "#46E3B7", label: "Render" },
        ],
        className: "md:col-span-1",
    },
    {
        id: "ai",
        label: "04 // INTELLIGENCE",
        title: "AI & Integrations",
        icon: BiBrain,
        skills: [
            { Icon: SiOpenai, color: "#10A37F", label: "OpenAI API" },
            { Icon: SiGithub, color: "#ffffff", label: "GitHub Actions" },
            {
                Icon: () => (
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="none"
                    >
                        <path
                            d="M208 128L128 208L48 128L128 48L208 128Z"
                            stroke="currentColor"
                            strokeWidth="16"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ),
                color: "#ffffff",
                label: "ShadCN/UI",
            },
        ],
        className: "md:col-span-1",
    },
];

// --- Components ---

const SkillPill = ({ Icon, color, label }) => (
    <div className="group flex items-center gap-3 px-4 py-3 bg-black/40 border border-neutral-800 rounded-lg hover:border-neutral-600 hover:bg-neutral-800/40 transition-all duration-300">
        <div className="p-1.5 rounded bg-neutral-900 border border-neutral-800 group-hover:border-neutral-600 transition-colors">
            <Icon
                className="text-lg text-neutral-400 group-hover:text-white transition-colors"
                style={{ color: null }}
            />
            {/* Color Reveal on Hover */}
            <div className="hidden">
                {/* Logic placeholder if you want forced colors, but text-white is cleaner for this minimal look */}
            </div>
        </div>
        <span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
            {label}
        </span>
    </div>
);

const BentoCard = ({ category, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`
                relative p-6 md:p-8 rounded-3xl bg-neutral-900/20 border border-white/5 
                backdrop-blur-sm overflow-hidden group hover:border-white/10 transition-colors
                ${category.className}
            `}
        >
            {/* Background Gradient Blob */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl group-hover:bg-purple-900/20 transition-colors duration-500" />

            {/* Header */}
            <div className="relative z-10 mb-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-purple-400 tracking-wider uppercase">
                        {category.label}
                    </span>
                    <category.icon className="text-neutral-600 text-xl group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                    {category.title}
                </h3>
            </div>

            {/* Skills Grid */}
            <div className="relative z-10 grid grid-cols-2 gap-3">
                {category.skills.map((skill, idx) => (
                    <SkillPill
                        key={idx}
                        Icon={skill.Icon}
                        color={skill.color}
                        label={skill.label}
                    />
                ))}
            </div>

            {/* Corner Accents for Tech Feel */}
            <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-neutral-800" />
            <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-neutral-800" />
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-neutral-800" />
            <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-neutral-800" />
        </motion.div>
    );
};

const SkillsSection = () => {
    return (
        <section className="py-24 px-4 md:px-8 relative border-b border-neutral-800 bg-neutral-950">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Technical{" "}
                            <span className="text-neutral-500">
                                Proficiency
                            </span>
                        </h2>
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            I architect scalable digital solutions using a
                            robust, modern technology stack. From microservices
                            to pixel-perfect UIs.
                        </p>
                    </div>
                    {/* Decorative Line */}
                    <div className="hidden md:block h-px flex-1 bg-neutral-800 ml-12 relative top-[-10px]">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                </motion.div>

                {/* Main Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SKILL_CATEGORIES.map((category, index) => (
                        <BentoCard
                            key={index}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
