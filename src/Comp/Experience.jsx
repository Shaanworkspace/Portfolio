import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const VISIBLE_COUNT = 4;

const Experience = () => {
    const hasProjects = Array.isArray(PROJECTS) && PROJECTS.length > 0;
    const [showAll, setShowAll] = useState(false);

    const visibleProjects = hasProjects
        ? (showAll ? PROJECTS : PROJECTS.slice(0, VISIBLE_COUNT))
        : [];

    return (
        <section
            id="projects"
            className="group border-b border-neutral-800 py-12 lg:py-20"
        >
            <h2 className="relative mb-12 text-center text-3xl md:text-4xl font-extrabold tracking-tight">
                Projec
                <span className="tracking-tight text-neutral-500">ts</span>
                <span className="absolute left-1/2 -bottom-2 h-[3px] w-20 group-hover:w-48 transition-all duration-500 ease-in-out -translate-x-1/2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 rounded-full" />
            </h2>

            <div className="max-w-6xl mx-auto px-4">
                {hasProjects ? (
                    <>
                        <div className="space-y-16">
                            {visibleProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                                        } items-center gap-8`}
                                >
                                    {/* Image */}
                                    <div className="w-full lg:w-1/2 flex justify-center">
                                        <div className="relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105">
                                            <img
                                                src={project.photo}
                                                alt={project.title}
                                                className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-full lg:w-1/2 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-6 md:p-8 rounded-2xl border border-neutral-800 shadow-md hover:border-fuchsia-500 transition-all duration-300">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                                            <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                                <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>{project.title}</span>
                                        </h3>
                                        <p className="text-sm md:text-base text-neutral-300 leading-relaxed mb-4 whitespace-pre-line">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-block rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-fuchsia-300 shadow-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {project.liveDemo && (
                                                <a
                                                    href={project.liveDemo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition"
                                                >
                                                    Live Deployed Link
                                                </a>
                                            )}
                                            {project.vercelLink && (
                                                <a
                                                    href={project.vercelLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-zinc-800 border border-zinc-600 rounded-full hover:border-green-400 transition"
                                                >
                                                    Vercel Deployed
                                                </a>
                                            )}
                                            {project.frontendLink && (
                                                <a
                                                    href={project.frontendLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition"
                                                >
                                                    Frontend Code
                                                </a>
                                            )}
                                            {project.backendLink && (
                                                <a
                                                    href={project.backendLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
                                                >
                                                    Backend Code
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {PROJECTS.length > VISIBLE_COUNT && (
                            <div className="flex justify-center mt-12">
                                <button
                                    onClick={() => setShowAll((s) => !s)}
                                    className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-full shadow-md hover:scale-105 transition"
                                >
                                    {showAll ? 'Show Less' : 'See More Projects'}
                                    <svg
                                        className={`ml-2 w-4 h-4 transform transition-transform ${showAll ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d={showAll ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'} />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-24">
                        <p className="text-neutral-400">No projects found.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;
