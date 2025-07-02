import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaMedium } from 'react-icons/fa';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const itemVariants = {
  initial: { y: 0 },
  hover: {
    y: -5,
    color: '#A21CAF', // fuchsia-700 for a premium look
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  animate: {
    y: [0, -3, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
};

const socialVariants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -10,
    scale: 1.16,
    boxShadow: '0 0 18px 0 rgba(168,85,247,0.18)',
    borderColor: '#A21CAF',
    transition: { duration: 0.28, ease: 'easeOut' },
  },
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-black via-zinc-950 to-black pt-16 pb-10 px-4 text-neutral-300 shadow-inner border-t border-neutral-800/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
        {/* Contact Info */}
        <div className="flex-1 mb-8 md:mb-0 space-y-5">
          <h3 className="text-2xl font-extrabold text-white mb-6 tracking-tight">Contact <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Me</span></h3>
          {[
            { Icon: FaMapMarkerAlt, href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`, text: CONTACT.address },
            { Icon: FaPhoneAlt, href: `tel:${CONTACT.phoneNo}`, text: CONTACT.phoneNo },
            { Icon: FaEnvelope, href: `mailto:${CONTACT.email}`, text: CONTACT.email },
          ].map(({ Icon, href, text }, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 text-neutral-400 hover:text-fuchsia-400 transition-colors"
              variants={itemVariants}
              initial="initial"
              whileHover="hover"
              animate="animate"
              transition={{ delay: index * 0.08 }}
            >
              <Icon className="text-fuchsia-400 text-xl" />
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-base font-medium">
                {text}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h3 className="text-2xl font-extrabold text-white mb-6 tracking-tight">Quick <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Links</span></h3>
          <ul className="space-y-3">
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
                transition={{ delay: index * 0.08 }}
              >
                <a href={link.href} className="text-base flex items-center font-medium hover:text-fuchsia-400 transition-colors">
                  <span className="mr-2 text-fuchsia-400">→</span>
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1 flex flex-col items-center md:items-end">
          <h3 className="text-2xl font-extrabold text-white mb-6 tracking-tight">Connect</h3>
          <div className="flex gap-5 mb-6">
            {[
              { Icon: FaGithub, href: 'https://github.com/Shaanworkspace', color: 'text-white' },
              { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/shaanyadv/', color: 'text-blue-400' },
              { Icon: FaMedium, href: 'https://medium.com/@shaanyworkspace', color: 'text-green-400' },
            ].map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border-2 border-neutral-700 bg-neutral-900/70 transition-all ${color} hover:bg-zinc-900 hover:border-fuchsia-400`}
                variants={socialVariants}
                initial="initial"
                whileHover="hover"
                animate="animate"
                transition={{ delay: index * 0.1 }}
                aria-label={`Visit Shaan Yadav's social profile`}
              >
                <Icon className="text-2xl" />
              </motion.a>
            ))}
          </div>
          {/* Subtle call-to-action */}
          <p className="text-sm text-neutral-400 mt-2">Let’s connect & build something <span className="text-fuchsia-400">amazing</span>!</p>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto my-8">
        <hr className="border-neutral-800" />
      </div>
      {/* Copyright */}
      <div className="max-w-6xl mx-auto text-center text-sm text-neutral-400">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-fuchsia-400">Shaan Yadav</span>. All rights reserved.
        </p>
        <p className="mt-1">
          Built with <span className="text-fuchsia-400 font-semibold">ReactJS & Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;