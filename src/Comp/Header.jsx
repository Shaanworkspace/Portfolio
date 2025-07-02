import React from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
    {
        icon: <FaInstagram className="text-neutral-300 text-xl md:text-2xl group-hover:text-pink-400 transition-colors duration-300" />,
        href: 'https://www.instagram.com/shaan.yadv',
        label: 'Instagram',
        brand: 'pink'
    },
    {
        icon: <FaLinkedinIn className="text-neutral-300 text-xl md:text-2xl group-hover:text-blue-400 transition-colors duration-300" />,
        href: 'https://www.linkedin.com/in/shaanyadv/',
        label: 'LinkedIn',
        brand: 'blue'
    },
    {
        icon: <FaGithub className="text-neutral-300 text-xl md:text-2xl group-hover:text-white transition-colors duration-300" />,
        href: 'https://github.com/Shaanworkspace',
        label: 'GitHub',
        brand: 'github'
    },
    {
        icon: <FaXTwitter className="text-neutral-300 text-xl md:text-2xl group-hover:text-sky-400 transition-colors duration-300" />,
        href: 'https://x.com/ShaanYadav54660',
        label: 'Twitter',
        brand: 'sky'
    },
    {
        icon: <FaMedium className="text-neutral-300 text-xl md:text-2xl group-hover:text-green-400 transition-colors duration-300" />,
        href: 'https://medium.com/@shaanyworkspace',
        label: 'Medium',
        brand: 'green'
    }
];

const Header = () => (
    <nav className="flex mb-20 items-center justify-between py-6 px-4 md:px-10 bg-gradient-to-b from-black/80 via-zinc-900/70 to-black/20 border-b border-zinc-800/60 shadow-lg sticky top-0 z-50">
        {/* Logo/Brand */}
        <a
            href="#home"
            className="relative group font-extrabold text-3xl md:text-4xl text-white tracking-tight transition-all duration-300
        hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-fuchsia-400 hover:to-cyan-400 hover:bg-clip-text
        hover:drop-shadow-lg"
            aria-label="Shaan Yadav Portfolio Home"
        >
            <span className="inline-block align-middle">SY</span>
            {/* Animated gradient ring */}
            <span
                aria-hidden
                className="absolute -inset-2 -z-10 rounded-full blur-[12px] opacity-0 group-hover:opacity-80 group-hover:animate-spin-slow
        bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-cyan-400 transition-all duration-700"
            />
        </a>

        {/* Social Icons */}
        <div className="flex flex-shrink-0 items-center gap-1 md:gap-4">
            {socialLinks.map((link, index) => (
                <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Shaan Yadav's ${link.label} profile`}
                    className={`
            group p-2 rounded-full border border-neutral-700 bg-neutral-900/70
            transition-all duration-300
            hover:-translate-y-2 hover:scale-110 hover:shadow-lg
            ${link.brand === 'pink' ? 'hover:shadow-pink-400/20' : ''}
            ${link.brand === 'blue' ? 'hover:shadow-blue-400/20' : ''}
            ${link.brand === 'sky' ? 'hover:shadow-sky-400/20' : ''}
            ${link.brand === 'green' ? 'hover:shadow-green-400/20' : ''}
            ${link.brand === 'github' ? 'hover:shadow-neutral-200/20' : ''}
            hover:border-transparent
          `}
                >
                    {link.icon}
                </a>
            ))}
        </div>
        {/* Custom animation */}
        <style>{`
      .animate-spin-slow {
        animation: spin 2.4s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
      }
    `}</style>
    </nav>
);

export default Header;