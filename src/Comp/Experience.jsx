import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const VISIBLE_COUNT = 4;

const Experience = () => {
  const hasProjects = Array.isArray(PROJECTS) && PROJECTS.length > 0;
  const [showAll, setShowAll] = useState(false);

  // Show only first VISIBLE_COUNT unless showAll is true
  const visibleProjects = hasProjects
    ? (showAll ? PROJECTS : PROJECTS.slice(0, VISIBLE_COUNT))
    : [];

  return (
    <section className="group border-b border-neutral-900 pb-2 lg:mb-32 mt-20 lg:mt-0" id="projects">
      <h2 className="relative mb-20 text-center text-4xl font-extrabold tracking-tight">
        Projec<span className="tracking-tighter text-neutral-500">ts</span>
        <span className="absolute left-1/2 -bottom-2 h-[4px] w-24 group-hover:w-48 transition-all duration-700 ease-in-out -translate-x-1/2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-[length:200%_100%] bg-left-bottom animate-gradient-slide rounded-full" />
      </h2>

      <div className="container mx-auto px-4">
        {hasProjects ? (
          <>
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className={`mb-20 relative group transition-transform duration-500 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex flex-wrap lg:flex-nowrap lg:justify-center gap-8">
                  {/* Project Image */}
                  <div className="flex justify-center items-center w-full lg:w-1/3 max-w-xs">
                    <div className="group relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 hover:translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30">
                      <img
                        src={project.photo}
                        alt={`${project.title} screenshot`}
                        className="rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-transform duration-700 w-full h-64 object-cover scale-100 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                    </div>
                  </div>
                  {/* Project Content */}
                  <div className="relative w-full lg:w-2/3 max-w-2xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 rounded-3xl shadow-2xl border border-neutral-800 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-purple-700">
                    <h3 className="text-2xl font-extrabold text-white mb-3 tracking-wide flex items-center gap-2">
                      <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Project:</span>
                      <span className="text-green-400">{project.title}</span>
                    </h3>
                    <p className="text-neutral-300 leading-relaxed mb-6 text-base whitespace-pre-line">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 px-3 py-1 text-xs font-bold text-purple-800 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-700 rounded-lg shadow-md transition-all duration-300 hover:from-green-600 hover:to-green-800 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7M5 5h14"/>
                          </svg>
                          Live Deployed
                        </a>
                      )}
                      {project.vercelLink && (
                        <a
                          href={project.vercelLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-black via-zinc-900 to-neutral-900 border border-zinc-700 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-xl hover:scale-105 hover:border-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M5 5h14"/>
                          </svg>
                          Live on Vercel
                        </a>
                      )}
                      {project.frontendLink && (
                        <a
                          href={project.frontendLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-md transition-all duration-300 hover:from-purple-700 hover:to-pink-800 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                          </svg>
                          Frontend Code
                        </a>
                      )}
                      {project.backendLink && (
                        <a
                          href={project.backendLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-600 rounded-lg shadow-md transition-all duration-300 hover:from-blue-700 hover:to-sky-800 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                          Backend Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <span className="block mx-auto mt-10 h-[2px] w-16 group-hover:w-2/5 transition-all duration-700 ease-in-out bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 animate-gradient-slide rounded-full" />
              </div>
            ))}
            {/* Show More / Show Less Button */}
            {PROJECTS.length > VISIBLE_COUNT && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAll((s) => !s)}
                  className="relative group inline-flex items-center px-8 py-3 font-bold text-lg rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 text-white shadow-xl hover:scale-105 hover:shadow-fuchsia-400/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                >
                  <span className="relative z-10">
                    {showAll ? "Show Less" : "See More Projects"}
                  </span>
                  <span className="absolute left-0 top-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white/10 via-fuchsia-300/10 to-blue-400/10 transition-opacity duration-300 pointer-events-none" />
                  <svg
                    className={`ml-3 w-6 h-6 transition-transform duration-400 ${showAll ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={showAll ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-6 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black rounded-3xl shadow-2xl border border-neutral-800">
            <svg className="w-20 h-20 text-fuchsia-400 mb-4 animate-bounce" fill="none" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="6" />
              <path d="M22 28h20M22 36h20" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
            </svg>
            <h3 className="text-2xl font-extrabold text-white mb-2">No Projects Found</h3>
            <p className="text-neutral-400 mb-3">Looks like you haven't added any projects yet.<br />Add your awesome work to showcase your experience!</p>
            <a
              href="https://github.com/Shaanworkspace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M5 5h14"/>
              </svg>
              Visit My GitHub
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;