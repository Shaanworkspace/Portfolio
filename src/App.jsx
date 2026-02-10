import React, { lazy, Suspense } from "react";
import Header from "./Comp/Header.jsx";
import Footer from "./Comp/Footer.jsx";
import { motion } from "framer-motion";

// Lazy load sections for performance
const HeroSection = lazy(() => import("./Comp/HeroSection.jsx"));
const AboutSection = lazy(() => import("./Comp/AboutSection.jsx"));
const SkillsSection = lazy(() => import("./Comp/SkillsSection.jsx"));
const WorkExperience = lazy(() => import("./Comp/WorkExperience.jsx")); // Renamed Timeline
const Projects = lazy(() => import("./Comp/Projects.jsx")); // Renamed Grid
const ContactSection = lazy(() => import("./Comp/ContactSection.jsx"));

export default function App() {
    return (
        <div className="min-h-screen antialiased bg-neutral-950 text-neutral-300 relative selection:bg-purple-500/30 selection:text-white">
            {/* Professional Grid Background */}
            <div className="fixed inset-0 z-[-1] bg-neutral-950 bg-grid-pattern opacity-100">
                {/* Subtle Vignette */}
                <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl pt-24">
                <Header />

                <Suspense
                    fallback={
                        <div className="h-screen flex items-center justify-center">
                            Loading...
                        </div>
                    }
                >
                    <HeroSection />

                    <div className="space-y-32">
                        {" "}
                        {/* Increased spacing for breathing room */}
                        <AboutSection />
                        <SkillsSection />
                        <WorkExperience /> {/* The Timeline */}
                        <Projects /> {/* The Grid */}
                        <ContactSection />
                    </div>
                </Suspense>

                <Footer />
            </div>
        </div>
    );
}
