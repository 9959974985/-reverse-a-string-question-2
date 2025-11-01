export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    achievements: string[];
  }>;
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    location: string;
    graduationDate: string;
    gpa?: string;
  }>;
  skills: {
    technical: string[];
    soft: string[];
  };
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
  projects?: Array<{
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "John Doe",
    title: "Full Stack Software Engineer",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    website: "johndoe.dev"
  },
  summary: "Results-driven Full Stack Software Engineer with 5+ years of experience building scalable web applications. Proven expertise in React, Node.js, and cloud technologies. Strong problem-solver with a track record of delivering high-quality solutions that improve user experience and drive business growth. Passionate about clean code, best practices, and continuous learning.",
  experience: [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Software Engineer",
      location: "San Francisco, CA",
      startDate: "Jan 2022",
      endDate: "Present",
      achievements: [
        "Led development of microservices architecture serving 2M+ users, reducing API response time by 40%",
        "Architected and implemented CI/CD pipeline using GitHub Actions, reducing deployment time by 60%",
        "Mentored team of 5 junior developers, improving code quality and team productivity by 35%",
        "Spearheaded migration from monolithic to microservices architecture, improving system scalability"
      ]
    },
    {
      company: "Digital Solutions LLC",
      position: "Software Engineer",
      location: "San Francisco, CA",
      startDate: "Jun 2020",
      endDate: "Dec 2021",
      achievements: [
        "Developed and maintained 15+ RESTful APIs using Node.js and Express, handling 100K+ daily requests",
        "Built responsive web applications using React and TypeScript, improving user engagement by 25%",
        "Implemented automated testing suite with Jest and Cypress, achieving 85% code coverage",
        "Collaborated with cross-functional teams to deliver features on time and within budget"
      ]
    },
    {
      company: "StartUp Ventures",
      position: "Junior Software Developer",
      location: "San Jose, CA",
      startDate: "Jul 2019",
      endDate: "May 2020",
      achievements: [
        "Developed front-end components using React and Redux, contributing to 3 major product releases",
        "Optimized database queries in PostgreSQL, reducing query execution time by 50%",
        "Participated in agile development process, including daily standups and sprint planning",
        "Fixed 100+ bugs and implemented new features based on user feedback"
      ]
    }
  ],
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Science",
      location: "Berkeley, CA",
      graduationDate: "May 2019",
      gpa: "3.8/4.0"
    }
  ],
  skills: {
    technical: [
      "JavaScript/TypeScript",
      "React.js",
      "Node.js",
      "Next.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "Kubernetes",
      "Git",
      "REST APIs",
      "GraphQL",
      "CI/CD",
      "Agile/Scrum"
    ],
    soft: [
      "Leadership",
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Time Management",
      "Critical Thinking"
    ]
  },
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023"
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2022"
    }
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      description: "Built a full-stack e-commerce platform with payment integration, inventory management, and admin dashboard",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      link: "github.com/johndoe/ecommerce"
    },
    {
      name: "Real-Time Chat Application",
      description: "Developed a real-time chat application with WebSocket support, user authentication, and message encryption",
      technologies: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
      link: "github.com/johndoe/chat-app"
    }
  ]
};
