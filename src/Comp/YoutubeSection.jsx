import React from "react";
import { motion } from "framer-motion";
import { YOUTUBE } from "../constants";
import {
    FaYoutube,
    FaPlay,
    FaUsers,
    FaVideo,
    FaFire,
    FaArrowRight,
} from "react-icons/fa";

const YoutubeSection = () => {
    const { handle, channelUrl, tagline, subscribers, videos, playlists, featured } =
        YOUTUBE;

    const stats = [
        { icon: FaUsers, value: subscribers, label: "Subscribers" },
        { icon: FaVideo, value: videos, label: "Videos Published" },
        { icon: FaFire, value: "Top 6%", label: "Watch Time" },
    ];

    return (
        <section
            id="youtube"
            className="py-24 px-4 md:px-8 relative border-y border-neutral-800/50 bg-neutral-950 overflow-hidden"
        >
            {/* Ambient YouTube-red glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[130px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[130px] -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-medium tracking-wide text-red-400 bg-red-900/10 rounded-full border border-red-500/20">
                            <FaYoutube /> CONTENT CREATION
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Teaching Beyond{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
                                the Code
                            </span>
                        </h2>
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            I don't just build systems — I break them down for
                            the community. On <span className="text-white font-medium">YouTube</span>,
                            I simplify DSA, System Design, and Java backend
                            engineering for thousands of developers.
                        </p>
                    </div>
                    <a
                        href={channelUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold transition-colors"
                    >
                        <FaYoutube /> Subscribe
                    </a>
                </motion.div>

                {/* Channel Card + Stats */}
                <div className="grid lg:grid-cols-3 gap-6 mb-12">
                    {/* Channel Identity Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 relative p-8 rounded-3xl bg-gradient-to-br from-red-950/30 to-neutral-900/40 border border-red-500/20 overflow-hidden group"
                    >
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl group-hover:bg-red-600/30 transition-colors" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center mb-5 shadow-lg shadow-red-900/40">
                                <FaYoutube className="text-white text-3xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                                Shaan Labs
                            </h3>
                            <p className="text-red-400 font-medium mb-3">
                                {handle}
                            </p>
                            <p className="text-sm text-neutral-400 leading-relaxed">
                                {tagline}
                            </p>
                            <a
                                href={channelUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-red-300 transition-colors"
                            >
                                Visit Channel <FaArrowRight size={12} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-red-500/30 transition-colors flex flex-col justify-center"
                            >
                                <stat.icon className="text-red-500 text-2xl mb-3" />
                                <h4 className="text-3xl font-bold text-white">
                                    {stat.value}
                                </h4>
                                <p className="text-sm text-neutral-500 font-medium">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Playlists */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-white mb-5">
                        Featured Playlists
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {playlists.map((pl, i) => (
                            <motion.a
                                key={i}
                                href={channelUrl}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className="group p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-red-500/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-8 h-8 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center text-xs font-bold">
                                        {i + 1}
                                    </span>
                                    <h4 className="text-white font-semibold group-hover:text-red-300 transition-colors">
                                        {pl.title}
                                    </h4>
                                </div>
                                <p className="text-sm text-neutral-500 mb-3">
                                    {pl.desc}
                                </p>
                                <span className="text-xs font-mono text-neutral-600 uppercase tracking-wider">
                                    {pl.count}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Featured Videos */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-5">
                        Latest Videos
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {featured.map((vid, i) => (
                            <motion.a
                                key={i}
                                href={`https://youtu.be/${vid.id}`}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group block rounded-2xl overflow-hidden bg-neutral-900/50 border border-neutral-800 hover:border-red-500/40 transition-colors"
                            >
                                <div className="relative aspect-video bg-neutral-800 overflow-hidden">
                                    <img
                                        src={`https://img.youtube.com/vi/${vid.id}/mqdefault.jpg`}
                                        alt={vid.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-red-900/20 transition-colors flex items-center justify-center">
                                        <span className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <FaPlay className="text-white ml-0.5" />
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-neutral-300 line-clamp-2 group-hover:text-white transition-colors">
                                        {vid.title}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YoutubeSection;
