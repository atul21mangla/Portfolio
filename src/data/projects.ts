// Project data interface definition
import boardly from "../assets/boardly.png";
import attendance2 from "../assets/attendance2.png";
import hostelHub from "../assets/hostelHub.png";
import portfolio from "../assets/portfolio.png";
import password from "../assets/password.png";
import Calculator from "../assets/calculator.png";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;  // URL to project screenshot/image
  tags: string[]; // Technologies used
  liveUrl?: string;  // Optional live demo URL
  repoUrl?: string;  // Optional GitHub repository URL
  features?: string[];  // Optional list of project features
  techStack?: string[]; // Optional detailed tech stack
}

// Main projects array - Update this with your own projects
export const projects: ProjectData[] = [
  {
    id: 1,
    title: "Boardly - Simplify Your Board Preparation ", // Change project title
    description: "Boardly offers: All-in-one access to past questions + text answers + video solutions. Built-in distraction-free timer for mock exams. Unified interface keeping everything in one place.", // Update project description
    // Replace with your project screenshot
    // Recommended size: 1280x720 or 16:9 aspect ratio
    image: boardly,
    tags: ["React", "Node.JS", "Express", "MongoDB" , "JWT"], // Update tech tags
    liveUrl: "https://www.boardly.in/landing", // Update with your repo URL
    
   techStack: [
      "React",
      "Node.JS",
      "Express",
      "MongoDB",
      
    ]
  },
  // Add more projects following the same structure
  {
    id: 2,
    title: "FaceTrack - Face Attendance System", // Change project title
    description: "This project uses facial recognition technology to automate attendance tracking in classrooms. It captures student faces via webcam and matches them against a database to mark attendance.", // Update description
    image: attendance2,
    tags: ["Python", "OpenCV", "Face Recognition", "Machine Learning" , "Streamlit", "Redis","NumPy","Pandas"], // Update tech tags
    liveUrl: "https://atul21mangla-face-attendance-system-home-cwmc9x.streamlit.app/Real_Time_Prediction", // Optional live demo URL
    repoUrl: "https://github.com/atul21mangla/Face-Attendance-System", // Update with your repo URL
    
    techStack: [
      "Python",
      "OpenCV",
      "Streamlit",
      "InsightFace",
      "NumPy",
      "Pandas",
      "Redis"
    ]
  },
  {
    id: 3,
    title: "HostelHub", // Change project title
    description: "HostelHub is a modern, user-friendly hostel management system built with React and Tailwind CSS. It provides a comprehensive solution for hostel administrators and residents to manage and access information about blocks, rooms, mess facilities, and more.", // Update description
    image: hostelHub,
    tags: ["React", "Javascript", "Typescript", "TailwindCSS"],
    repoUrl: "https://github.com/atul21mangla/HostelHub", // Update with your repo URL
   
    techStack: [
      "React",
      "Javascript",
      "Typescript",
      "TailwindCSS"
     
    ]
  },
  {
    id: 4,
    title: "Portfolio Website", // Change project title
    description: "A modern and interactive portfolio showcasing my skills, projects, and journey as a frontend developer. Built with React, Tailwind CSS, and Framer Motion to deliver a smooth and engaging user experience.", // Update description
    image: portfolio,
    tags: ["React", "Typescript", "Javascript", "TailwindCSS","Framer Motion"],
    repoUrl: "https://github.com/atul21mangla/Portfolio", // Update with your repo URL
  
    techStack: [
      "React",
      "Typescript",
      "Javascript",
      "TailwindCSS",
      "Framer Motion"
    ]
  },
  {
    id: 5,
    title: "Random Password Generator", // Change project title
    description: "A simple, clean, and secure front-end web application for generating random passwords.Easily adjust the desired password length using a slider.Get immediate visual feedback on the strength of the generated password (Too Weak, Weak, Medium, Strong).", // Update description
    image: password,
    tags: ["HTML", "CSS", "Javascript", "TailwindCSS"],
    repoUrl: "https://github.com/atul21mangla/Password-Generator", // Update with your repo URL
    liveUrl: "https://atul21mangla.github.io/Password-Generator/", // Optional live demo URL
  
    techStack: [
      "HTML",
      "CSS",
      "Javascript",
      "TailwindCSS"
    ]
  },
  {
    id: 6,
    title: "Web Calculator", // Change project title
    description: "A simple web-based calculator application built with HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations and provides a user-friendly interface.", // Update description
    image: Calculator,
    tags: ["HTML", "CSS", "Javascript", ],
    repoUrl: "https://github.com/atul21mangla/Web-Calculator", // Update with your repo URL
    liveUrl: "https://atul21mangla.github.io/Web-Calculator/", // Optional live demo URL

    techStack: [
      "HTML",
      "CSS",
      "Javascript",
    ]
  },
  // Continue with your other projects...
];