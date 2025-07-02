import {html} from "framer-motion/client";
import project1 from "../assets/projects/img.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import amazonpage from "../assets/projects/amazon-page.png"
import stonepaper from "../assets/projects/stonepaper.png"
import tictac from "../assets/projects/tic-tac.png"

export const HERO_CONTENT = `Love to Code in Java, \n Shaan, Computer Science student specializing in AI and Machine Learning,\nwith expertise in full-stack development using Java, Spring Boot, ReactJS, and MySQL. Skilled in building scalable web Application like MediPlan and Employee Management System with AI integrations.\nWith a strong foundation in data structures, algorithms, and competitive programming (LeetCode, CodeChef, HackerRank).`;

export const ABOUT_TEXT = `A Dedicated Computer Science student at KIET Group of Institutions, I specialize in AI, ML, and full-stack development, with proficiency in Java, Spring Boot, ReactJS, MySQL, MongoDB ,AWS cloud .\n My passion for problem-solving has led me to develop robust applications like MediPlan, a healthcare platform, and excel in competitive programming on LeetCode (top 15% globally), CodeChef, and HackerRank.\n With hands-on experience in RESTful APIs, cloud integration (AWS), and responsive UI design with Tailwind CSS, I thrive in dynamic environments. \nI actively contribute to open-source projects and stay updated with emerging technologies like microservices and DevOps to deliver high-quality, scalable solutions.`;

export const EXPERIENCES = [
    {
        year: "2023 - Present",
        role: "Full Stack Developer (Guided College Project)",
        company: "School Timetable Automation System",
        description: `Collaborated on School Timetable Management System under the mentorship of college faculty Mr. Rahul Dixit. Focused on implementing rule-based scheduling logic and dynamic period allocation. Built RESTful APIs for secure teacher-class-subject mapping. Designed intuitive frontend to display real-time timetables and period-wise breakdowns.`,
        technologies: [
            "Java",
            "Spring Boot",
            "ReactJS",
            "MySQL",
            "Tailwind CSS",
            "REST APIs",
        ],
    },
];

export const PROJECTS = [
    {
        title: "MediPlan",
        image: project1,
        photo: project1,
        description:
            "Deployed, MediPlan is a secure full-stack healthcare management platform designed for appointment scheduling, patient tracking, and real-time admin dashboards. Engineered to support 200+ mock users with 98% uptime, it features robust RESTful APIs, JWT-authenticated Spring Security, and a fully responsive UI powered by ReactJS and ShadCN/UI. Built with production-grade tooling and optimized for deployment on Docker and cloud platforms like Render, Railway, and Vercel.",
        technologies: [

            "ReactJS",
            "Tailwind CSS",
            "React Router DOM",
            "ShadCN/UI",
            "Framer Motion",
            "Axios",
            "LocalStorage / SessionStorage",
            "React Hook Form",
            "Java",
            "Spring Boot / MVC / JPA ",
            "Lombok",
            "Spring Security + JWT",
            "MySQL Workbench",
            "MySQL",
            "REST APIs",
            "Swagger / Postman",
            "CORS Configuration",
            "Docker",
            "DockerHub",
            "Render / Railway / Vercel"

        ],
        frontendLink: "https://github.com/Shaanworkspace/MediPlan-Frontend",
        backendLink: "https://github.com/Shaanworkspace/MediPlan-Backend",
        liveDemo: "https://mediplan.vercel.app/",
        vercelLink:""
    },
    {
        title: "Employee Management System",
        image: project2,
        photo: project2,
        description:
            "A robust HR management tool for employee data tracking and role-based access, handling 100+ records with 25% faster data retrieval. Features include secure authentication and dynamic data visualization.",
        technologies: [
            "Java",
            "Spring Boot",
            "ReactJS",
            "MySQL",
            "Tailwind CSS",
            "Axios",
        ],
        frontendLink: "https://github.com/Shaanworkspace/Employee-Management-System-Frontend",
        backendLink: "https://github.com/Shaanworkspace/Employee-Management-System-Backend",
        liveDemo: "",
        vercelLink:""
    },
    {
        title: "Journal Entry App",
        image: project3,
        photo: project3,
        description:
            "A cross-platform mobile app for journal management, supporting 500+ mock users with real-time Firebase sync. Optimized for iOS and Android, improving user engagement by 20% through intuitive UI/UX.",
        technologies: ["Flutter", "Dart", "Firebase", "UI/UX Design"],
        frontendLink: "https://github.com/Shaanworkspace/Journal-App-Frontend",
        backendLink: "https://github.com/Shaanworkspace/Journal-App-Backend",
        liveDemo: "",
        vercelLink:""
    }, {
        title: "Amazon Home Page Clone",
        image: amazonpage,
        photo: amazonpage,
        description:
            "A pixel-perfect clone of Amazon’s homepage using vanilla HTML, CSS and JS. Features responsive product grid, interactive carousel, and hover effects.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        frontendLink: "https://github.com/Shaanworkspace/Amazon-home-page",
        backendLink: "",
        liveDemo: "",
        vercelLink:"https://amazon-home-page-ruddy.vercel.app/"
    },
    {
        title: "world-Talks",
        image: project3,
        photo: project3,
        description:
            "A real-time chat or discussion platform (details to be added). Designed for group and individual conversations, potentially including user authentication and message history.",
        technologies: [

             "ReactJS", "Java Scripts","React Public API"
        ],
        frontendLink: "https://github.com/Shaanworkspace/world-Talks",
        backendLink: "",
        liveDemo: "",
        vercelLink:""
    },
    {
        title: "Stone-Paper-Scissors",
        image: stonepaper,
        photo: stonepaper,
        description:
            "A classic Stone-Paper-Scissors game playable in the browser. Simple and interactive UI for quick matches against the computer.",
        technologies: [
            "JavaScript", "HTML", "CSS"
        ],
        frontendLink: "https://github.com/Shaanworkspace/Stone-Paper-Scissors",
        backendLink: "",
        liveDemo: "",
        vercelLink:"https://stone-paper-scissors-delta.vercel.app/"
    },
    {
        title: "Tic-Tac-Toe",
        image: tictac,
        photo: tictac,
        description:
            "A browser-based Tic-Tac-Toe game for two players. Features a clean UI and tracks wins and draws.",
        technologies: [
            "JavaScript", "HTML", "CSS"
        ],
        frontendLink: "https://github.com/Shaanworkspace/Tic-Tac-Toe",
        backendLink: "",
        liveDemo: "",
        vercelLink:"https://tic-tac-toe-beta-navy-86.vercel.app/"
    }
];

export const CONTACT = {
    address: "KIET Group of Institutions, Ghaziabad, Uttar Pradesh, India",
    phoneNo: "+91-8542029975",
    email: "shaanyworkspace@gmail.com",
};
