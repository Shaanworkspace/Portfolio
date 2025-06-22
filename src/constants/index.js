import { html } from "framer-motion/client";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

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
      "A full-stack healthcare platform for appointment scheduling, patient management, and admin dashboards, serving 200+ mock users with 98% uptime. Built with secure RESTful APIs and responsive design for seamless cross-device access.",
    technologies: [
      "Java",
      "Spring Boot",
      "ReactJS",
      "MySQL",
      "Tailwind CSS",
      "REST APIs",
    ],
    frontendLink: "https://github.com/Shaanworkspace/MediPlan-Frontend",
    backendLink: "https://github.com/Shaanworkspace/MediPlan-Backend",
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
    frontendLink: "https://github.com/Shaanworkspace/Employee-Management-Frontend",
    backendLink: "https://github.com/Shaanworkspace/Employee-Management-Backend",
  },
  {
    title: "Journal Entry App",
    image: project3,
    photo: project3,
    description:
      "A cross-platform mobile app for journal management, supporting 500+ mock users with real-time Firebase sync. Optimized for iOS and Android, improving user engagement by 20% through intuitive UI/UX.",
    technologies: ["Flutter", "Dart", "Firebase", "UI/UX Design"],
    frontendLink: "https://github.com/Shaanworkspace/Journal-Entry-App",
    backendLink: "https://github.com/Shaanworkspace", // Firebase backend, no separate repo
  },
];

export const CONTACT = {
  address: "KIET Group of Institutions, Ghaziabad, Uttar Pradesh, India",
  phoneNo: "+91-854209975",
  email: "shaanyworkspace@gmail.com",
};
