import React from 'react';
import Header from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import AboutSection from "./AboutSection.jsx";
import SkillsSection from "./SkillsSection.jsx";
import ContactSection from "./ContactSection.jsx";
import { motion } from 'framer-motion';
import Footer from "./Footer.jsx";
import Experience from './Experience.jsx';

// Section fade-in animation
const sectionVariants = {
    hidden: { opacity: 0, y: 56 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", duration: 1, bounce: 0.18 }
    }
};

export default function Portfolio() {
    return (
        <div className="min-h-screen text-neutral-300 antialiased selection:bg-white/80 selection:rounded-2xl selection:text-black bg-neutral-950 relative overflow-x-hidden">
            {/* Decorative Animated Background */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                {/* Radial gradient dark base */}
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_85%_65%_at_50%_-8%,rgba(167,139,250,0.23),rgba(255,255,255,0))]" />
                {/* Animated color blobs */}
                <motion.div
                    className="absolute left-[8vw] top-[10vh] w-[330px] h-[330px] bg-gradient-to-br from-purple-600/40 via-fuchsia-400/30 to-blue-400/20 rounded-full blur-3xl"
                    animate={{ y: [0, 40, 0], x: [0, 24, 0] }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute right-[10vw] top-[64vh] w-[260px] h-[220px] bg-gradient-to-tr from-fuchsia-400/30 via-pink-400/20 to-blue-300/20 rounded-full blur-3xl"
                    animate={{ y: [0, -26, 0], x: [0, -18, 0] }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 2.2 }}
                />
                {/* Subtle center glow */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-gradient-to-tr from-fuchsia-900/10 via-purple-600/10 to-cyan-300/10 rounded-full blur-[110px]" />
            </div>

            {/* Main container */}
            <div className="container mx-auto px-3 sm:px-6 md:px-10 xl:px-20">
                {/* Header */}
                <Header />

                {/* Hero Section */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <HeroSection />
                </motion.div>

                {/* About Section */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                >
                    <AboutSection />
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <SkillsSection />
                </motion.div>

                {/* Experience (Projects) Section */}
  
                    <Experience className="z-10"/>
                

                {/* Contact Section */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                >
                    <ContactSection />
                </motion.div>

                {/* Footer */}
                <Footer />
            </div>

            {/* Scroll to top button (optional, but impressive) */}
            <ScrollToTopButton />
        </div>
    );
}

// Floating scroll-to-top button
function ScrollToTopButton() {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
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