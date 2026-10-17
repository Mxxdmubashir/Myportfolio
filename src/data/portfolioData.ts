import { Project, SkillCategory, ExperienceItem, CertificationItem } from '../types';

export const personalInfo = {
  name: "Muhammed Mubashir",
  role: "Full-Stack Developer",
  tagline: "I build web applications, automotive dashboards, and backend APIs with React, TypeScript, and Node.js.",
  currentRole: "Software Developer at Ziqx Creative Clique LLP",
  companyLocation: "DBI Skill Park, Markaz Knowledge City, Kaithappoyil, Kerala",
  education: "BCA in AI, VR & AR (Cloud Computing) — Srinivas University",
  graduationPeriod: "2024 – 2027",
  email: "muhammedmubashir3001@gmail.com",
  phone: "+91 96053 42418",
  github: "https://github.com/Mxxdmubashir",
  whatsapp: "https://wa.me/919605342418",
  location: "Calicut, Kerala, India",
  availableForWork: true,
  bio: `Hey, I'm Mubashir. I'm a full-stack developer based in Calicut, Kerala. 

Currently, I work as a software developer at Ziqx Creative Clique LLP, building websites, admin dashboards, and REST APIs with authentication. At the same time, I'm in my BCA program at Srinivas University, focusing on AI, VR/AR, and Cloud Computing.

I like building things that solve actual problems—from cloud kitchen software to real-time car diagnostics (OBD-II telemetry) and interactive 3D simulations. I focus on writing clean, dependable code using React, TypeScript, Node.js, and PostgreSQL.`,
  careerObjective: `To keep growing as a software developer by working on real client and product projects, collaborating closely with teams, troubleshooting issues carefully, and shipping clean, well-tested code on time.`
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React", level: "Primary", highlight: true },
      { name: "TypeScript", level: "Primary", highlight: true },
      { name: "JavaScript (ES6+)", level: "Primary", highlight: true },
      { name: "Tailwind CSS", level: "Proficient", highlight: true },
      { name: "HTML5 & CSS3", level: "Proficient" },
      { name: "Responsive Design", level: "Proficient" }
    ]
  },
  {
    name: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Primary", highlight: true },
      { name: "Express", level: "Primary", highlight: true },
      { name: "REST APIs", level: "Primary", highlight: true },
      { name: "JWT Auth", level: "Proficient" },
      { name: "Socket.io", level: "Familiar" }
    ]
  },
  {
    name: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Primary", highlight: true },
      { name: "SQL", level: "Proficient", highlight: true },
      { name: "SQLite", level: "Proficient" },
      { name: "Schema Design", level: "Proficient" }
    ]
  },
  {
    name: "Languages & Core CS",
    icon: "Code",
    skills: [
      { name: "Java", level: "Proficient" },
      { name: "C / C++", level: "Proficient" },
      { name: "Data Structures", level: "Certified", highlight: true },
      { name: "Algorithms", level: "Certified", highlight: true }
    ]
  },
  {
    name: "Automotive & 3D Tech",
    icon: "Layers",
    skills: [
      { name: "OBD-II & CAN Telemetry", level: "Enthusiast", highlight: true },
      { name: "Unity Engine", level: "Hands-on", highlight: true },
      { name: "Augmented Reality (AR)", level: "Hands-on" },
      { name: "Cloud Computing Basics", level: "Coursework" }
    ]
  },
  {
    name: "Tools & Daily Workflow",
    icon: "Terminal",
    skills: [
      { name: "Git & GitHub", level: "Daily", highlight: true },
      { name: "VS Code", level: "Daily" },
      { name: "Postman", level: "Daily" },
      { name: "Linux Basics", level: "Familiar" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "pepito-cloud-kitchen",
    title: "Pepito Cloud Kitchen",
    category: "Full-Stack",
    description: "An enterprise POS, live kitchen display (KDS), multi-brand aggregator, and recipe inventory management platform for cloud kitchens.",
    longDescription: "A full-stack system built to manage multiple virtual food brands from one kitchen. It pulls orders together from Swiggy, Zomato, and counter billing into a live kitchen display with station timers, automated raw material portion deduction, and end-of-day cash reconciliation reports.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Socket.io", "SQLite"],
    features: [
      "Unified order stream for online aggregators and counter takeaway billing",
      "Station-based Kitchen Display System (KDS) with delay timers and 1-click bump",
      "Recipe Bill of Materials (BOM) automatically deducts inventory per order",
      "Thermal receipt printing support and daily Z-Report revenue summaries"
    ],
    githubUrl: "https://github.com/Mxxdmubashir/pepitocloud",
    iconName: "Utensils",
    accentColor: "from-amber-600 to-orange-700",
    status: "Production Ready"
  },
  {
    id: "obd-dashboard",
    title: "OBD-II Vehicle Reader",
    category: "Automotive",
    description: "Real-time car diagnostic dashboard that reads live speed, engine RPM, coolant temperature, and DTC fault codes from vehicle CAN-bus.",
    longDescription: "Inspired by my passion for automotive electronics, I developed this dashboard to visualize vehicle diagnostic telemetry clearly. Drivers and mechanics can view engine metrics in real-time, inspect diagnostic trouble codes, and verify vehicle health.",
    tags: ["React", "TypeScript", "Tailwind CSS", "OBD-II", "Telemetry"],
    features: [
      "Live gauges for Vehicle Speed, Engine RPM, Coolant Temp, and Throttle",
      "DTC trouble code scanner with human-readable fault explanations",
      "Normal, Sport, and Fault testing simulation modes",
      "Real-time CAN-bus data stream viewer"
    ],
    githubUrl: "https://github.com/Mxxdmubashir",
    iconName: "Activity",
    accentColor: "from-blue-600 to-indigo-700",
    status: "Production Ready"
  },
  {
    id: "unity-ar-solar-system",
    title: "Unity AR Solar System",
    category: "AR/VR",
    description: "An interactive Augmented Reality mobile application built with Unity that lets users project and inspect the solar system on physical surfaces.",
    longDescription: "Developed for my AR/VR coursework at Srinivas University. Users can place a 3D model of the solar system on any tabletop using mobile AR, watch realistic orbital paths, and tap planets to inspect physical specs and atmospheres.",
    tags: ["Unity", "C#", "AR", "3D Animation", "Android APK"],
    features: [
      "Surface detection for table-top AR projection on mobile devices",
      "Accurate orbital speeds and rotational axes for planets",
      "Interactive tap-to-inspect card with planetary facts and scale data",
      "Optimized mobile APK build with low draw calls"
    ],
    githubUrl: "https://github.com/Mxxdmubashir",
    iconName: "Globe",
    accentColor: "from-purple-600 to-violet-800",
    status: "Completed"
  },
  {
    id: "ecommerce-platform",
    title: "Full-Stack Storefront",
    category: "Full-Stack",
    description: "Responsive e-commerce web application with product catalog, category filters, cart persistence, and checkout.",
    longDescription: "Built with React and Node.js to practice end-to-end web architecture, cart state management, product filtering, and clean responsive layouts across mobile and desktop.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs"],
    features: [
      "Search, price filtering, and category selection",
      "Persistent cart state saved across sessions",
      "Clean modular REST API backend",
      "Mobile-friendly checkout layout"
    ],
    githubUrl: "https://github.com/Mxxdmubashir",
    iconName: "ShoppingCart",
    accentColor: "from-emerald-600 to-teal-800",
    status: "Completed"
  },
  {
    id: "smart-attendance-tracker",
    title: "Attendance Tracker",
    category: "Utilities",
    description: "Digital attendance logging tool for tracking daily records, calculating attendance percentages, and filtering by date.",
    longDescription: "Replaces manual registers with a simple, reliable web interface for tracking member and student attendance with automated stats.",
    tags: ["JavaScript", "HTML5", "CSS3", "Data Management"],
    features: [
      "Quick mark attendance with Present, Absent, and Late states",
      "Automated attendance percentage calculations",
      "Search and date filtering"
    ],
    githubUrl: "https://github.com/Mxxdmubashir",
    iconName: "UserCheck",
    accentColor: "from-amber-600 to-yellow-700",
    status: "Completed"
  },
  {
    id: "expense-tracker-app",
    title: "Expense Tracker",
    category: "Utilities",
    description: "Clean personal finance application for logging income and expenses, categorizing spending, and reviewing totals.",
    longDescription: "A lightweight financial tool for everyday budgeting. Helps track where money goes each month with category breakdowns.",
    tags: ["React", "JavaScript", "State Management", "CSS"],
    features: [
      "Income and expense entries with instant balance update",
      "Category breakdown for food, rent, transit, and bills",
      "Local storage persistence for quick offline use"
    ],
    githubUrl: "https://github.com/Mxxdmubashir",
    iconName: "DollarSign",
    accentColor: "from-rose-600 to-red-800",
    status: "Completed"
  },
  {
    id: "chatbot-memory-game",
    title: "Interactive Chatbot & Memory Game",
    category: "Utilities",
    description: "A dual JavaScript project featuring a keyword-based conversational chatbot and a card-matching memory puzzle.",
    longDescription: "Built to strengthen JavaScript DOM manipulation, state machines, and CSS 3D flip card animations.",
    tags: ["JavaScript", "DOM", "State Logic", "CSS3"],
    features: [
      "Rule-based automated chat replies",
      "Card shuffle algorithm with move counter and timer",
      "Smooth 3D flip card animations in pure CSS"
    ],
    githubUrl: "https://github.com/Mxxdmubashir",
    iconName: "MessageSquare",
    accentColor: "from-blue-600 to-slate-700",
    status: "Completed"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "ziqx-developer",
    role: "Software Developer",
    company: "Ziqx Creative Clique LLP",
    location: "DBI Skill Park, Markaz Knowledge City, Kaithappoyil, Kerala",
    period: "2024 – Present",
    type: "Work",
    description: [
      "Building full-stack web applications, custom management dashboards, and responsive client websites.",
      "Developing backend REST APIs with Node.js, Express, and PostgreSQL with user authentication.",
      "Working closely with teammates and clients to troubleshoot issues and deliver features on schedule."
    ],
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Git"]
  },
  {
    id: "srinivas-bca",
    role: "Bachelor of Computer Applications (BCA)",
    company: "Srinivas University Institute of Computer Science and Information Science",
    location: "Mangalore, India",
    period: "June 2024 – January 2027",
    type: "Education",
    description: [
      "Specializing in Artificial Intelligence, Virtual Reality, Augmented Reality, and Cloud Computing.",
      "Coursework in Object-Oriented Programming (Java, C++), Data Structures, Algorithms, and SQL Database Systems.",
      "Building practical academic projects including the Unity AR Solar System."
    ],
    skills: ["Java", "C/C++", "SQL", "Unity", "Data Structures", "AR/VR"]
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "October 2025",
    skills: ["JavaScript", "Algorithms", "Data Structures", "OOP"]
  },
  {
    title: "Front-End Development Libraries",
    issuer: "freeCodeCamp",
    date: "Certified",
    skills: ["React", "Redux", "Bootstrap", "Responsive Design"]
  },
  {
    title: "Back-End Development & APIs",
    issuer: "freeCodeCamp",
    date: "Certified",
    skills: ["Node.js", "Express", "REST APIs"]
  },
  {
    title: "Responsive Web Design (HTML & CSS)",
    issuer: "freeCodeCamp",
    date: "Certified",
    skills: ["HTML5", "CSS3", "Flexbox", "Grid"]
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "Academic Certification",
    date: "Certified",
    skills: ["Core Java", "OOP", "Collections"]
  },
  {
    title: "C & C++ Programming",
    issuer: "Academic Certification",
    date: "Certified",
    skills: ["Pointers", "Memory", "Algorithms"]
  }
];
