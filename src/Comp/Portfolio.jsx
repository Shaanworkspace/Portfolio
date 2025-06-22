import React from 'react';
import Header from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import AboutSection from "./AboutSection.jsx";
import SkillsSection from "./SkillsSection.jsx";
import ContactSection from "./ContactSection.jsx";
import { motion } from 'framer-motion';
import Footer from "./Footer.jsx";
import Experience from './Experience.jsx';

export default function Portfolio() {
    return (
        <div className='min-h-screen text-neutral-300 antialiased selection:bg-white/80 selection:rounded-4xl selection:text-black'>
            <div className='fixed h-full w-full top-0 -z-10' >
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>

            {/* Header */}
            <div className='container mx-auto px-8'>
                <Header />

                {/* Hero Section */}
                <HeroSection />

                {/* About Section */}
                <AboutSection />

                {/* Skills Section */}
                <SkillsSection />
                <Experience />
                {/* Experience */}

                {/* Contact Section */}
                <ContactSection />
                {/* Footer */}
                <Footer />
            </div>



            {/* Projects Section */}
            {/* <ProjectsSection /> */}


        </div>
    );
}
