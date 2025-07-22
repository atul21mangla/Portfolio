// Experience item interface
interface ExperienceItem {
  date: string;
  title: string;
  organization: string;
  description: string;
}

// Education item interface
interface EducationItem {
  date: string;
  degree: string;
  institution: string;
  description: string;
}

// Work experience data - Update with your professional experience
export const experienceData: ExperienceItem[] = [
  {
    date: "Dec 2024 - Feb 2025", // Update date range
    title: "SDE Intern", // Update job title
    organization: "ITJOBXS", // Update company name
    description: "Designed and developed a responsive job listing module, increasing mobile engagement by 30% . Engineered a bot detection mechanism using Google reCAPTCHA,eliminating over 95% of fake posts during internal testing." // Update job description
  },
  {
    date: "Apr 2024 - June 2024", // Update date range
    title: "Frontend Development Intern", // Update job title
    organization: "KalkiFi AI Solutions", // Update company name
    description: "Led a team of 4 developers to revamp and scale the company website, reducing page load time by 35% and increasing mobileresponsiveness score to 90+. Integrated Razorpay payment gateway, enabling secure transactions and reducing checkout failures by 25%." // Update job description
  },
  // Add more work experience entries here
];

// Education data - Update with your educational background
export const educationData: EducationItem[] = [
  {
    date: "2022 - 2026", // Update education dates
    degree: "Bachelor of Technology in Computer Science Engineering", // Update degree
    institution: "Vellore Institute of Technology, Vellore", // Update institution
    description: "CGPA: 9.08/10. Specialized in web development, algorithms, and software engineering. Active member of coding club and technical events." // Update education details
  },
  {
    date: "2021", // Update education dates
    degree: "Class XII", // Update degree
    institution: "Modern Vidya Niketan, Faridabad, Haryana", // Update institution
    description: "Percentage: 93.4" // Update education details
  },
  {
    date: "2019", // Update education dates
    degree: "Class X", // Update degree
    institution: "Dharam Public School , Palwal , Haryana", // Update institution
    description: "Percentage: 97" // Update education details
  },
  // Add more education entries here
];