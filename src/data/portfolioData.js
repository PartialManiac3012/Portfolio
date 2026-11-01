export const personalInfo = {
  name: "Aditya Kumar",
  logoName: "Aditya",
  title: "CSE Student & Aspiring Software Engineer",
  subtitle: "Full-Stack Web Developer",
  location: "Dehradun / Patna, India",
  timezone: "IST (UTC+5:30)",
  availability: "Available — Open for Internships as a Fresher",
  email: "kumar.aditya30122006@gmail.com",
  phone: "9508931272",
  phoneFormatted: "+91 95089 31272",
  whatsappUrl: "https://wa.me/919508931272?text=Hi%20Aditya%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20internship%20opportunity.",
  github: "https://github.com/PartialManiac3012",
  githubUsername: "PartialManiac3012",
  linkedin: "https://www.linkedin.com/in/aditya30122006/",
  twitter: "https://x.com/Scalper957196",
  twitterHandle: "@Scalper957196",
  bioHeadline: "Building modern web software.",
  bioSubheadline: "Not just prototypes.",
  bioSummary:
    "I'm Aditya Kumar — a Computer Science & Engineering student based between Dehradun & Patna. Comfortable with full-stack web development, frontend craft, and backend APIs. Eager to learn, ship real-world code, and contribute to fast-moving engineering teams.",
  stackHighlight: "React • JavaScript • TypeScript • Node.js • Express • PostgreSQL • MongoDB • Git",
};

export const coreMetrics = {
  headlineNumber: "100%",
  headlineLabel: "Commitment to Learning & Shipping Clean Code",
  stats: [
    {
      value: "Full-Stack",
      label: "Web Competency",
      detail: "React, Node.js, Express & REST APIs",
    },
    {
      value: "100+",
      label: "Problem Solving",
      detail: "DSA & Core CS concepts practice",
    },
    {
      value: "Zero-Lag",
      label: "Responsive Interfaces",
      detail: "Mobile-first & pixel-conscious UI",
    },
    {
      value: "2026",
      label: "Internship Ready",
      detail: "Available for remote & on-site roles",
    },
  ],
  floatingBadges: [
    {
      prefix: "CSE",
      title: "Computer Science",
      subtitle: "Algorithms, Data Structures & OS",
    },
    {
      prefix: "WEB",
      title: "Full-Stack Ready",
      subtitle: "Modern React & RESTful APIs",
    },
  ],
};

export const projects = [
  {
    id: "nexus-queue",
    title: "NexusQueue",
    category: "SYSTEMS & BACKEND / JS & NODE",
    year: "2026",
    tagline: "Lightweight background task queue & job broker with retry handling.",
    description:
      "A task queue and scheduling service engineered with Node.js and Redis. Features priority queues, exponential backoff retries for failed jobs, and real-time status monitoring dashboards.",
    metrics: [
      { label: "Execution Time", val: "<12ms" },
      { label: "Job States", val: "Delayed/Active/Failed" },
      { label: "Concurrency", val: "Configurable Workers" },
    ],
    architecture: {
      problem: "Long-running tasks block the main server event loop and cause frontend timeouts.",
      solution: "Decoupled asynchronous worker processes with Redis queues and structured job failure telemetry.",
      stack: ["Node.js", "Express", "Redis", "TypeScript", "Docker"],
    },
    liveUrl: "https://github.com/PartialManiac3012",
    githubUrl: "https://github.com/PartialManiac3012",
    featured: true,
  },
  {
    id: "pulse-analytics",
    title: "PulseMetrics Dashboard",
    category: "FULL-STACK / REACT & APIS",
    year: "2025",
    tagline: "Interactive web analytics dashboard with custom data visualization.",
    description:
      "Full-stack web application designed to track user interactions and metrics. Built with React on the frontend and Express/PostgreSQL on the backend, featuring interactive SVG charts and instant filtering.",
    metrics: [
      { label: "Render Speed", val: "60 FPS UI" },
      { label: "API Latency", val: "<35ms P95" },
      { label: "Responsive", val: "100% Mobile" },
    ],
    architecture: {
      problem: "Client interfaces lag when rendering multidimensional charts and large JSON datasets.",
      solution: "Engineered memoized state updates in React with debounced query filters and indexed database tables.",
      stack: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL", "Tailwind/CSS"],
    },
    liveUrl: "https://github.com/PartialManiac3012",
    githubUrl: "https://github.com/PartialManiac3012",
    featured: true,
  },
  {
    id: "synapse-canvas",
    title: "Synapse Workspace",
    category: "FRONTEND & WEBSOCKETS",
    year: "2025",
    tagline: "Real-time collaborative whiteboard & system notes for developer teams.",
    description:
      "Interactive multi-user canvas allowing developers to draw diagrams, organize notes, and collaborate in real time using WebSockets and HTML5 Canvas API.",
    metrics: [
      { label: "Sync Latency", val: "Sub-20ms" },
      { label: "Input Frame", val: "Smooth Touch/Pen" },
      { label: "Storage", val: "Local & Cloud Backup" },
    ],
    architecture: {
      problem: "Synchronizing continuous freehand strokes across multiple clients without packet floods.",
      solution: "Throttled WebSocket broadcast events with delta compression and local optimistic canvas rendering.",
      stack: ["React", "HTML5 Canvas", "WebSockets", "Node.js", "CSS Modules"],
    },
    liveUrl: "https://github.com/PartialManiac3012",
    githubUrl: "https://github.com/PartialManiac3012",
    featured: true,
  },
  {
    id: "cloud-mesh",
    title: "DevMonitor Portal",
    category: "DEV TOOLS & APIS",
    year: "2024",
    tagline: "Full-stack developer monitoring tool tracking API status and response times.",
    description:
      "A clean monitoring web portal that pings external endpoints, calculates uptime percentages, and sends alert notifications upon downtime.",
    metrics: [
      { label: "Health Pings", val: "Every 60s" },
      { label: "Uptime Chart", val: "30-Day History" },
      { label: "Alerts", val: "Instant Webhook" },
    ],
    architecture: {
      problem: "Small services go down silently without the developer knowing until users complain.",
      solution: "Built a background polling cron with SQLite/Postgres time-series logs and automated email alerts.",
      stack: ["JavaScript", "Express", "SQLite/Postgres", "React", "NodeMailer"],
    },
    liveUrl: "https://github.com/PartialManiac3012",
    githubUrl: "https://github.com/PartialManiac3012",
    featured: false,
  },
];

