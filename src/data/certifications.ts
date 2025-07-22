// Certification data interface
export interface CertificationData {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  description: string;
}

// Certifications array - Update with your certifications
export const certifications: CertificationData[] = [
  {
    id: 1,
    title: "Introduction to Generative AI", // Update certification title
    issuer: "Google Cloud", // Update certification issuer
    date: "2024", // Update date
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/f84fc625-03c5-4a55-a2ad-7d5c64690a43/badges/13456478?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share", // Update with your credential URL
    description: "Achieved Introduction to Generative AI certification, validating foundational knowledge and understanding of AI concepts and applications." // Update description
  },{
    id: 2,
    title: "Career Essentials in Generative AI by Microsoft", // Update certification title
    issuer: "Microsoft", // Update certification issuer
    date: "2025", // Update date
    credentialUrl: "https://www.linkedin.com/learning/certificates/78f5403543ad1cc51804fb4379346ef3f889ea4f7cff6462cc0a6e6e3d4c8341?trk=share_certificate", // Update with your credential URL
    description: "Achieved Career Essentials in Generative AI certification, validating foundational knowledge and understanding of AI concepts and applications." // Update description
  },
  {
    id: 3,
    title: "Forage Certification: Data Analytics and Visualization Job Simulation", // Update certification title
    issuer: "Accenture", // Update certification issuer
    date: "2024", // Update date
    credentialUrl: "https://drive.google.com/file/d/1g87WqVoNHPA8HntoFZjcySXJ27KxAwzj/view?usp=sharing", // Update with your credential URL
    description: "Completed Forage’s Data Analytics and Visualization Job Simulation, gaining hands-on experience with real-world engineering tasks like debugging, feature implementation, and code collaboration." // Update description
  },
  {
    id: 4,
    title: "HackerRank Problem Solving", // Update certification title
    issuer: "HackerRank", // Update certification issuer
    date: "2025", // Update date
    credentialUrl: "https://www.hackerrank.com/certificates/c98f9624c934", // Update with your credential URL
    description: "Achieved certification in HackerRank Problem Solving, demonstrating strong analytical and algorithmic thinking through real-world coding challenges." // Update description
  },
  // Add more certifications here
];