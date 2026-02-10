import React from "react";
import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CONTACT } from "../constants";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-neutral-950 pt-20 pb-10 border-t border-neutral-800 overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* TOP SECTION: CTA & BRANDING */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Shaan<span className="text-purple-500">.</span>dev
                        </h2>
                        <p className="text-neutral-400 max-w-sm text-lg">
                            Crafting scalable digital experiences with Java,
                            Spring Boot, and Modern Web Technologies.
                        </p>

                        {/* Live Status Indicator */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/20 border border-green-500/30 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-medium text-green-400">
                                Available for new projects
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 md:pl-20">
                        {/* Sitemap */}
                        <div>
                            <h3 className="text-white font-bold mb-4">
                                Sitemap
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "About",
                                    "Projects",
                                    "Experience",
                                    "Contact",
                                ].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className="text-neutral-500 hover:text-purple-400 transition-colors text-sm"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Socials */}
                        <div>
                            <h3 className="text-white font-bold mb-4">
                                Socials
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="https://github.com/Shaanworkspace"
                                        className="text-neutral-500 hover:text-white transition-colors text-sm flex items-center gap-2"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/shaanyadv/"
                                        className="text-neutral-500 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                                    >
                                        <FaLinkedinIn /> LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://x.com/ShaanYadav54660"
                                        className="text-neutral-500 hover:text-sky-400 transition-colors text-sm flex items-center gap-2"
                                    >
                                        <FaXTwitter /> Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION: Copyright & Tech Stack */}
                <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-600 text-sm">
                        © {currentYear} Shaan Yadav. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <p className="text-neutral-600 text-xs hidden sm:block">
                            Built with{" "}
                            <span className="text-neutral-400">
                                React & Tailwind
                            </span>
                        </p>

                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm"
                        >
                            Back to Top
                            <span className="p-2 bg-neutral-900 rounded-full group-hover:bg-neutral-800 transition-colors">
                                <FaArrowUp size={10} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