export const skillsData = {
  categories: [
    {
      title: "Frontend & UI Engineering",
      icon: "Layout",
      skills: [
        { name: "React & Next.js", level: "Proficient", exp: "Comfortable" },
        { name: "JavaScript (ES6+) & TypeScript", level: "Proficient", exp: "Core Skill" },
        { name: "HTML5, CSS3 & Responsive UI", level: "Expert", exp: "Mobile-First" },
        { name: "State Management & React Hooks", level: "Proficient", exp: "Component-Driven" },
        { name: "WebSockets & Fetch / Axios APIs", level: "Proficient", exp: "Real-time" },
        { name: "UI Architecture & Retro Aesthetics", level: "Advanced", exp: "Pixel-Conscious" },
      ],
    },
    {
      title: "Backend & Web APIs",
      icon: "Server",
      skills: [
        { name: "Node.js & Express.js", level: "Proficient", exp: "RESTful APIs" },
        { name: "Authentication (JWT, Sessions)", level: "Working", exp: "Secure Auth" },
        { name: "CRUD & Middleware Architecture", level: "Proficient", exp: "Modular" },
        { name: "API Error Handling & Validation", level: "Proficient", exp: "Zod / Joi" },
        { name: "Background Jobs & Webhooks", level: "Working", exp: "Async Tasks" },
        { name: "RESTful API Standards", level: "Proficient", exp: "Standardized" },
      ],
    },
    {
      title: "Databases & Data Modeling",
      icon: "Database",
      skills: [
        { name: "PostgreSQL & Relational Design", level: "Proficient", exp: "SQL Queries" },
        { name: "MongoDB & Document Stores", level: "Proficient", exp: "Mongoose / NoSQL" },
        { name: "Redis In-Memory Caching", level: "Working", exp: "Key-Value / PubSub" },
        { name: "Database Schema Relationships", level: "Proficient", exp: "1:N & M:N Modeling" },
        { name: "Indexing & Query Optimization", level: "Learning", exp: "Query Plans" },
      ],
    },
    {
      title: "Computer Science & Developer Tools",
      icon: "Cpu",
      skills: [
        { name: "Data Structures & Algorithms", level: "Active Practice", exp: "CSE Core" },
        { name: "Git & GitHub Version Control", level: "Proficient", exp: "Branches & PRs" },
        { name: "Linux / Bash Command Line", level: "Comfortable", exp: "CLI Workflows" },
        { name: "Docker & Container Basics", level: "Learning", exp: "Containerization" },
        { name: "Object-Oriented Programming (OOP)", level: "Proficient", exp: "CSE Core" },
        { name: "Operating Systems & Networking", level: "Academic", exp: "CSE Core" },
      ],
    },
  ],
};

export const experienceTimeline = [
  {
    role: "Computer Science & Engineering Student",
    company: "CSE Undergraduate",
    period: "2024 — PRESENT",
    location: "Dehradun / Patna, India",
    highlights: [
      "Pursuing Bachelor's degree in Computer Science & Engineering, building solid foundations in Data Structures, Algorithms, OS, DBMS, and Computer Networks.",
      "Dedicated to active coding practice, hands-on software development, and modern full-stack web applications.",
      "Available for Summer/Fall Software Engineering & Web Development Internships as a motivated fresher.",
    ],
  },
  {
    role: "Full-Stack Web Developer (Projects & Open Source)",
    company: "Independent Projects & GitHub",
    period: "2024 — PRESENT",
    location: "Remote",
    highlights: [
      "Engineered multiple full-stack web applications using React, Node.js, Express, and database integrations (PostgreSQL & MongoDB).",
      "Focused on clean code conventions, responsive layouts, API contract design, and modular component architectures.",
      "Actively maintaining code repositories and building projects on GitHub (@PartialManiac3012).",
    ],
  },
];

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Strong CS Fundamentals First",
    text: "Frameworks change every few years, but algorithms, data structures, network protocols, and database modeling principles remain timeless.",
  },
  {
    number: "02",
    title: "Relentless Curiosity & Fast Learning",
    text: "As a student and fresher, the greatest superpower is rapid adaptation — diving deep into documentation, understanding error traces, and shipping practical solutions.",
  },
  {
    number: "03",
    title: "Clean, Maintainable Code",
    text: "Writing code that other developers can read and understand without friction. Sensible variable naming, modular functions, and clear commit hygiene.",
  },
  {
    number: "04",
    title: "Practical Execution Over Theory",
    text: "Theory is essential, but code that runs in the browser, talks to databases, and solves real problems is what actually creates impact.",
  },
];
