import React from 'react';
import { FaInstagram, FaGithub, FaTwitter, FaLinkedinIn, FaMedium } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const Header = () => {
    const socialLinks = [
        {
            icon: <FaInstagram className="text-2xl text-neutral-300 group-hover:text-purple-400 transition-colors duration-300" />,
            href: 'https://www.instagram.com/shaan.yadv', // Placeholder, replace with your actual Instagram
            label: 'Instagram',
        },
        {
            icon: <FaLinkedinIn className="text-2xl text-neutral-300 group-hover:text-purple-400 transition-colors duration-300" />,
            href: 'https://www.linkedin.com/in/shaanyadv/', // Placeholder, replace with your actual LinkedIn
            label: 'LinkedIn',
        },
        {
            icon: <FaGithub className="text-2xl text-neutral-300 group-hover:text-purple-400 transition-colors duration-300" />,
            href: 'https://github.com/Shaanworkspace',
            label: 'GitHub',
        },
        {
            icon: <FaXTwitter className="text-2xl text-neutral-300 group-hover:text-purple-400 transition-colors duration-300" />,
            href: 'https://x.com/ShaanYadav54660', // Placeholder, replace with your actual Twitter
            label: 'Twitter',
        },
        {
            icon: <FaMedium className="text-2xl text-neutral-300 group-hover:text-green-400 transition-colors duration-300" />,
            href: 'https://medium.com/@shaanyworkspace', // Replace with your actual Medium profile URL
            label: 'Medium',
        }
        ,
    ];
    return (
        <nav className={`flex mb-20 items-center justify-between py-6 `}>

            <div className='group'><a
                href="#home"
                className="font-extrabold text-3xl text-white transition-all duration-300 group-hover:text-purple-400 group-hover:-translate-y-1"
                aria-label="Shaan Yadav Portfolio Home"
            >
                Sh
            </a></div>

            <div className="flex  flex-shrink-0 items-center gap-4">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-2 rounded-full bg-neutral-800 border border-neutral-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-700"
                        aria-label={`Visit Shaan Yadav's ${link.label} profile`}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>


        </nav>
    );
};

export default Header;
