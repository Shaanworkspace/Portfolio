import React from "react";
import { HERO_CONTENT } from "../constants";
import shaanPhoto from "../assets/shaanProfilePhoto.jpg";
import resumeFile from "../assets/projects/ShaanResume_Spring_new.pdf";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

const HeroSection = () => {
    return (
        // Added 'group' class here so the hover effect works on the entire section
        <div className="group border-b border-neutral-800 pb-16 lg:mb-32 mt-10 lg:mt-24">
            <div className="flex flex-wrap flex-col-reverse lg:flex-row items-center">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 p-4 lg:pr-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <span className="px-3 py-1 mb-4 text-xs font-medium tracking-wide text-purple-400 bg-purple-900/10 rounded-full border border-purple-500/20">
                            AVAILABLE FOR HIRE
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 text-center lg:text-left">
                            Shaan Yadav
                        </h1>
                        <h2 className="text-2xl lg:text-3xl font-light text-neutral-400 mb-6 text-center lg:text-left">
                            Full Stack{" "}
                            <span className="text-purple-500 font-normal transition-colors duration-500 group-hover:text-cyan-400">
                                Java Developer
                            </span>
                        </h2>
                        <p className="max-w-xl text-neutral-300 text-lg leading-relaxed text-center lg:text-left mb-8">
                            {HERO_CONTENT}
                        </p>

                        <div className="flex gap-4">
                            <a
                                href={resumeFile}
                                download="Shaan_Yadav_Resume.pdf"
                                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors"
                            >
                                <FaFileDownload /> Resume
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 border border-neutral-700 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors"
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 p-4 lg:p-8 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Abstract Background Element - Brightens on section hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-30 transform rotate-6 transition-opacity duration-700 group-hover:opacity-60"></div>

                        <img
                            src={shaanPhoto}
                            alt="Shaan Yadav"
                            // group-hover:grayscale-0 reacts to the top-level div
                            className="relative z-10 w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-2xl border-2 border-neutral-800 shadow-2xl grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
