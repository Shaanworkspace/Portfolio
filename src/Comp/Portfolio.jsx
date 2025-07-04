import React, { lazy, Suspense, useEffect, useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { motion } from 'framer-motion';

// Lazy load sections
const HeroSection = lazy(() => import('./HeroSection.jsx'));
const AboutSection = lazy(() => import('./AboutSection.jsx'));
const SkillsSection = lazy(() => import('./SkillsSection.jsx'));
const Experience = lazy(() => import('./Experience.jsx'));
const ContactSection = lazy(() => import('./ContactSection.jsx'));

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0, y: 56 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', duration: 0.8, bounce: 0.2 }
    }
};

export default function Portfolio() {
    return (
        <div className="min-h-screen text-neutral-300 antialiased selection:bg-white/80 selection:rounded-2xl selection:text-black bg-neutral-950 relative overflow-x-hidden">

            {/* Background */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_85%_65%_at_50%_-8%,rgba(167,139,250,0.2),rgba(255,255,255,0))]" />
                <motion.div
                    className="absolute left-[8vw] top-[10vh] w-[240px] h-[240px] bg-gradient-to-br from-purple-600/30 via-fuchsia-400/20 to-blue-400/10 rounded-full blur-2xl will-change-transform"
                    animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute right-[10vw] top-[60vh] w-[200px] h-[200px] bg-gradient-to-tr from-fuchsia-400/20 via-pink-400/10 to-blue-300/10 rounded-full blur-2xl will-change-transform"
                    animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 2 }}
                />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-tr from-fuchsia-900/10 via-purple-600/10 to-cyan-300/10 rounded-full blur-[100px]" />
            </div>

            {/* Main container */}
            <div className="container mx-auto px-3 sm:px-6 md:px-10 xl:px-20 pt-24">

                <Header />

                {/* Hero Section */}
                <Suspense fallback={<FallbackSection name="Hero Section" />}>
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}  // Lower threshold so it appears immediately
                    >
                        <HeroSection />
                    </motion.div>
                </Suspense>

                {/* About Section */}
                <Suspense fallback={<FallbackSection name="About Section" />}>
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <AboutSection />
                    </motion.div>
                </Suspense>

                {/* Skills Section */}
                <Suspense fallback={<FallbackSection name="Skills Section" />}>
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <SkillsSection />
                    </motion.div>
                </Suspense>

                {/* Experience */}
                <Suspense fallback={<FallbackSection name="Experience Section" />}>
                    <Experience />
                </Suspense>

                {/* Contact */}
                <Suspense fallback={<FallbackSection name="Contact Section" />}>
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <ContactSection />
                    </motion.div>
                </Suspense>

                <Footer />
            </div>

            {/* Scroll To Top */}
            <ScrollToTopButton />
        </div>
    );
}

// Fallback component (visible even on dark backgrounds)
function FallbackSection({ name }) {
    return (
        <div className="w-full min-h-[150px] flex items-center justify-center bg-neutral-900/50 text-neutral-200">
            Loading {name}...
        </div>
    );
}

// Scroll-to-top button
function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > 320);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed z-50 bottom-8 right-7 p-3 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-600 to-blue-500 shadow-xl text-white transition-all hover:scale-110 hover:shadow-2xl focus:outline-none"
            aria-label="Scroll to top"
            style={{ pointerEvents: show ? 'auto' : 'none' }}
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </motion.button>
    );
}
