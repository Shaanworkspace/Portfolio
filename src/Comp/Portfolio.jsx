import { useEffect } from 'react';

// Utility to load animate.css dynamically
const loadAnimateCSS = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    document.head.appendChild(link);
};

export default function Portfolio() {
    // Load animate.css on component mount
    useEffect(() => {
        loadAnimateCSS();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 font-sans relative overflow-x-hidden">
            {/* Decorative Background Elements (Adjusted size and positioning) */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 opacity-20 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-indigo-300 to-purple-300 opacity-20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 z-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_70%)] z-0 pointer-events-none"></div>

            {/* Header */}
            <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow-lg z-20">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 animate__animated animate__fadeIn">
                        Shaan Yadav
                    </h1>
                    <nav className="space-x-6">
                        {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300 animate__animated animate__fadeIn"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="https://shaanresume.tiiny.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md animate__animated animate__fadeIn"
                            style={{ animationDelay: '0.8s' }}
                        >
                            Resume
                        </a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-28 pb-16 px-4 text-center z-10 min-h-screen">
                <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 animate__animated animate__fadeInUp">
                    Hi, I'm Shaan Yadav
                </h2>
                <p className="text-2xl text-gray-700 mt-4 font-medium animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
                    Passionate Application Developer | Java, ReactJS, AI & ML
                </p>
                <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
                    2nd-year BTech student at KIET Group of Institutions, building innovative solutions and solving problems with code.
                </p>
                <a
                    href="#projects"
                    className="mt-8 inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl animate__animated animate__fadeInUp"
                    style={{ animationDelay: '0.9s' }}
                >
                    View My Work
                </a>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 px-4 bg-white/90 backdrop-blur-sm shadow-inner">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 animate__animated animate__fadeInUp">About Me</h2>
                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
                        I'm a Computer Science student specializing in AI & ML at KIET Group of Institutions. Proficient in Java, Spring Boot, ReactJS, and MySQL, I enjoy building user-friendly applications and tackling coding challenges on LeetCode, CodeChef, and HackerRank. My goal is to create impactful software solutions and secure a role as a Java Developer.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 px-4 bg-gradient-to-b from-purple-50 to-indigo-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 text-center animate__animated animate__fadeInUp">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {[
                            {
                                name: 'MediPlan',
                                desc: 'A medical website with appointment booking and health tips, built with ReactJS, Spring Boot, and MySQL.',
                                link: 'https://github.com/Shaanworkspace/MediPlan-Backend',
                            },
                            {
                                name: 'Employee Management System',
                                desc: 'A system for managing employee records using Java, Spring Boot, and MySQL.',
                                link: 'https://github.com/Shaanworkspace/Employee-Management',
                            },
                            {
                                name: 'Journal Entry',
                                desc: 'A note-taking app with Markdown support, built with Flutter and Dart.',
                                link: 'https://github.com/Shaanworkspace/Journal-Entry',
                            },
                        ].map((project, index) => (
                            <div
                                key={project.name}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate__animated animate__fadeInUp"
                                style={{ animationDelay: `${index * 0.3}s` }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>
                                <p className="text-gray-600 mt-3 leading-relaxed">{project.desc}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 mt-4 inline-block font-medium hover:text-indigo-800 transition-colors duration-300 hover:underline"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16 px-4 bg-white/90 backdrop-blur-sm shadow-inner">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 text-center animate__animated animate__fadeInUp">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                        {['Java', 'Spring Boot', 'ReactJS', 'MySQL', 'C', 'C++', 'Python', 'Flutter', 'Dart', 'HTML', 'CSS', 'Git'].map(
                            (skill, index) => (
                                <div
                                    key={skill}
                                    className="bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-800 text-center py-4 rounded-xl shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-indigo-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-105 animate__animated animate__fadeInUp"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <span className="text-lg font-medium">{skill}</span>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-4 bg-gradient-to-b from-indigo-50 to-purple-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 animate__animated animate__fadeInUp">Get in Touch</h2>
                    <p className="text-gray-600 mt-4 text-lg animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
                        Interested in collaborating or hiring me? Reach out!
                    </p>
                    <p className="text-gray-600 mt-3 text-lg animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
                        Email: <a href="mailto:shaanyworkspace@gmail.com" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 hover:underline">shaanyworkspace@gmail.com</a>
                    </p>
                    <div className="flex justify-center space-x-6 mt-8">
                        {[
                            { name: 'GitHub', link: 'https://github.com/Shaanworkspace' },
                            { name: 'LinkedIn', link: 'https://linkedin.com/in/your-linkedin' },
                            { name: 'LeetCode', link: 'https://leetcode.com/your-leetcode' },
                            { name: 'HackerRank', link: 'https://hackerrank.com/your-hackerrank' },
                            { name: 'CodeChef', link: 'https://codechef.com/your-codechef' },
                        ].map((platform, index) => (
                            <a
                                key={platform.name}
                                href={platform.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300 animate__animated animate__fadeInUp"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {platform.name}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 px-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white text-center shadow-inner">
                <p className="text-lg">© 2025 Shaan Yadav. All rights reserved.</p>
            </footer>
        </div>
    );
}