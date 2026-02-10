import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { FaCode, FaProjectDiagram, FaLayerGroup } from "react-icons/fa";

const AboutSection = () => {
    // Stats Data configuration
    const stats = [
        { number: "2+", label: "Years Experience", icon: FaCode },
        { number: "10+", label: "Projects Completed", icon: FaProjectDiagram },
        { number: "15+", label: "Tech Stack", icon: FaLayerGroup }, // Updated numbers to look realistic
    ];

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* Subtle Background Element */}
            <div className="absolute top-0 right-0 -z-10 opacity-20 overflow-hidden pointer-events-none">
                <div className="w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Column - "The Architect Look" */}
                    <motion.div
                        className="w-full lg:w-2/5 relative group"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Decorative Frame */}
                        <div className="absolute -inset-4 border border-neutral-800 rounded-2xl z-0 hidden lg:block" />

                        <div className="relative z-10 rounded-xl overflow-hidden bg-neutral-900 aspect-[4/5] border border-neutral-800">
                            <img
                                src={aboutImage}
                                alt="Shaan Yadav"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                            />
                            {/* Overlay Gradient for text readability if needed, mostly for style */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 bg-neutral-900 border border-neutral-800 p-4 rounded-xl shadow-2xl hidden lg:block"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <p className="text-sm font-medium text-neutral-400">
                                Current Focus
                            </p>
                            <p className="text-white font-bold">
                                Microservices & AI
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        className="w-full lg:w-3/5"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                            Beyond the{" "}
                            <span className="text-purple-500">Code</span>
                        </h2>

                        <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                            {/* We split the text for better readability if it's long, or keep it as one block */}
                            <p className="border-l-2 border-purple-500/50 pl-6">
                                {ABOUT_TEXT}
                            </p>

                            <p>
                                I don't just write code; I architect solutions.
                                My approach combines technical depth in
                                <span className="text-white font-medium">
                                    {" "}
                                    Java & Spring Boot
                                </span>{" "}
                                with the creative versatility of
                                <span className="text-white font-medium">
                                    {" "}
                                    React
                                </span>
                                .
                            </p>
                        </div>

                        {/* Stats Grid - "The Dashboard Look" */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/30 transition-colors group"
                                    whileHover={{ y: -5 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <stat.icon className="text-purple-500 mb-3 text-xl group-hover:scale-110 transition-transform" />
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {stat.number}
                                    </h3>
                                    <p className="text-sm text-neutral-500 font-medium">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
