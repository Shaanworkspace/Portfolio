import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaLock,
    FaAws,
    FaDocker,
} from "react-icons/fa";
import { SiSpringboot, SiOracle, SiRabbitmq, SiRedis } from "react-icons/si";

const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    // Separate the "Latest" project from the archive
    const latestProject = PROJECTS.find((p) => p.isLatest);
    const otherProjects = showAll
        ? PROJECTS.filter((p) => !p.isLatest)
        : PROJECTS.filter((p) => !p.isLatest).slice(0, 4);

    return (
        <section id="projects" className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Work
                        </span>
                    </h2>
                    <p className="text-neutral-400">
                        Production-grade applications and microservices.
                    </p>
                </motion.div>

                {/* --- FLAGSHIP PROJECT (AyurSutra) --- */}
                {latestProject && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-20 relative group"
                    >
                        {/* Glow Effect behind the card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                        <div className="relative grid lg:grid-cols-2 gap-8 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden">
                            {/* Left: Image & Browser Bar */}
                            <div className="flex flex-col gap-4">
                                {/* Authentic Browser Bar */}
                                <div className="flex items-center gap-3 px-4 py-2 bg-neutral-900/80 rounded-full border border-neutral-800 w-fit backdrop-blur-md z-10">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-black/50 rounded-md border border-neutral-800">
                                        <FaLock className="text-green-500 text-[10px]" />
                                        <a
                                            href={latestProject.liveDemo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-xs font-mono text-green-400 hover:underline tracking-wide"
                                        >
                                            www.ayursutra.me
                                        </a>
                                    </div>
                                </div>

                                {/* Main Image */}
                                <div className="relative rounded-xl overflow-hidden border border-neutral-800 aspect-video group-hover:border-purple-500/30 transition-colors">
                                    <img
                                        src={latestProject.photo} // Ensure this points to project-5.png in constants
                                        alt={latestProject.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full shadow-lg shadow-purple-900/50">
                                            LATEST DEPLOYMENT
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Technical Details */}
                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    {latestProject.title}
                                </h3>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-6">
                                    {latestProject.description}
                                </p>

                                {/* Infrastructure Highlight */}
                                <div className="mb-6 p-4 bg-neutral-900/30 rounded-xl border border-white/5">
                                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                                        Cloud Infrastructure
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-neutral-300">
                                        <div
                                            className="flex items-center gap-2"
                                            title="Oracle Cloud"
                                        >
                                            <SiOracle className="text-[#F80000] text-xl" />
                                            <span className="text-sm font-medium">
                                                Oracle Cloud
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            title="AWS Lambda"
                                        >
                                            <FaAws className="text-[#FF9900] text-xl" />
                                            <span className="text-sm font-medium">
                                                AWS Lambda
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            title="Docker"
                                        >
                                            <FaDocker className="text-[#2496ED] text-xl" />
                                            <span className="text-sm font-medium">
                                                Docker
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-2"
                                            title="RabbitMQ"
                                        >
                                            <SiRabbitmq className="text-[#FF6600] text-xl" />
                                            <span className="text-sm font-medium">
                                                RabbitMQ
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={latestProject.liveDemo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-2"
                                    >
                                        <FaExternalLinkAlt /> Visit Live Site
                                    </a>
                                    <div className="flex gap-2">
                                        <a
                                            href={latestProject.backendLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-5 py-3 border border-neutral-700 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors flex items-center gap-2"
                                        >
                                            <FaGithub /> Backend
                                        </a>
                                        <a
                                            href={latestProject.frontendLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-5 py-3 border border-neutral-700 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors flex items-center gap-2"
                                        >
                                            Frontend
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* --- ARCHIVE GRID (Other Projects) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.photo}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.technologies
                                        .slice(0, 4)
                                        .map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs text-neutral-500 bg-neutral-950 px-2 py-1 rounded border border-neutral-800"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                </div>

                                <div className="flex gap-4 border-t border-neutral-800 pt-4">
                                    {project.liveDemo && (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm text-white hover:text-purple-400 flex items-center gap-1"
                                        >
                                            <FaExternalLinkAlt size={12} /> Live
                                        </a>
                                    )}
                                    {project.frontendLink && (
                                        <a
                                            href={project.frontendLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm text-neutral-400 hover:text-white flex items-center gap-1"
                                        >
                                            <FaGithub size={14} /> Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {PROJECTS.filter((p) => !p.isLatest).length > 4 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-3 rounded-full bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition-colors border border-neutral-700"
                        >
                            {showAll ? "Show Less" : "View Archive"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
