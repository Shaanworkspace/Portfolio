import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { CONTACT } from '../constants';

const ContactSection = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
                Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Address */}
                <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-neutral-900 p-6 rounded-2xl shadow-lg border border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-700"
                >
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-purple-400 text-2xl mr-3" />
                        <h3 className="text-lg font-semibold text-white">Address</h3>
                    </div>
                    <p className="text-neutral-300 text-sm">{CONTACT.address}</p>
                </a>

                {/* Phone Number */}
                <a
                    href={`tel:${CONTACT.phoneNo}`}
                    className="group bg-neutral-900 p-6 rounded-2xl shadow-lg border border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-700"
                >
                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="text-purple-400 text-2xl mr-3" />
                        <h3 className="text-lg font-semibold text-white">Phone</h3>
                    </div>
                    <p className="text-neutral-300 text-sm">{CONTACT.phoneNo}</p>
                </a>

                {/* Email */}
                <a
                    href={`mailto:${CONTACT.email}`}
                    className="group bg-neutral-900 p-6 rounded-2xl shadow-lg border border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-700"
                >
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="text-purple-400 text-2xl mr-3" />
                        <h3 className="text-lg font-semibold text-white">Email</h3>
                    </div>
                    <p className="text-neutral-300 text-sm">{CONTACT.email}</p>
                </a>
            </div>
        </div>
    );
};

export default ContactSection;