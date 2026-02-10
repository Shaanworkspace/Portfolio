import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaInstagram,
    FaGithub,
    FaLinkedinIn,
    FaMedium,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle Scroll Effect
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Work", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/Shaanworkspace" },
        {
            icon: <FaLinkedinIn />,
            href: "https://www.linkedin.com/in/shaanyadv/",
        },
        { icon: <FaXTwitter />, href: "https://x.com/ShaanYadav54660" },
    ];

    return (
        <nav
            className={`
                fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b
                ${
                    scrolled
                        ? "bg-neutral-950/80 backdrop-blur-md border-neutral-800 py-3"
                        : "bg-transparent border-transparent py-5"
                }
            `}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* 1. LOGO */}
                <a href="#" className="relative z-50 group">
                    <span className="text-2xl font-bold tracking-tighter text-white">
                        Shaan<span className="text-purple-500">.</span>dev
                    </span>
                </a>

                {/* 2. DESKTOP NAVIGATION */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* 3. DESKTOP SOCIALS & CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex gap-3 pr-4 border-r border-neutral-800">
                        {socialLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-neutral-400 hover:text-white hover:scale-110 transition-all"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <a
                        href="#contact"
                        className="px-4 py-2 text-sm font-semibold bg-white text-black rounded-full hover:bg-neutral-200 transition-colors"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* 4. MOBILE HAMBURGER */}
                <button
                    className="md:hidden relative z-50 text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <FaTimes size={24} />
                    ) : (
                        <FaBars size={24} />
                    )}
                </button>

                {/* 5. MOBILE MENU OVERLAY */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 w-full bg-neutral-950 border-b border-neutral-800 p-6 pt-24 shadow-2xl md:hidden flex flex-col gap-6"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-xl font-bold text-neutral-300 hover:text-white"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-6 mt-4 pt-6 border-t border-neutral-800">
                                {socialLinks.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.href}
                                        className="text-2xl text-neutral-400 hover:text-white"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Header;
