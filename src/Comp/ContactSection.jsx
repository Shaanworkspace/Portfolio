import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCopy } from 'react-icons/fa';
import { CONTACT } from '../constants';
import { useState } from 'react';

const ContactSection = () => {
    const [copied, setCopied] = useState({ phone: false, email: false });

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied({ ...copied, [type]: true });
        setTimeout(() => setCopied({ ...copied, [type]: false }), 1200);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-extrabold text-white text-center mb-10 tracking-tight">
                Get in <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {/* Address */}
                <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-neutral-900 p-7 rounded-2xl shadow-xl border border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-400"
                    aria-label="Open address in Google Maps"
                >
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-fuchsia-400 text-2xl mr-3" />
                        <h3 className="text-lg font-bold text-white">Address</h3>
                    </div>
                    <p className="text-neutral-300 text-sm">{CONTACT.address}</p>
                    <p className="mt-3 text-xs text-fuchsia-400 underline group-hover:text-fuchsia-300">View on Google Maps</p>
                </a>

                {/* Phone Number + copy/call */}
                <div className="group bg-neutral-900 p-7 rounded-2xl shadow-xl border border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-fuchsia-500 focus-within:ring-2 focus-within:ring-fuchsia-400">
                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="text-fuchsia-400 text-2xl mr-3" />
                        <h3 className="text-lg font-bold text-white">Phone</h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href={`tel:${CONTACT.phoneNo}`}
                            className="text-neutral-300 text-sm hover:text-fuchsia-300 underline transition-colors"
                            aria-label={`Call ${CONTACT.phoneNo}`}
                        >
                            {CONTACT.phoneNo}
                        </a>
                        <button
                            className="ml-2 p-1 rounded-full bg-neutral-800 hover:bg-fuchsia-600 group transition-colors"
                            title="Copy phone number"
                            onClick={() => handleCopy(CONTACT.phoneNo, 'phone')}
                        >
                            <FaCopy className={`text-xs ${copied.phone ? "text-green-400" : "text-neutral-400"}`} />
                        </button>
                        {copied.phone && (
                            <span className="ml-2 text-xs text-green-400">Copied!</span>
                        )}
                    </div>
                    <a
                        href={`sms:${CONTACT.phoneNo}`}
                        className="mt-3 inline-block text-xs text-fuchsia-400 underline hover:text-fuchsia-300 transition-colors"
                        aria-label={`Send SMS to ${CONTACT.phoneNo}`}
                    >
                        Send SMS
                    </a>
                </div>

                {/* Email + copy/send */}
                <div className="group bg-neutral-900 p-7 rounded-2xl shadow-xl border border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-fuchsia-500 focus-within:ring-2 focus-within:ring-fuchsia-400">
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="text-fuchsia-400 text-2xl mr-3" />
                        <h3 className="text-lg font-bold text-white">Email</h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href={`mailto:${CONTACT.email}`}
                            className="text-neutral-300 text-sm hover:text-fuchsia-300 underline transition-colors"
                            aria-label={`Send email to ${CONTACT.email}`}
                        >
                            {CONTACT.email}
                        </a>
                        <button
                            className="ml-2 p-1 rounded-full bg-neutral-800 hover:bg-fuchsia-600 group transition-colors"
                            title="Copy email"
                            onClick={() => handleCopy(CONTACT.email, 'email')}
                        >
                            <FaCopy className={`text-xs ${copied.email ? "text-green-400" : "text-neutral-400"}`} />
                        </button>
                        {copied.email && (
                            <span className="ml-2 text-xs text-green-400">Copied!</span>
                        )}
                    </div>
                    <a
                        href={`mailto:${CONTACT.email}`}
                        className="mt-3 inline-block text-xs text-fuchsia-400 underline hover:text-fuchsia-300 transition-colors"
                        aria-label={`Email ${CONTACT.email}`}
                    >
                        Send Email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;