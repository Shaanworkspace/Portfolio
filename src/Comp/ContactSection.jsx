import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaCopy,
    FaCheck,
    FaArrowRight,
    FaLinkedin,
    FaGithub,
    FaTwitter,
} from "react-icons/fa";
import { CONTACT } from "../constants";

const ContactSection = () => {
    // State for copy feedback
    const [copied, setCopied] = useState(null);

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    const socialLinks = [
        {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/shaanyadv/",
            color: "hover:text-blue-500",
        },
        {
            icon: FaGithub,
            href: "https://github.com/Shaanworkspace",
            color: "hover:text-white",
        },
        {
            icon: FaTwitter,
            href: "https://x.com/ShaanYadav54660",
            color: "hover:text-sky-500",
        },
    ];

    return (
        <section
            id="contact"
            className="py-20 lg:py-32 relative overflow-hidden border-t border-neutral-800/50"
        >
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[128px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] -z-10" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* LEFT SIDE: The Pitch */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center lg:text-left"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Let's build something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                legendary.
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            I'm currently available for freelance projects and
                            open to full-time opportunities. If you have a
                            project that needs some creative & technical magic,
                            I'd love to hear about it.
                        </p>

                        {/* Social Proof / Quick Links */}
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                                Follow Me
                            </span>
                            <div className="h-px w-10 bg-neutral-800" />
                            <div className="flex gap-4">
                                {socialLinks.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`text-neutral-400 text-xl transition-colors duration-300 ${social.color}`}
                                    >
                                        <social.icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: The Action Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        {/* Email Card */}
                        <ContactCard
                            icon={FaEnvelope}
                            label="Email"
                            value={CONTACT.email}
                            action={() =>
                                (window.location.href = `mailto:${CONTACT.email}`)
                            }
                            onCopy={() => handleCopy(CONTACT.email, "email")}
                            isCopied={copied === "email"}
                            color="text-fuchsia-400"
                            btnText="Send Email"
                        />

                        {/* Phone Card */}
                        <ContactCard
                            icon={FaPhoneAlt}
                            label="Phone"
                            value={CONTACT.phoneNo}
                            action={() =>
                                (window.location.href = `tel:${CONTACT.phoneNo}`)
                            }
                            onCopy={() => handleCopy(CONTACT.phoneNo, "phone")}
                            isCopied={copied === "phone"}
                            color="text-green-400"
                            btnText="Call Now"
                        />

                        {/* Address Card */}
                        <ContactCard
                            icon={FaMapMarkerAlt}
                            label="Location"
                            value={CONTACT.address}
                            action={() =>
                                window.open(
                                    `https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`,
                                    "_blank",
                                )
                            }
                            color="text-blue-400"
                            btnText="View Map"
                            hideCopy={true}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- REUSABLE CARD COMPONENT ---
const ContactCard = ({
    icon: Icon,
    label,
    value,
    action,
    onCopy,
    isCopied,
    color,
    btnText,
    hideCopy,
}) => {
    return (
        <div className="group relative flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300">
            {/* Icon Box */}
            <div
                className={`flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}
            >
                <Icon size={20} />
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-0.5">
                    {label}
                </p>
                <p className="text-sm sm:text-base text-white font-medium truncate group-hover:text-purple-100 transition-colors">
                    {value}
                </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
                {/* Copy Button (if applicable) */}
                {!hideCopy && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onCopy();
                        }}
                        className="p-2 rounded-lg text-neutral-500 hover:bg-neutral-800 hover:text-white transition-colors"
                        title="Copy to clipboard"
                    >
                        {isCopied ? (
                            <FaCheck className="text-green-500" />
                        ) : (
                            <FaCopy />
                        )}
                    </button>
                )}

                {/* Primary Action Button */}
                <button
                    onClick={action}
                    className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 text-sm font-semibold text-white hover:bg-white hover:text-black transition-all group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                    {btnText} <FaArrowRight size={12} />
                </button>

                {/* Mobile Arrow (Replaces text button on small screens) */}
                <button
                    onClick={action}
                    className="sm:hidden p-2 text-neutral-400 hover:text-white"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default ContactSection;
