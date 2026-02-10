import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import {
    FaBriefcase,
    FaGraduationCap,
    FaAws,
    FaCertificate,
} from "react-icons/fa";

const WorkExperience = () => {
    // Helper to get styles based on experience type
    const getExperienceStyles = (role, company) => {
        if (role.includes("AWS")) {
            return {
                icon: FaAws,
                bgGlow: "bg-orange-500/20",
                border: "border-orange-500/30",
                text: "text-orange-400",
                dot: "bg-orange-500",
                shadow: "shadow-[0_0_20px_rgba(249,115,22,0.4)]",
            };
        } else if (role.includes("B.Tech") || role.includes("Student")) {
            return {
                icon: FaGraduationCap,
                bgGlow: "bg-blue-500/20",
                border: "border-blue-500/30",
                text: "text-blue-400",
                dot: "bg-blue-500",
                shadow: "shadow-[0_0_20px_rgba(59,130,246,0.4)]",
            };
        } else {
            return {
                icon: FaBriefcase,
                bgGlow: "bg-purple-500/20",
                border: "border-purple-500/30",
                text: "text-purple-400",
                dot: "bg-purple-500",
                shadow: "shadow-[0_0_20px_rgba(168,85,247,0.4)]",
            };
        }
    };

    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            {/* Atmospheric Background Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Professional{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                            Timeline
                        </span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        My path from a Computer Science student to a Certified
                        Developer, highlighting key milestones and
                        contributions.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* THE SPINE (Central Line) */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent md:hidden" />

                    <div className="space-y-12">
                        {EXPERIENCES.map((exp, index) => {
                            const isEven = index % 2 === 0;
                            const style = getExperienceStyles(
                                exp.role,
                                exp.company,
                            );
                            const Icon = style.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className={`relative flex items-center md:justify-between ${
                                        isEven ? "md:flex-row-reverse" : ""
                                    }`}
                                >
                                    {/* SPACER for Desktop */}
                                    <div className="hidden md:block w-5/12" />

                                    {/* THE NODE (Central Dot) */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                                        <div className="relative flex items-center justify-center">
                                            {/* Ping Animation Ring (Color Coded) */}
                                            <div
                                                className={`absolute w-12 h-12 rounded-full animate-ping opacity-75 ${style.bgGlow}`}
                                            />
                                            {/* Solid Ring */}
                                            <div
                                                className={`relative w-12 h-12 bg-neutral-950 border-2 rounded-full flex items-center justify-center ${style.shadow} ${style.dot.replace("bg-", "border-")}`}
                                            >
                                                <Icon
                                                    className={`${style.text} text-lg`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* CONTENT CARD */}
                                    <div className="w-full md:w-5/12 pl-20 md:pl-0">
                                        <div
                                            className={`
                                                relative p-6 rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-sm 
                                                hover:bg-neutral-900/60 transition-all duration-300 group
                                                ${isEven ? "md:text-left" : "md:text-left"}
                                                hover:border-opacity-50
                                            `}
                                            style={{
                                                borderColor:
                                                    "rgba(255,255,255,0.1)",
                                            }}
                                        >
                                            {/* Hover Border Color Hack */}
                                            <div
                                                className={`absolute inset-0 rounded-2xl border transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${style.border}`}
                                            />

                                            {/* Date Badge */}
                                            <div className="mb-3 relative z-10">
                                                <span
                                                    className={`inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full border bg-opacity-20 border-opacity-20 ${style.bgGlow} ${style.text} ${style.border}`}
                                                >
                                                    {exp.year}
                                                </span>
                                            </div>

                                            {/* Title & Company */}
                                            <h3
                                                className={`text-xl md:text-2xl font-bold text-white mb-1 transition-colors relative z-10 group-hover:${style.text}`}
                                            >
                                                {exp.role}
                                            </h3>
                                            <h4 className="text-base font-medium text-neutral-400 mb-4 flex items-center gap-2 relative z-10">
                                                <span
                                                    className={`w-1.5 h-1.5 rounded-full inline-block ${style.dot}`}
                                                />
                                                {exp.company}
                                            </h4>

                                            {/* Description */}
                                            <p className="text-sm md:text-base text-neutral-300 leading-relaxed mb-6 relative z-10">
                                                {exp.description}
                                            </p>

                                            {/* Tech Stack Tags */}
                                            <div className="flex flex-wrap gap-2 relative z-10">
                                                {exp.technologies.map(
                                                    (tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2.5 py-1 text-xs font-medium text-neutral-400 bg-black/50 rounded-md border border-neutral-800 group-hover:border-neutral-700 group-hover:text-neutral-300 transition-colors"
                                                        >
                                                            #{tech}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
