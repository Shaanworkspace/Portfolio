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
    <section className="w-full px-4 py-12 md:py-16 lg:py-20 bg-gradient-to-b from-black via-zinc-900 to-black border-t border-neutral-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-10 tracking-tight">
          Get in{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Address */}
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-900 p-6 md:p-7 rounded-2xl shadow-lg border border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-400"
            aria-label="Open address in Google Maps"
          >
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-fuchsia-400 text-xl md:text-2xl mr-3" />
              <h3 className="text-base md:text-lg font-bold text-white">
                Address
              </h3>
            </div>
            <p className="text-neutral-300 text-sm md:text-base">
              {CONTACT.address}
            </p>
            <p className="mt-3 text-xs md:text-sm text-fuchsia-400 underline group-hover:text-fuchsia-300">
              View on Google Maps
            </p>
          </a>

          {/* Phone */}
          <div className="group bg-neutral-900 p-6 md:p-7 rounded-2xl shadow-lg border border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-fuchsia-500 focus-within:ring-2 focus-within:ring-fuchsia-400">
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-fuchsia-400 text-xl md:text-2xl mr-3" />
              <h3 className="text-base md:text-lg font-bold text-white">
                Phone
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={`tel:${CONTACT.phoneNo}`}
                className="text-neutral-300 text-sm md:text-base hover:text-fuchsia-300 underline transition-colors"
                aria-label={`Call ${CONTACT.phoneNo}`}
              >
                {CONTACT.phoneNo}
              </a>
              <button
                className="p-1 rounded-full bg-neutral-800 hover:bg-fuchsia-600 transition-colors"
                title="Copy phone number"
                onClick={() => handleCopy(CONTACT.phoneNo, "phone")}
              >
                <FaCopy
                  className={`text-xs md:text-sm ${
                    copied.phone ? "text-green-400" : "text-neutral-400"
                  }`}
                />
              </button>
              {copied.phone && (
                <span className="text-xs text-green-400">Copied!</span>
              )}
            </div>
            <a
              href={`sms:${CONTACT.phoneNo}`}
              className="mt-3 inline-block text-xs md:text-sm text-fuchsia-400 underline hover:text-fuchsia-300 transition-colors"
              aria-label={`Send SMS to ${CONTACT.phoneNo}`}
            >
              Send SMS
            </a>
          </div>

          {/* Email */}
          <div className="group bg-neutral-900 p-6 md:p-7 rounded-2xl shadow-lg border border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-fuchsia-500 focus-within:ring-2 focus-within:ring-fuchsia-400">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-fuchsia-400 text-xl md:text-2xl mr-3" />
              <h3 className="text-base md:text-lg font-bold text-white">
                Email
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-neutral-300 text-sm md:text-base hover:text-fuchsia-300 underline transition-colors"
                aria-label={`Email ${CONTACT.email}`}
              >
                {CONTACT.email}
              </a>
              <button
                className="p-1 rounded-full bg-neutral-800 hover:bg-fuchsia-600 transition-colors"
                title="Copy email"
                onClick={() => handleCopy(CONTACT.email, "email")}
              >
                <FaCopy
                  className={`text-xs md:text-sm ${
                    copied.email ? "text-green-400" : "text-neutral-400"
                  }`}
                />
              </button>
              {copied.email && (
                <span className="text-xs text-green-400">Copied!</span>
              )}
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-3 inline-block text-xs md:text-sm text-fuchsia-400 underline hover:text-fuchsia-300 transition-colors"
              aria-label={`Send email to ${CONTACT.email}`}
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
