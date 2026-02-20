import project1 from "../assets/projects/img.png";
import project2 from "../assets/projects/project-2.jpg"; // Employee MS
import project3 from "../assets/projects/project-3.jpg"; // Journal
import project5 from "../assets/projects/project-5.png"; // Journal
import amazonpage from "../assets/projects/amazon-page.png";
import stonepaper from "../assets/projects/stonepaper.png";
import tictac from "../assets/projects/tic-tac.png";
import sympai from "../assets/projects/Symptom-AI.png";

export const HERO_CONTENT = `Full Stack Developer & AI Enthusiast specializing in building scalable web applications. I bridge the gap between complex backend logic and intuitive frontend design using Java, Spring Boot, and React.`;

export const ABOUT_TEXT = `I am a Computer Science undergraduate at KIET Group of Institutions with a focus on Full Stack Development and Artificial Intelligence. 

My technical journey is defined by a hands-on approach—whether it's architecting microservices for healthcare platforms like MediPlan or integrating OpenAI into user-centric applications. I rank in the top 15% globally on LeetCode, reflecting my commitment to algorithmic efficiency.

I am currently seeking opportunities to leverage my skills in Java, Spring Boot, and Modern JavaScript frameworks to solve real-world problems.`;

export const EXPERIENCES = [
    {
        year: "2025",
        role: "AWS Certified Cloud Practitioner",
        company: "Amazon Web Services (AWS)",
        description:
            "Validated technical expertise in cloud concepts, security, compliance, and the AWS shared responsibility model. Demonstrated ability to deploy applications using AWS services.",
        technologies: [
            "Cloud Computing",
            "Security",
            "AWS Lambda",
            "EC2",
            "S3",
        ],
        type: "certification", // New type for styling
    },
    {
        year: "2025",
        role: "AWS Certified AI Practitioner",
        company: "Amazon Web Services (AWS)",
        description:
            "Earned credential validating understanding of AI/ML concepts on AWS. Covered generative AI, foundation models, and responsible AI practices.",
        technologies: [
            "Generative AI",
            "SageMaker",
            "Bedrock",
            "Machine Learning",
        ],
        type: "certification",
    },
    {
        year: "2026 - Present",
        role: "Open Source Contributor",
        company: "rtCamp",
        description:
            "Actively contributing to enterprise-level open source repositories. Merged 1 Pull Request involving frontend optimization and documentation improvements.",
        technologies: ["SCSS", "Git", "Open Source"],
        type: "work",
    },
    {
        year: "2025 - Present",
        role: "Full Stack Developer Intern",
        company: "School Timetable Automation System",
        description:
            "Engineered a rule-based scheduling algorithm to automate class allocations. Built a RESTful backend using Spring Boot and designed a dynamic React dashboard for real-time timetable visualization.",
        technologies: [
            "Java",
            "Spring Boot",
            "ReactJS",
            "MySQL",
            "Algorithm Design",
        ],
        type: "work",
    },
    {
        year: "2023 - 2027",
        role: "B.Tech in Computer Science",
        company: "KIET Group of Institutions",
        description:
            "Specialization in AI & ML. Active member of Google Developer Group (GDG).",
        technologies: ["Data Structures", "OOPs", "System Design"],
        type: "education",
    },
];

// PROJECTS (Ordered by "Latest")
export const PROJECTS = [
    {
        title: "AyurSutra - Microservices Healthcare",
        image: project5, // Replace with actual image if available
        photo: project5, // Replace with actual image if available
        isLatest: true,
        liveDemo: "https://www.ayursutra.me",
        description:
            "A distributed healthcare platform built on a Microservices architecture. Features include role-based access (Doctor, Patient, Therapist), asynchronous booking via RabbitMQ, and secure OAuth2 authentication.",
        technologies: [
            "Java 21",
            "Spring Boot",
            "Microservices",
            "RabbitMQ",
            "Docker",
            "Redis",
            "AWS Lambda",
        ],
        liveDemo: "https://ayursutra.me",
        frontendLink: "https://github.com/Shaanworkspace/Ayursutra-frontend",
        backendLink: "https://github.com/Shaanworkspace/Ayursutra-userMS",
        isLatest: true, // Tag for styling
    },
    {
        title: "MediPlan - Hospital Management",
        image: project1,
        photo: project1,
        description:
            "A secure full-stack platform for appointment scheduling and patient tracking. Engineered to support 200+ concurrent users with JWT security and a responsive ShadCN/UI frontend.",
        technologies: ["ReactJS", "Spring Boot", "MySQL", "Docker", "Render"],
        frontendLink: "https://github.com/Shaanworkspace/MediPlan-Frontend",
        backendLink: "https://github.com/Shaanworkspace/MediPlan-Backend",
        liveDemo: "https://mediplan.vercel.app/",
    },
    {
        title: "SympAI - AI Symptom Analyzer",
        image: sympai,
        photo: sympai,
        description:
            "An AI-powered diagnostic tool integrating the OpenAI API to analyze user symptoms and recommend medical next steps. Reduces health anxiety by providing data-backed preliminary guidance.",
        technologies: ["React.js", "OpenAI API", "Tailwind CSS", "Spring Boot"],
        frontendLink: "https://github.com/Shaanworkspace/symp-ai",
        vercelLink: "https://symp-ai.vercel.app/",
    },
    {
        title: "Employee Management System",
        image: project2,
        photo: project2,
        description:
            "Full-stack HR tool for employee record tracking. Optimized database queries reduced retrieval time by 25%. Features role-based access control.",
        technologies: ["Java", "Spring Boot", "ReactJS", "MySQL", "Axios"],
        frontendLink:
            "https://github.com/Shaanworkspace/Employee-Management-System-Frontend",
        backendLink:
            "https://github.com/Shaanworkspace/Employee-Management-System-Backend",
    },
    {
        title: "Amazon Clone",
        image: amazonpage,
        photo: amazonpage,
        description:
            "Pixel-perfect frontend recreation of the Amazon homepage, focusing on CSS Grid/Flexbox mastery and responsive design principles.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        frontendLink: "https://github.com/Shaanworkspace/Amazon-home-page",
        vercelLink: "https://amazon-home-page-ruddy.vercel.app/",
    },
];

export const CONTACT = {
    address: "Ghaziabad, Uttar Pradesh, India",
    phoneNo: "+91-8542029975",
    email: "shaanyworkspace@gmail.com",
};
