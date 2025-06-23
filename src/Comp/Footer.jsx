import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaMedium } from 'react-icons/fa';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Footer = () => {
    // Animation variants for contact and link items
    const itemVariants = {
        initial: { y: 0 },
        hover: {
            y: -5,
            color: '#C084FC', // purple-400
            transition: { duration: 0.3, ease: 'easeOut' },
        },
        animate: {
            y: [0, -5, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
            },
        },
    };

    // Animation variants for social icons
    const socialVariants = {
        initial: { y: 0, scale: 1 },
        hover: {
            y: -8,
            scale: 1.1,
            boxShadow: '0 0 15px rgba(192, 132, 252, 0.3)',
            borderColor: '#C084FC',
            transition: { duration: 0.3, ease: 'easeOut' },
        },
        animate: {
            y: [0, -5, 0],
            transition: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
            },
        },
    };

    return (
        <footer className="bg-neutral-950 text-neutral-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4">Contact Me</h3>
                        {[
                            { Icon: FaMapMarkerAlt, href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`, text: CONTACT.address },
                            { Icon: FaPhoneAlt, href: `tel:${CONTACT.phoneNo}`, text: CONTACT.phoneNo },
                            { Icon: FaEnvelope, href: `mailto:${CONTACT.email}`, text: CONTACT.email },
                        ].map(({ Icon, href, text }, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center"
                                variants={itemVariants}
                                initial="initial"
                                whileHover="hover"
                                animate="animate"
                                transition={{ delay: index * 0.1 }}
                            >
                                <Icon className="text-purple-400 text-lg mr-3" />
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm"
                                >
                                    {text}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                    <div className='flex justify-between '>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: 'Home', href: '#home' },
                                    { name: 'About', href: '#about' },
                                    { name: 'Projects', href: '#projects' },
                                    { name: 'Experience', href: '#experience' },
                                ].map((link, index) => (
                                    <motion.li
                                        key={index}
                                        variants={itemVariants}
                                        initial="initial"
                                        whileHover="hover"
                                        animate="animate"
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <a
                                            href={link.href}
                                            className="text-sm flex items-center"
                                        >
                                            <span className="mr-2">→</span>
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
                            <div className="flex space-x-4">
                                {[
                                    { Icon: FaGithub, href: 'https://github.com/Shaanworkspace' },
                                    { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/shaanyadv/' },
                                    { Icon: FaMedium, href: 'https://medium.com/@shaanyworkspace' },
                                ].map(({ Icon, href }, index) => (
                                    <motion.a
                                        key={index}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-neutral-800 border border-neutral-700"
                                        variants={socialVariants}
                                        initial="initial"
                                        whileHover="hover"
                                        animate="animate"
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Icon className="text-2xl text-blue-500 rounded-full" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-neutral-800" />

                {/* Copyright */}
                <div className="text-center text-sm text-neutral-400">
                    <p>© {new Date().getFullYear()} Shaan Yadav. All rights reserved.</p>
                    <p className="mt-1">
                        Built with <span className="text-purple-400">ReactJS & Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;