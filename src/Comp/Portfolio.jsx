import React from 'react';
import Header from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import AboutSection from "./AboutSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import SkillsSection from "./SkillsSection.jsx";
import ContactSection from "./ContactSection.jsx";
import { motion } from 'framer-motion';
import Footer from "./Footer.jsx";

export default function Portfolio() {
    return (
        <div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 opacity-20 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-indigo-300 to-purple-300 opacity-20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 z-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_70%)] z-0 pointer-events-none"></div>

            {/* Header */}
            <Header />

            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <AboutSection />

            {/* Projects Section */}
            <ProjectsSection />

            {/* Skills Section */}
            <SkillsSection />

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <Footer/>
        </div>
    );
}
