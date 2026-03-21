export const portfolioData = {
  name: "Sanyam Choudhary",
  firstName: "Sanyam",
  lastName: "Choudhary",
  initials: "SC",
  email: "choudharysanyam30@gmail.com",
  phone: "+91 8171197756",
  phoneHref: "tel:+918171197756",
  location: "Greater Noida, Uttar Pradesh",
  linkedIn:
    "https://www.linkedin.com/in/sanyam-choudhary-20422828a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  resumePath: "/Sanyam-Chaudhary-CV.pdf",
  hero: {
    eyebrow: "Hello! I'm",
    titleLead: "Computer Science",
    roles: ["Student", "Builder"],
  },
  about:
    "B.Tech Computer Science & Engineering student at Noida Institute of Engineering & Technology with hands-on experience in web development, machine learning, and data tools. I enjoy building responsive applications, exploring computer vision, and turning academic ideas into practical projects that solve real problems.",
  focusAreas: [
    {
      title: "WEB DEVELOPMENT",
      subtitle: "Responsive interfaces and full-stack fundamentals",
      description:
        "Built signup flows, interactive UI components, and a portfolio website while also shipping a React and Node.js expense tracker with MongoDB-backed CRUD features.",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "VS Code",
      ],
    },
    {
      title: "AI & DATA",
      subtitle: "Machine learning, analytics, and experimentation",
      description:
        "Worked on object detection with OpenCV, TensorFlow, YOLOv5, and transfer learning, while using Excel, Power BI, and Google Colab to explore data and communicate insights.",
      tags: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "YOLOv5",
        "Power BI",
        "Excel",
        "Google Colab",
        "Computer Vision",
      ],
    },
  ],
  experience: [
    {
      role: "B.Tech CSE Student",
      organization: "NIET, Greater Noida",
      period: "2022 - Present",
      description:
        "Currently pursuing Computer Science & Engineering under AKTU while building projects across software development, machine learning, and data analytics.",
    },
    {
      role: "Web Development Intern",
      organization: "Bharat Intern",
      period: "Jun 2024 - Aug 2024",
      description:
        "Created a responsive sign-up page with a clean, user-focused interface and developed an interactive image slider for an e-commerce style experience.",
    },
    {
      role: "Cybersecurity Virtual Experience",
      organization: "JP Morgan Chase & Co. via Forage",
      period: "Jun 2024",
      description:
        "Explored firewalls, proxies, network protocols, threat detection, and enterprise security frameworks through a practical virtual experience program.",
    },
  ],
  projects: [
    {
      title: "Object Detection Using Deep Learning",
      category: "Computer Vision Project",
      summary:
        "A real-time detection system trained to recognize multiple everyday objects from a custom dataset.",
      tools: "Python, OpenCV, TensorFlow, YOLOv5, transfer learning",
      fallbackLabel: "YOLOv5 / TensorFlow",
    },
    {
      title: "Expense Tracker Web Application",
      category: "Full-Stack Web App",
      summary:
        "A personal finance tracker with authentication, CRUD workflows, and spending insights through visual charts.",
      tools: "React, Node.js, MongoDB, Chart.js, authentication",
      fallbackLabel: "React / Node / MongoDB",
    },
    {
      title: "Portfolio Website",
      category: "Responsive Frontend Project",
      summary:
        "A clean portfolio site designed to showcase projects, certifications, and skills across devices.",
      tools: "HTML, CSS, JavaScript, responsive UI",
      fallbackLabel: "Portfolio / Frontend",
    },
  ],
  skillGroups: [
    {
      title: "Programming & Development",
      skills: ["Python", "Java", "HTML", "CSS", "JavaScript", "SQL"],
    },
    {
      title: "Data & Tools",
      skills: ["Excel", "Power BI", "GitHub", "Google Colab", "VS Code"],
    },
    {
      title: "Core Areas",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Vision",
        "Team Collaboration",
        "Cloud Computing",
      ],
    },
  ],
  certifications: [
    "Explore Machine Learning using R - Infosys Springboard (April 2025)",
    "Database Management System for Science Graduates - Infosys Springboard (October 2024)",
    "Natural Language Processing using Python - Infosys Springboard (October 2024)",
    "Introduction to Python - Infosys Springboard (May 2024)",
    "Java Programming Fundamentals - Infosys Springboard (May 2024)",
    "Introduction to Artificial Intelligence - IBM, Coursera (February 2023)",
    "Introduction to Data Science, AI & Development - IBM, Coursera (March 2023)",
  ],
  education: [
    {
      title: "B.Tech in Computer Science & Engineering",
      institution: "Noida Institute of Engineering & Technology, Greater Noida",
      meta: "AKTU | 2022 - 2026 (ongoing)",
    },
    {
      title: "Intermediate (Class XII)",
      institution: "Grain Chamber Public School, Muzaffarnagar",
      meta: "CBSE | 2022 | 75%",
    },
    {
      title: "High School (Class X)",
      institution: "Grain Chamber Public School, Muzaffarnagar",
      meta: "CBSE | 2020 | 73%",
    },
  ],
  achievement:
    "Winner, Volleyball Championship at Ebullience 2024, the annual technical and sports fest at NIET.",
} as const;
