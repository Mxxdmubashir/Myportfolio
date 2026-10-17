import { Project, SkillCategory, ExperienceItem, CertificationItem } from '../types';

export const personalInfo = {
  name: "Muhammed Mubashir",
  role: "Full-Stack Developer",
  tagline: "Building high-performance web applications, automotive telemetry dashboards, and scalable APIs.",
  currentRole: "Software Developer at Ziqx Creative Clique LLP",
  companyLocation: "DBI Skill Park, Markaz Knowledge City, Kaithappoyil, Kerala",
  education: "BCA in AI, VR & AR (Cloud Computing Specialization) — Srinivas University",
  graduationPeriod: "June 2024 – January 2027",
  email: "muhammedmubashir3001@gmail.com",
  phone: "+91 96053 42418",
  github: "https://github.com/Mxxdmubashir",
  whatsapp: "https://wa.me/919605342418",
  location: "Calicut, Kerala, India",
  availableForWork: true,
  bio: `I am a software developer at Ziqx Creative Clique LLP and a BCA student specializing in Artificial Intelligence, Virtual Reality, Augmented Reality, and Cloud Computing at Srinivas University. 

I engineer full-stack web applications, interactive dashboards, and robust REST APIs with authentication using React, TypeScript, Node.js, and PostgreSQL. With strong computer science fundamentals in C, Java, and JavaScript algorithms, I combine disciplined software engineering with AI prompting to build and ship real-world products faster.`,
  careerObjective: `To grow as a software developer by contributing to real-world product and client projects, following coding standards, collaborating with teammates, troubleshooting issues, documenting work, and completing assigned tasks within agreed timelines.`
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "Responsive UI/UX", level: "Advanced" },
      { name: "State Management", level: "Advanced" }
    ]
  },
  {
    name: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Advanced", highlight: true },
      { name: "Express.js", level: "Advanced", highlight: true },
      { name: "RESTful APIs", level: "Advanced", highlight: true },
      { name: "Authentication (JWT)", level: "Advanced" },
      { name: "MERN Stack", level: "Advanced" },
      { name: "LAMP Stack", level: "Intermediate" }
    ]
  },
  {
    name: "Database & Data Handling",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced", highlight: true },
      { name: "SQL", level: "Advanced", highlight: true },
      { name: "Database Design", level: "Intermediate" },
      { name: "Information Retrieval", level: "Advanced" },
      { name: "Data Modeling", level: "Advanced" }
    ]
  },
  {
    name: "Systems & Programming Languages",
    icon: "Code",
    skills: [
      { name: "Java", level: "Advanced", highlight: true },
      { name: "C Programming", level: "Advanced" },
      { name: "C++", level: "Intermediate" },
      { name: "Data Structures & Algos", level: "Certified", highlight: true }
    ]
  },
  {
    name: "AR/VR & Emerging Tech",
    icon: "Layers",
    skills: [
      { name: "Unity Engine", level: "Intermediate", highlight: true },
      { name: "Augmented Reality (AR)", level: "Intermediate", highlight: true },
      { name: "3D Animation & Scene Config", level: "Intermediate" },
      { name: "Automotive Telemetry (OBD-II)", level: "Intermediate", highlight: true },
      { name: "Cloud Computing", level: "Intermediate" },
      { name: "AI Prompting Workflows", level: "Expert", highlight: true }
    ]
  },
  {
    name: "Developer Tools & Workflow",
    icon: "Terminal",
    skills: [
      { name: "Git & GitHub", level: "Advanced", highlight: true },
      { name: "VS Code", level: "Expert" },
      { name: "Postman API Testing", level: "Advanced" },
      { name: "Debugging & QA", level: "Advanced" },
      { name: "Technical Documentation", level: "Advanced" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "pepito-cloud-kitchen",
    title: "Pepito Cloud Kitchen Enterprise Software",
    category: "Full-Stack",
    description: "Enterprise cloud kitchen management platform combining multi-brand virtual storefronts, high-speed POS billing, real-time Kitchen Display System (KDS), and automated recipe BOM inventory tracking.",
    longDescription: "Architected and developed a full-stack, enterprise-grade cloud kitchen system designed to run multiple virtual restaurant brands from a single kitchen facility. Features real-time multi-channel order ingestion (Swiggy, Zomato, UberEats, POS), station-based Kitchen Display System (KDS) with live timers, automated recipe portion inventory deduction (BOM), 80mm thermal receipt printing, and end-of-day Z-Report financial reconciliation.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Socket.io", "Tailwind CSS", "SQLite / SQL", "KDS & POS"],
    features: [
      "Multi-brand virtual storefront management with independent menus & channel pricing",
      "Real-time live orders aggregator hub for Swiggy, Zomato, UberEats, and POS with status steppers",
      "Station-based Kitchen Display System (KDS) with color-coded urgency timers & 1-click bump ready",
      "Touch-friendly POS billing with 80mm thermal receipt printing & UPI/Cash/Card tenders",
      "Automated recipe portion Bill of Materials (BOM) inventory deductions & low-stock alerts",
      "End-of-day Z-Report financial reconciliation and business performance analytics"
    ],
    githubUrl: "https://github.com/Mxxdmubashir/pepitocloud",
    iconName: "Utensils",
    accentColor: "from-orange-500 via-amber-500 to-red-600",
    status: "Production Ready"
  },
  {
    id: "obd-dashboard",
    title: "OBD System Reader Dashboard",
    category: "Automotive",
    description: "Real-time vehicle diagnostic telemetry dashboard presenting live engine metrics, DTC trouble codes, and sensor data in an intuitive HUD interface.",
    longDescription: "Developed a comprehensive automotive diagnostic interface concept to present real-time vehicle telemetry and diagnostic trouble codes (DTCs). Applied frontend state management, gauge animations, and data-handling architecture to make complex automotive sensor streams accessible and actionable for drivers and technicians.",
    tags: ["React", "TypeScript", "Tailwind CSS", "OBD-II Telemetry", "Real-time Data", "Data Visualization"],
    features: [
      "Live vehicle gauge telemetry: Speedometer, RPM, Coolant Temperature, Engine Load",
      "Diagnostic Trouble Code (DTC) scanner with clear code definitions & severity indicators",
      "Trip analytics and fuel efficiency monitoring",
      "Interactive status toggles: Normal, Check Engine, and Sport diagnostics"
    ],
    githubUrl: "https://github.com/Mxxdmubashir",
    iconName: "Activity",
    accentColor: "from-cyan-500 to-blue-600",
    status: "Production Ready"
  },
  {
    id: "unity-ar-solar-system",
    title: "Unity AR Solar System",
    category: "AR/VR",
    description: "Immersive Augmented Reality solar system application developed in Unity, rendering interactive 3D planetary motion and informational overlays on mobile devices.",
    longDescription: "Developed an interactive Augmented Reality Solar System application using the Unity game engine to present planetary bodies in an immersive digital environment. Configured 3D planetary models, orbital hierarchies, rotational animations, and interactive camera viewpoints. Solved APK compilation and spatial tracking challenges to deliver a smooth mobile AR experience.",
    tags: ["Unity", "C#", "Augmented Reality", "3D Modeling", "Mobile APK", "Interactive Education"],
    features: [
      "Accurate orbital trajectories and realistic rotational physics for all 8 planets",
      "Interactive touch raycasting to view planetary specs, atmospheric data, and scale",
      "Optimized 3D asset meshes and textures for mobile APK performance",
      "Spatial plane detection for stable table-top AR projection"
    ],
    githubUrl: "https://github.com/Mxxdmubashir",
    iconName: "Globe",
    accentColor: "from-purple-500 to-indigo-600",
    status: "Completed"
  },
  {
    id: "ecommerce-platform",
    title: "Full-Stack E-Commerce Platform",
    category: "Full-Stack",
    description: "Modern e-commerce platform with dynamic product catalogs, category filtering, cart management, and seamless responsive design.",
    longDescription: "Engineered a responsive e-commerce web application with rich product presentation, search and filter capabilities, shopping cart state management, and user checkout workflows. Emphasized clean frontend UI patterns, optimized image loading, and intuitive user interactions.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Tailwind CSS"],
    features: [
      "Dynamic product catalog with multi-facet category and price filtering",
      "Persistent shopping cart with live quantity and price calculations",
      "Modular REST API architecture for product data handling",
      "Mobile-first responsive design tested across multiple viewport breakpoints"
    ],
    githubUrl: "https://github.com/Mxxdmubashir",
    iconName: "ShoppingCart",
    accentColor: "from-emerald-500 to-teal-600",
    status: "Completed"
  },
  {
    id: "smart-attendance-tracker",
    title: "Smart Attendance Tracker",
    category: "Utilities",
    description: "Digital record-keeping and attendance monitoring system with automated status tracking, historical reporting, and filtering.",
    longDescription: "Created an application for recording, organizing, and monitoring attendance records across departments. Applied structured data handling, state persistence, and information retrieval algorithms to replace manual logbooks with an efficient digital portal.",
    tags: ["JavaScript", "HTML5", "CSS3", "Data Management", "Information Retrieval"],
    features: [
      "Quick-mark attendance with instant status indicators (Present, Absent, Excused)",
      "Automated attendance percentage calculations and threshold alerts",
      "Date-range filtering and searchable records table",
      "Clean exportable summaries for administration"
    ],
    githubUrl: "https://github.com/Mxxdmubashir",
    iconName: "UserCheck",
    accentColor: "from-amber-500 to-orange-600",
    status: "Completed"
  },
  {
    id: "expense-tracker-app",
    title: "Personal Expense Tracker",
    category: "Utilities",
    description: "Financial management application for logging expenses, visualizing spending breakdowns, and setting monthly budgets.",
    longDescription: "Developed an application for recording and organizing financial information. Applied data structure concepts, calculation logic, and category tagging to deliver actionable insights into personal expenditure patterns.",
    tags: ["React", "JavaScript", "State Management", "Data Analytics", "CSS3"],
    features: [
      "Categorized income and expense logging with instant balance recalculation",
      "Visual spending distribution breakdown by category (Food, Travel, Bills, etc.)",
      "Transaction history search and instant deletion/editing",
      "Persistent client-side storage for offline access"
    ],
    githubUrl: "https://github.com/Mxxdmubashir",
    iconName: "DollarSign",
    accentColor: "from-rose-500 to-pink-600",
    status: "Completed"
  },
  {
    id: "chatbot-memory-game",
    title: "Interactive AI Chatbot & Memory Game",
    category: "Utilities",
    description: "Interactive dual project: an automated conversational chatbot paired with a pattern-matching JavaScript memory card puzzle game.",
    longDescription: "Engineered an interactive conversational chatbot focusing on automated responses and keyword recognition alongside a JavaScript memory card game implementing card flipping logic, shuffle algorithms, and match detection state machines.",
    tags: ["JavaScript", "DOM Manipulation", "Game Logic", "UI State Machines", "CSS Animation"],
    features: [
      "Context-sensitive chat replies with simulated typing delays",
      "Dynamic card shuffle algorithm (Fisher-Yates) for randomized game rounds",
      "Move counter, timer, and score calculation engine",
      "Smooth 3D flip card animations using pure CSS transforms"
    ],
    githubUrl: "https://github.com/Mxxdmubashir",
    iconName: "MessageSquare",
    accentColor: "from-blue-500 to-cyan-600",
    status: "Completed"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "ziqx-developer",
    role: "Software Developer",
    company: "Ziqx Creative Clique LLP",
    location: "DBI Skill Park, Markaz Knowledge City, Kaithappoyil, Kerala",
    period: "Present",
    type: "Work",
    description: [
      "Building full-stack web applications, custom business dashboards, and responsive client websites.",
      "Developing secure RESTful APIs with authentication and database integrations using Node.js and PostgreSQL.",
      "Collaborating with the design and engineering team to implement clean UI/UX following modern industry standards.",
      "Leveraging AI-assisted development and advanced prompting workflows to accelerate delivery cycles."
    ],
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Git", "AI Prompting"]
  },
  {
    id: "srinivas-bca",
    role: "Bachelor of Computer Applications (BCA)",
    company: "Srinivas University Institute of Computer Science and Information Science",
    location: "Mangalore, India",
    period: "June 2024 – January 2027",
    type: "Education",
    description: [
      "Specialization in Artificial Intelligence (AI), Virtual Reality (VR), and Augmented Reality (AR).",
      "Cloud Computing Specialization track focusing on scalable cloud architecture and deployment models.",
      "Key coursework: Object-Oriented Programming (Java, C++), Data Structures & Algorithms, Database Management Systems (SQL), Operating Systems, and Computer Networks.",
      "Built cross-disciplinary projects including the Unity AR Solar System and automotive diagnostic dashboards."
    ],
    skills: ["AI/VR/AR", "Cloud Computing", "Java", "C/C++", "SQL", "Unity", "DSA"]
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp Developer Certification",
    date: "October 27, 2025",
    skills: ["JavaScript", "Algorithms", "Data Structures", "OOP", "Functional Programming"]
  },
  {
    title: "Front-End Development Libraries",
    issuer: "freeCodeCamp",
    date: "Certified",
    skills: ["React", "Redux", "Bootstrap", "SASS", "Responsive Layouts"]
  },
  {
    title: "Back-End Development and APIs",
    issuer: "freeCodeCamp",
    date: "Certified",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "NPM"]
  },
  {
    title: "Responsive Web Design (HTML & CSS)",
    issuer: "freeCodeCamp",
    date: "Certified",
    skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Accessibility"]
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "Academic & Professional Certification",
    date: "Certified",
    skills: ["Core Java", "OOP", "Collections", "Exception Handling"]
  },
  {
    title: "C & C++ Programming",
    issuer: "Academic & Systems Development",
    date: "Certified",
    skills: ["Memory Management", "Pointers", "Data Structures", "Algorithmic Logic"]
  }
];

