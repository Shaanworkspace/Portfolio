import React from 'react'
import { EXPERIENCES, PROJECTS } from '../constants'
import { div } from 'framer-motion/client'

const Experience = () => {
    return (
        <div className=' group border-b border-neutral-900 pb-2 lg:mb-32 mt-20 lg:mt-0'>
            <h2 className='relative mb-15 text-center  text-4xl lg:text-4xl'>Projec<span className='tracking-tighter text-neutral-500'>ts</span>
                {/* Animated gradient underline */}
                <span className="absolute left-1/2 -bottom-2 h-[4px] w-20 hover:w-30 lg:hover:w-50 group-hover:w-30 lg:group-hover:w-50 transition-all duration-800 ease-in-out -translate-x-1/2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_100%] bg-left-bottom animate-gradient-slide rounded-full" />
            </h2>
            <div className="container mx-auto px-4">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="mb-16 relative group"
                    >
                        {/* Content Block */}
                        <div className="flex flex-wrap lg:flex-nowrap lg:justify-center gap-6">
                            {/* Photo Section (Left Side) - Hidden on small screens */}
                            <div className="flex justify-center items-center w-full lg:w-1/3 max-w-xs">
                                {/* Add 'group' here */}
                                <div className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                                    <img
                                        src={project.photo}
                                        alt={`${project.title} screenshot`}
                                        // Add scale-100, and scale up on group hover
                                        className="rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-transform duration-500 w-full h-64 object-cover scale-100 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                            {/* Main Content*/}
                            <div className="relative w-full lg:w-2/3 max-w-2xl bg-neutral-900 p-6 rounded-2xl shadow-lg border border-neutral-800 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-purple-700">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Project: <span className="text-green-400">{project.title}</span>
                                </h3>

                                <p className="text-neutral-300 leading-relaxed mb-6 text-sm">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 text-xs font-semibold text-purple-800 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Frontend and Backend Buttons */}
                                <div className="flex gap-4 flex-col md:flex-row">
                                    <div>
                                        {project.liveDemo && (
                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg shadow-md transition-all duration-300 hover:bg-green-700 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                            >
                                                <svg
                                                    className="w-4 h-4 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M14 5l7 7-7 7M5 5h14"
                                                    />
                                                </svg>
                                                Live Deployed (Backend + Frontend )
                                            </a>
                                        )}
                                    </div>
                                    <div className='flex flex-wrap gap-4'> 
                                        {project.frontendLink && (
                                        <a
                                            href={project.frontendLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg shadow-md transition-all duration-300 hover:bg-purple-700 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        >
                                            <svg
                                                className="w-4 h-4 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                                />
                                            </svg>
                                            Frontend Code
                                        </a>
                                    )}
                                    {project.backendLink && (
                                        <a
                                            href={project.backendLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <svg
                                                className="w-4 h-4 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 12h14M12 5l7 7-7 7"
                                                />
                                            </svg>
                                            Backend Code
                                        </a>
                                    )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 👇 Gradient Line Below Each Project */}
                        <span className="block mx-auto mt-6 h-[2px] w-16 group-hover:w-3/5 transition-all duration-700 ease-out-in bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300
bg-[length:200%_100%] bg-left-bottom animate-gradient-slide rounded-full" />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Experience